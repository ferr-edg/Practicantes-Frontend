import React from 'react'
import './DestacadosTecnicos.css'
import './seccion-titulo.css'

function DestacadosTecnicos({ destacados, getNivel }) {
  return (
    <section className="destacados-tecnicos">
      <h2 className="seccion-titulo">DESTACADOS TÉCNICOS (para considerar contratación)</h2>
      
      <div className="destacados-grid">
        {destacados.map((practicante) => (
          <div key={practicante.id} className="destacado-card">
            <div className="destacado-header">
              <span className="destacado-id">{practicante.id}</span>
              <span className="destacado-puntaje">{practicante.puntaje_total}/20</span>
            </div>
            <h3 className="destacado-nombre">{practicante.nombre}</h3>
            <div className="destacado-nivel">{getNivel(practicante.puntaje_total)}</div>
            <div className="destacado-fortalezas">
              <strong>Fortalezas:</strong>
              <ul>
                {practicante.fortalezas.map((fortaleza, idx) => (
                  <li key={idx}>{fortaleza}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DestacadosTecnicos

