import React, { useState } from 'react'
import './DetallePracticantes.css'
import './seccion-titulo.css'

function DetallePracticantes({ practicantes, getNivel }) {
  const [expandido, setExpandido] = useState(null)

  const toggleExpandido = (id) => {
    setExpandido(expandido === id ? null : id)
  }

  const getColorNivel = (puntaje) => {
    if (puntaje === 20) return '#48bb78'
    if (puntaje >= 15 && puntaje <= 17) return '#4299e1'
    if (puntaje >= 10 && puntaje <= 14) return '#ed8936'
    if (puntaje >= 5 && puntaje <= 9) return '#f56565'
    return '#a0aec0'
  }

  const getRecomendacion = (puntaje) => {
    if (puntaje >= 18) return 'Contratar'
    if (puntaje >= 15) return 'Contratar con capacitación'
    if (puntaje >= 10) return 'Requiere más evaluación'
    return 'No contratar'
  }

  return (
    <section className="detalle-practicantes">
      <h2 className="seccion-titulo">DETALLE INDIVIDUAL POR PRACTICANTE</h2>
      
      <div className="practicantes-list">
        {practicantes.map((practicante) => (
          <div 
            key={practicante.id} 
            className="practicante-card"
            style={{ borderLeftColor: getColorNivel(practicante.puntaje_total) }}
          >
            <div 
              className="practicante-header"
              onClick={() => toggleExpandido(practicante.id)}
            >
              <div className="practicante-info">
                <h3 className="practicante-titulo">
                  {practicante.id} - {practicante.nombre}
                </h3>
                <div className="practicante-resumen">
                  <span className="practicante-puntaje">
                    Puntaje Total: {practicante.puntaje_total}/20
                  </span>
                  <span 
                    className="practicante-nivel"
                    style={{ color: getColorNivel(practicante.puntaje_total) }}
                  >
                    {getNivel(practicante.puntaje_total)}
                  </span>
                </div>
              </div>
              <button className="expandir-btn">
                {expandido === practicante.id ? '−' : '+'}
              </button>
            </div>

            {expandido === practicante.id && (
              <div className="practicante-detalle">
                <div className="detalle-seccion">
                  <h4>Fortalezas:</h4>
                  {practicante.fortalezas.length > 0 ? (
                    <ul>
                      {practicante.fortalezas.map((fortaleza, idx) => (
                        <li key={idx} className="fortaleza-item">{fortaleza}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="sin-datos">No hay fortalezas registradas</p>
                  )}
                </div>

                <div className="detalle-seccion">
                  <h4>Áreas de mejora:</h4>
                  {practicante.areas_mejora.length > 0 ? (
                    <ul>
                      {practicante.areas_mejora.map((area, idx) => (
                        <li key={idx} className="mejora-item">{area}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="sin-datos">No hay áreas de mejora registradas</p>
                  )}
                </div>

                <div className="detalle-seccion">
                  <h4>Competencias:</h4>
                  <div className="competencias-grid">
                    {Object.keys(practicante.competencias).map((competencia) => {
                      const { correctas, total } = practicante.competencias[competencia]
                      const porcentaje = (correctas / total) * 100
                      return (
                        <div key={competencia} className="competencia-mini">
                          <div className="competencia-mini-header">
                            <span>{competencia}</span>
                            <span>{porcentaje.toFixed(0)}%</span>
                          </div>
                          <div className="competencia-mini-barra">
                            <div 
                              className="competencia-mini-fill"
                              style={{
                                width: `${porcentaje}%`,
                                backgroundColor: porcentaje >= 70 ? '#48bb78' : 
                                                 porcentaje >= 50 ? '#ed8936' : '#f56565'
                              }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="detalle-seccion recomendacion">
                  <strong>Recomendación:</strong> {getRecomendacion(practicante.puntaje_total)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetallePracticantes

