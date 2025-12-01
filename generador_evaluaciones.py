#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador de Reportes de Evaluación Técnica
Sistema para generar reportes de evaluación de practicantes en ingeniería de software
"""

import json
from datetime import datetime
from typing import List, Dict, Any
from collections import defaultdict

class GeneradorEvaluaciones:
    """Clase para generar reportes de evaluación técnica"""
    
    # Niveles de puntuación
    NIVELES = {
        'Excelente': (20, 20),
        'Competente': (15, 17),
        'Básico': (10, 14),
        'Deficiente': (5, 9),
        'Sin conocimiento': (0, 0)
    }
    
    # Competencias técnicas estándar
    COMPETENCIAS = [
        'Algoritmos y Estructuras de Datos',
        'Bases de Datos',
        'Arquitectura de Software',
        'Testing y QA',
        'DevOps y CI/CD',
        'Seguridad',
        'APIs y Microservicios',
        'Patrones de Diseño',
        'Versionado (Git)',
        'Frameworks y Librerías'
    ]
    
    def __init__(self, datos_evaluacion: Dict[str, Any]):
        """
        Inicializa el generador con los datos de evaluación
        
        Args:
            datos_evaluacion: Diccionario con la información de evaluación
        """
        self.datos = datos_evaluacion
        self.practicantes = datos_evaluacion.get('practicantes', [])
        self.fecha = datos_evaluacion.get('fecha', datetime.now().strftime('%Y-%m-%d'))
        self.evaluador = datos_evaluacion.get('evaluador', 'N/A')
        self.periodo = datos_evaluacion.get('periodo', 'N/A')
    
    def calcular_distribucion_niveles(self) -> Dict[str, int]:
        """Calcula la distribución de practicantes por nivel técnico"""
        distribucion = {nivel: 0 for nivel in self.NIVELES.keys()}
        
        for practicante in self.practicantes:
            puntaje = practicante.get('puntaje_total', 0)
            nivel = self._obtener_nivel(puntaje)
            distribucion[nivel] += 1
        
        return distribucion
    
    def _obtener_nivel(self, puntaje: int) -> str:
        """Determina el nivel técnico basado en el puntaje"""
        for nivel, (min_pts, max_pts) in self.NIVELES.items():
            if min_pts <= puntaje <= max_pts:
                return nivel
        return 'Sin conocimiento'
    
    def obtener_destacados(self) -> List[Dict[str, Any]]:
        """Obtiene los practicantes destacados (puntaje 20)"""
        destacados = [
            p for p in self.practicantes 
            if p.get('puntaje_total', 0) == 20
        ]
        return sorted(destacados, key=lambda x: x.get('nombre', ''))
    
    def obtener_requieren_capacitacion(self, umbral: int = 14) -> List[Dict[str, Any]]:
        """Obtiene practicantes que requieren capacitación (puntaje < umbral)"""
        requieren = [
            p for p in self.practicantes 
            if p.get('puntaje_total', 0) < umbral
        ]
        return sorted(requieren, key=lambda x: x.get('puntaje_total', 0))
    
    def calcular_estadisticas_competencias(self) -> Dict[str, float]:
        """Calcula el porcentaje de respuestas correctas por competencia"""
        estadisticas = defaultdict(lambda: {'correctas': 0, 'total': 0})
        
        for practicante in self.practicantes:
            competencias = practicante.get('competencias', {})
            for competencia, datos in competencias.items():
                if isinstance(datos, dict):
                    correctas = datos.get('correctas', 0)
                    total = datos.get('total', 1)
                else:
                    # Si es un porcentaje directo
                    correctas = datos
                    total = 100
                
                estadisticas[competencia]['correctas'] += correctas
                estadisticas[competencia]['total'] += total
        
        porcentajes = {}
        for competencia, stats in estadisticas.items():
            if stats['total'] > 0:
                porcentajes[competencia] = (stats['correctas'] / stats['total']) * 100
            else:
                porcentajes[competencia] = 0.0
        
        return porcentajes
    
    def generar_reporte(self) -> str:
        """Genera el reporte completo en formato Markdown"""
        distribucion = self.calcular_distribucion_niveles()
        destacados = self.obtener_destacados()
        requieren_cap = self.obtener_requieren_capacitacion()
        estadisticas = self.calcular_estadisticas_competencias()
        
        reporte = f"""# EVALUACIÓN TÉCNICA - INGENIERÍA DE SOFTWARE

**Fecha de evaluación:** {self.fecha}  
**Evaluador:** {self.evaluador}  
**Período evaluado:** {self.periodo}

---

## RESUMEN EJECUTIVO

**Total practicantes evaluados:** {len(self.practicantes)}

### DISTRIBUCIÓN POR NIVEL TÉCNICO:

- **Excelente (20pts):** {distribucion['Excelente']} practicantes
- **Competente (17-15pts):** {distribucion['Competente']} practicantes  
- **Básico (14-10pts):** {distribucion['Básico']} practicantes
- **Deficiente (09-05pts):** {distribucion['Deficiente']} practicantes
- **Sin conocimiento (00pts):** {distribucion['Sin conocimiento']} practicantes

---

## DESTACADOS TÉCNICOS (para considerar contratación):

"""
        
        if destacados:
            reporte += "| ID | Nombre/Identificador | Puntaje | Fortalezas |\n"
            reporte += "|----|---------------------|---------|------------|\n"
            for p in destacados:
                id_p = p.get('id', 'N/A')
                nombre = p.get('nombre', 'N/A')
                puntaje = p.get('puntaje_total', 0)
                fortalezas = ', '.join(p.get('fortalezas', []))
                reporte += f"| {id_p} | {nombre} | {puntaje} | {fortalezas} |\n"
        else:
            reporte += "*No hay practicantes destacados en esta evaluación.*\n"
        
        reporte += "\n---\n\n## PRACTICANTES QUE REQUIEREN CAPACITACIÓN:\n\n"
        
        if requieren_cap:
            reporte += "| ID | Nombre/Identificador | Puntaje | Áreas críticas |\n"
            reporte += "|----|---------------------|---------|----------------|\n"
            for p in requieren_cap:
                id_p = p.get('id', 'N/A')
                nombre = p.get('nombre', 'N/A')
                puntaje = p.get('puntaje_total', 0)
                areas = ', '.join(p.get('areas_mejora', []))
                reporte += f"| {id_p} | {nombre} | {puntaje} | {areas} |\n"
        else:
            reporte += "*Todos los practicantes cumplen con el nivel mínimo requerido.*\n"
        
        reporte += "\n---\n\n## ANÁLISIS POR COMPETENCIA TÉCNICA:\n\n"
        
        for competencia in self.COMPETENCIAS:
            porcentaje = estadisticas.get(competencia, 0.0)
            reporte += f"- **{competencia}:** {porcentaje:.1f}% de respuestas correctas\n"
        
        reporte += "\n---\n\n## DETALLE INDIVIDUAL POR PRACTICANTE:\n\n"
        
        for practicante in sorted(self.practicantes, key=lambda x: x.get('puntaje_total', 0), reverse=True):
            id_p = practicante.get('id', 'N/A')
            nombre = practicante.get('nombre', 'N/A')
            puntaje = practicante.get('puntaje_total', 0)
            nivel = self._obtener_nivel(puntaje)
            fortalezas = practicante.get('fortalezas', [])
            areas_mejora = practicante.get('areas_mejora', [])
            
            # Recomendación basada en puntaje
            if puntaje == 20:
                recomendacion = "Contratar"
            elif puntaje >= 15:
                recomendacion = "Contratar con capacitación"
            elif puntaje >= 10:
                recomendacion = "Requiere más evaluación"
            else:
                recomendacion = "No contratar"
            
            reporte += f"""### {id_p} - {nombre}
- **Puntaje Total:** {puntaje}/20
- **Nivel:** {nivel}
- **Fortalezas:**
"""
            for fortaleza in fortalezas:
                reporte += f"  - {fortaleza}\n"
            
            reporte += "- **Áreas de mejora:**\n"
            for area in areas_mejora:
                reporte += f"  - {area}\n"
            
            reporte += f"- **Recomendación:** {recomendacion}\n\n"
        
        reporte += "---\n\n## OBSERVACIONES GENERALES:\n\n"
        reporte += self.datos.get('observaciones', '[Notas adicionales sobre el proceso de evaluación]')
        reporte += "\n\n---\n\n## FIRMAS:\n\n"
        reporte += f"**Evaluador:** {self.evaluador}  \n"
        reporte += f"**Fecha:** {self.fecha}\n"
        
        return reporte
    
    def guardar_reporte(self, archivo_salida: str = None):
        """Guarda el reporte en un archivo"""
        if archivo_salida is None:
            archivo_salida = f"reporte_evaluacion_{self.fecha.replace('-', '_')}.md"
        
        reporte = self.generar_reporte()
        with open(archivo_salida, 'w', encoding='utf-8') as f:
            f.write(reporte)
        
        print(f"✓ Reporte generado exitosamente: {archivo_salida}")
        return archivo_salida


def main():
    """Función principal para ejecutar el generador"""
    import sys
    
    if len(sys.argv) < 2:
        print("Uso: python generador_evaluaciones.py <archivo_datos.json> [archivo_salida.md]")
        print("\nEjemplo:")
        print("  python generador_evaluaciones.py datos_evaluacion.json reporte.md")
        sys.exit(1)
    
    archivo_datos = sys.argv[1]
    archivo_salida = sys.argv[2] if len(sys.argv) > 2 else None
    
    try:
        with open(archivo_datos, 'r', encoding='utf-8') as f:
            datos = json.load(f)
        
        generador = GeneradorEvaluaciones(datos)
        generador.guardar_reporte(archivo_salida)
        
    except FileNotFoundError:
        print(f"Error: No se encontró el archivo {archivo_datos}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error al leer el archivo JSON: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error inesperado: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()

