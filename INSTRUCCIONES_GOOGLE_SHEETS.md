# 📊 Instrucciones para Vincular con Google Sheets

## Cómo usar la integración con Google Sheets

### Método 1: Copiar y Pegar (Recomendado - Más Simple)

1. **Completa una evaluación** en la aplicación
2. **Haz clic en el botón "📝 Subir a Google Sheets"**
3. Los datos se copiarán automáticamente al portapapeles
4. Se abrirá tu Google Sheets automáticamente
5. **Selecciona la celda A1** (o donde quieras empezar)
6. **Presiona Ctrl+V** (o Cmd+V en Mac) para pegar los datos

### Formato de los Datos

Los datos se copian en formato TSV (Tab Separated Values) que Google Sheets entiende perfectamente:

**Primera fila (Resumen):**
- Fecha | Evaluador | Período | Nombre | Puntaje | Nivel | Fortalezas | Áreas de Mejora

**Filas siguientes (Competencias):**
- Nombre | Competencia | Correctas | Total | Porcentaje | Estado

### Estructura Recomendada en Google Sheets

Puedes organizar tu Google Sheets así:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Fecha | Evaluador | Período | Nombre | Puntaje | Nivel | Fortalezas | Áreas de Mejora |
| ... | ... | ... | ... | ... | ... | ... | ... |

Y en otra hoja o más abajo:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Nombre | Competencia | Correctas | Total | Porcentaje | Estado |
| ... | ... | ... | ... | ... | ... |

## Método 2: Descargar Excel y Subir Manualmente

1. **Haz clic en "📊 Descargar Excel"**
2. El archivo se descargará con todas las hojas
3. **Abre Google Sheets**
4. **Archivo → Importar → Subir**
5. Selecciona el archivo Excel descargado

## Tu Google Sheets

Tu hoja de cálculo está en:
https://docs.google.com/spreadsheets/d/11ra02hx6Ge5GaQG3-0Vc8RhPIQBKjzvHaaiwdPjDBGM/edit

## Notas

- Los datos se copian en formato TSV, que Google Sheets interpreta automáticamente
- Cada vez que completes una evaluación, puedes agregar una nueva fila
- Puedes crear gráficos y análisis directamente en Google Sheets
- Los datos se organizan automáticamente en columnas

## Solución de Problemas

**Si no se copia automáticamente:**
- Asegúrate de que tu navegador permita acceso al portapapeles
- Intenta descargar el Excel y subirlo manualmente

**Si los datos no se pegan correctamente:**
- Asegúrate de pegar en una celda vacía
- Google Sheets debería detectar automáticamente el formato TSV

