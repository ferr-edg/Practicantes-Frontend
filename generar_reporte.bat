@echo off
chcp 65001 >nul
echo ═══════════════════════════════════════════════════════════
echo   GENERADOR DE REPORTES DE EVALUACIÓN TÉCNICA
echo ═══════════════════════════════════════════════════════════
echo.
cd /d "%~dp0"
echo Generando reporte desde: %CD%
echo.
python generador_evaluaciones.py datos_evaluacion_ejemplo.json reporte_evaluacion.md
echo.
echo ═══════════════════════════════════════════════════════════
echo   Reporte generado. Presiona cualquier tecla para salir...
echo ═══════════════════════════════════════════════════════════
pause >nul

