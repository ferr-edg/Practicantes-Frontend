import React from 'react'
import './ReporteEvaluacion.css'
import Header from './Header'
import ResumenEjecutivo from './ResumenEjecutivo'
import DestacadosTecnicos from './DestacadosTecnicos'
import PracticantesCapacitacion from './PracticantesCapacitacion'
import AnalisisCompetencias from './AnalisisCompetencias'
import DetallePracticantes from './DetallePracticantes'
import Observaciones from './Observaciones'
import Firmas from './Firmas'

function ReporteEvaluacion({ datos }) {
  // Calcular estadísticas
  const totalPracticantes = datos.practicantes.length
  
  const distribucion = {
    excelente: datos.practicantes.filter(p => p.puntaje_total === 20).length,
    competente: datos.practicantes.filter(p => p.puntaje_total >= 15 && p.puntaje_total <= 17).length,
    basico: datos.practicantes.filter(p => p.puntaje_total >= 10 && p.puntaje_total <= 14).length,
    deficiente: datos.practicantes.filter(p => p.puntaje_total >= 5 && p.puntaje_total <= 9).length,
    sinConocimiento: datos.practicantes.filter(p => p.puntaje_total < 5).length
  }

  const destacados = datos.practicantes
    .filter(p => p.puntaje_total >= 18)
    .sort((a, b) => b.puntaje_total - a.puntaje_total)

  const requierenCapacitacion = datos.practicantes
    .filter(p => p.puntaje_total < 15)
    .sort((a, b) => a.puntaje_total - b.puntaje_total)

  // Calcular promedios por competencia
  const competencias = {}
  datos.practicantes.forEach(practicante => {
    Object.keys(practicante.competencias).forEach(competencia => {
      if (!competencias[competencia]) {
        competencias[competencia] = { correctas: 0, total: 0 }
      }
      competencias[competencia].correctas += practicante.competencias[competencia].correctas
      competencias[competencia].total += practicante.competencias[competencia].total
    })
  })

  const promediosCompetencias = Object.keys(competencias).map(competencia => ({
    nombre: competencia,
    porcentaje: (competencias[competencia].correctas / competencias[competencia].total) * 100
  }))

  const getNivel = (puntaje) => {
    if (puntaje === 20) return 'Excelente'
    if (puntaje >= 15 && puntaje <= 17) return 'Competente'
    if (puntaje >= 10 && puntaje <= 14) return 'Básico'
    if (puntaje >= 5 && puntaje <= 9) return 'Deficiente'
    return 'Sin conocimiento'
  }

  return (
    <div className="reporte-container">
      <Header 
        fecha={datos.fecha}
        evaluador={datos.evaluador}
        periodo={datos.periodo}
      />
      
      <ResumenEjecutivo 
        totalPracticantes={totalPracticantes}
        distribucion={distribucion}
      />

      {destacados.length > 0 && (
        <DestacadosTecnicos destacados={destacados} getNivel={getNivel} />
      )}

      {requierenCapacitacion.length > 0 && (
        <PracticantesCapacitacion 
          practicantes={requierenCapacitacion} 
          getNivel={getNivel}
        />
      )}

      <AnalisisCompetencias promedios={promediosCompetencias} />

      <DetallePracticantes 
        practicantes={datos.practicantes}
        getNivel={getNivel}
      />

      <Observaciones observaciones={datos.observaciones} />

      <Firmas evaluador={datos.evaluador} fecha={datos.fecha} />
    </div>
  )
}

export default ReporteEvaluacion

