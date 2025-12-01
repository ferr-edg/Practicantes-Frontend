// ID de la hoja de Google Sheets
const SPREADSHEET_ID = '11ra02hx6Ge5GaQG3-0Vc8RhPIQBKjzvHaaiwdPjDBGM'

// Función para preparar los datos en formato para Google Sheets
function prepararDatosParaSheets(resultado) {
  const nivel = getNivel(resultado.puntaje_total)
  
  // Preparar fila principal con todos los datos
  const filaPrincipal = [
    resultado.fecha,
    resultado.evaluador,
    resultado.periodo,
    resultado.nombre,
    resultado.puntaje_total,
    nivel,
    resultado.fortalezas.join('; '),
    resultado.areas_mejora.join('; ')
  ]

  // Preparar filas de competencias
  const filasCompetencias = Object.keys(resultado.competencias).map(competencia => {
    const { correctas, total } = resultado.competencias[competencia]
    const porcentaje = ((correctas / total) * 100).toFixed(1)
    return [
      resultado.nombre,
      competencia,
      correctas,
      total,
      porcentaje,
      correctas === total ? 'Aprobado' : 'Necesita mejora'
    ]
  })

  return {
    filaPrincipal,
    filasCompetencias
  }
}

// Función para subir a Google Sheets usando la API
export async function subirAGoogleSheets(resultado) {
  try {
    // Solo exportar respuestas y nota final
    const respuestas = resultado.respuestas || []
    const respuestasTexto = respuestas.join('\t') // Separadas por tab
    const notaFinal = resultado.puntaje_total || 0
    const totalCorrectas = resultado.totalCorrectas || 0
    
    // Crear fila con: Nombre, Respuestas (separadas por tab), Total Correctas, Nota Final
    const filaDatos = [
      resultado.nombre,
      ...respuestas,
      totalCorrectas,
      notaFinal
    ]
    
    // Crear header
    const headers = ['Nombre']
    // Agregar headers para cada pregunta (P1, P2, P3, etc.)
    for (let i = 1; i <= respuestas.length; i++) {
      headers.push(`P${i}`)
    }
    headers.push('Total Correctas', 'Nota Final')
    
    const tsvHeader = headers.join('\t')
    const tsvRow = filaDatos.join('\t')

    // Crear texto completo para copiar
    const textoCompleto = `${tsvHeader}\n${tsvRow}`

    // Copiar al portapapeles
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(textoCompleto)
      
      // Mostrar mensaje con instrucciones
      const mensaje = `✅ Datos copiados al portapapeles!\n\n` +
        `INSTRUCCIONES:\n` +
        `1. Se abrirá Google Sheets automáticamente\n` +
        `2. Selecciona la celda donde quieres pegar (ej: A1)\n` +
        `3. Presiona Ctrl+V (o Cmd+V en Mac) para pegar\n\n` +
        `Se copió: Nombre, Respuestas (P1-P10), Total Correctas, Nota Final`
      
      alert(mensaje)
      return true
    } else {
      // Fallback: mostrar los datos en un textarea
      const texto = prompt('Copia estos datos y pégalos en Google Sheets:', textoCompleto)
      return texto !== null
    }
  } catch (error) {
    console.error('Error al preparar datos para Google Sheets:', error)
    alert('Error al preparar los datos. Intenta descargar el Excel y subirlo manualmente.')
    return false
  }
}

// Función para abrir Google Sheets en una nueva pestaña
export function abrirGoogleSheets() {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`
  window.open(url, '_blank')
}

// Función para generar un link de importación
export function generarLinkImportacion(resultado) {
  const { filaPrincipal } = prepararDatosParaSheets(resultado)
  
  // Crear URL con datos codificados (limitado por tamaño de URL)
  const datos = filaPrincipal.join(',')
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=0`
  
  return url
}

function getNivel(puntaje) {
  if (puntaje === 20) return 'Excelente'
  if (puntaje >= 15 && puntaje <= 17) return 'Competente'
  if (puntaje >= 10 && puntaje <= 14) return 'Básico'
  if (puntaje >= 5 && puntaje <= 9) return 'Deficiente'
  return 'Sin conocimiento'
}

