import * as XLSX from 'xlsx'

export function exportarEvaluacionAExcel(resultado) {
  // Crear un nuevo libro de trabajo
  const wb = XLSX.utils.book_new()

  // ===== HOJA 1: RESPUESTAS Y NOTA (Simplificado) =====
  const respuestas = resultado.respuestas || []
  const totalCorrectas = resultado.totalCorrectas || 0
  const notaFinal = resultado.puntaje_total || 0
  
  // Crear headers
  const headers = ['Nombre']
  for (let i = 1; i <= respuestas.length; i++) {
    headers.push(`P${i}`)
  }
  headers.push('Total Correctas', 'Nota Final')
  
  // Crear fila de datos
  const filaDatos = [
    resultado.nombre,
    ...respuestas,
    totalCorrectas,
    notaFinal
  ]
  
  const datosRespuestas = [
    headers,
    filaDatos
  ]

  const wsRespuestas = XLSX.utils.aoa_to_sheet(datosRespuestas)
  
  // Ajustar ancho de columnas
  const colWidths = [{ wch: 20 }] // Nombre
  for (let i = 0; i < respuestas.length; i++) {
    colWidths.push({ wch: 8 }) // Cada pregunta
  }
  colWidths.push({ wch: 15 }, { wch: 12 }) // Total Correctas, Nota Final
  wsRespuestas['!cols'] = colWidths
  
  XLSX.utils.book_append_sheet(wb, wsRespuestas, 'Respuestas')


  // Generar nombre de archivo con fecha y nombre del practicante
  const nombreArchivo = `Evaluacion_${resultado.nombre.replace(/\s+/g, '_')}_${resultado.fecha}.xlsx`

  // Descargar el archivo
  XLSX.writeFile(wb, nombreArchivo)
}

function getNivel(puntaje) {
  if (puntaje === 20) return 'Excelente'
  if (puntaje >= 15 && puntaje <= 17) return 'Competente'
  if (puntaje >= 10 && puntaje <= 14) return 'Básico'
  if (puntaje >= 5 && puntaje <= 9) return 'Deficiente'
  return 'Sin conocimiento'
}

