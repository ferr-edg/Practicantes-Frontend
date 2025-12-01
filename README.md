# Sistema de Evaluación Técnica - Ingeniería de Software

Sistema para generar reportes de evaluación técnica de practicantes en ingeniería de software.

## 📋 Descripción

Este sistema permite generar reportes detallados de evaluación técnica que incluyen:
- Distribución de practicantes por nivel técnico
- Listado de destacados para contratación
- Practicantes que requieren capacitación
- Análisis por competencia técnica
- Detalle individual de cada practicante

## 🚀 Uso Rápido

### 1. Preparar los datos de evaluación

Edita el archivo `datos_evaluacion_ejemplo.json` con la información de tus practicantes o crea tu propio archivo JSON con el siguiente formato:

```json
{
  "fecha": "2024-01-15",
  "evaluador": "Nombre del Evaluador",
  "periodo": "Período evaluado",
  "observaciones": "Notas generales",
  "practicantes": [
    {
      "id": "P001",
      "nombre": "Nombre del Practicante",
      "puntaje_total": 20,
      "fortalezas": ["Área 1", "Área 2"],
      "areas_mejora": ["Área 3"],
      "competencias": {
        "Algoritmos y Estructuras de Datos": {"correctas": 10, "total": 10},
        "Bases de Datos": {"correctas": 8, "total": 10}
      }
    }
  ]
}
```

### 2. Generar el reporte

Ejecuta el script de Python:

```bash
python generador_evaluaciones.py datos_evaluacion_ejemplo.json reporte.md
```

O simplemente:

```bash
python generador_evaluaciones.py datos_evaluacion_ejemplo.json
```

El reporte se generará automáticamente en formato Markdown.

## 📊 Niveles de Evaluación

El sistema clasifica a los practicantes en los siguientes niveles:

- **Excelente (20pts):** Puntaje perfecto
- **Competente (17-15pts):** Buen nivel técnico
- **Básico (14-10pts):** Nivel aceptable con áreas de mejora
- **Deficiente (09-05pts):** Requiere capacitación significativa
- **Sin conocimiento (00pts):** Sin conocimientos técnicos demostrados

## 📁 Estructura de Archivos

```
evaluacion_tecnica/
├── generador_evaluaciones.py      # Script principal para generar reportes
├── template_evaluacion.md         # Plantilla manual de evaluación
├── datos_evaluacion_ejemplo.json   # Ejemplo de datos de entrada
└── README.md                       # Este archivo
```

## 🔧 Requisitos

- Python 3.6 o superior
- No se requieren librerías externas (usa solo la biblioteca estándar)

## 📝 Formato de Datos

### Estructura del JSON de entrada:

- **fecha:** Fecha de la evaluación (formato: YYYY-MM-DD)
- **evaluador:** Nombre del evaluador
- **periodo:** Período evaluado
- **observaciones:** Notas generales sobre la evaluación
- **practicantes:** Array de objetos con:
  - **id:** Identificador único del practicante
  - **nombre:** Nombre completo
  - **puntaje_total:** Puntaje total (0-20)
  - **fortalezas:** Array de áreas donde destaca
  - **areas_mejora:** Array de áreas que necesita mejorar
  - **competencias:** Objeto con estadísticas por competencia

## 🎯 Competencias Técnicas Evaluadas

El sistema evalúa las siguientes competencias:

1. Algoritmos y Estructuras de Datos
2. Bases de Datos
3. Arquitectura de Software
4. Testing y QA
5. DevOps y CI/CD
6. Seguridad
7. APIs y Microservicios
8. Patrones de Diseño
9. Versionado (Git)
10. Frameworks y Librerías

## 📄 Ejemplo de Uso

```python
from generador_evaluaciones import GeneradorEvaluaciones
import json

# Cargar datos
with open('datos_evaluacion.json', 'r') as f:
    datos = json.load(f)

# Generar reporte
generador = GeneradorEvaluaciones(datos)
generador.guardar_reporte('mi_reporte.md')
```

## 🔍 Personalización

Puedes modificar el archivo `generador_evaluaciones.py` para:
- Agregar nuevas competencias técnicas
- Cambiar los umbrales de puntuación
- Modificar el formato del reporte
- Agregar nuevas métricas o análisis

## 📞 Soporte

Para dudas o mejoras, revisa el código fuente o modifica según tus necesidades.

---

**Versión:** 1.0  
**Última actualización:** 2024

