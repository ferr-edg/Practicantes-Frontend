@echo off
chcp 65001 >nul
echo ═══════════════════════════════════════════════════════════
echo   EJECUTANDO APLICACIÓN REACT - REPORTE DE EVALUACIÓN
echo ═══════════════════════════════════════════════════════════
echo.
cd /d "%~dp0"

if not exist node_modules (
    echo Instalando dependencias...
    call npm install
    echo.
)

echo Iniciando servidor de desarrollo...
echo.
echo ═══════════════════════════════════════════════════════════
echo   El reporte estará disponible en: http://localhost:5173
echo   Presiona Ctrl+C para detener el servidor
echo ═══════════════════════════════════════════════════════════
echo.
call npm run dev
