import React from 'react'
import './AnalisisCompetencias.css'
import './seccion-titulo.css'

function AnalisisCompetencias({ promedios }) {
  const getColorBarra = (porcentaje) => {
    if (porcentaje >= 70) return '#48bb78'
    if (porcentaje >= 50) return '#ed8936'
    return '#f56565'
  }

  return (
    <section className="analisis-competencias">
      <h2 className="seccion-titulo">ANÁLISIS POR COMPETENCIA TÉCNICA</h2>
      
      <div className="competencias-list">
        {promedios.map((competencia, idx) => (
          <div key={idx} className="competencia-item">
            <div className="competencia-header">
              <span className="competencia-nombre">{competencia.nombre}</span>
              <span className="competencia-porcentaje">
                {competencia.porcentaje.toFixed(1)}%
              </span>
            </div>
            <div className="competencia-barra-container">
              <div 
                className="competencia-barra"
                style={{
                  width: `${competencia.porcentaje}%`,
                  backgroundColor: getColorBarra(competencia.porcentaje)
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AnalisisCompetencias

