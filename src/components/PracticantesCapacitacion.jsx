import React from 'react'
import './PracticantesCapacitacion.css'
import './seccion-titulo.css'

function PracticantesCapacitacion({ practicantes, getNivel }) {
  return (
    <section className="practicantes-capacitacion">
      <h2 className="seccion-titulo">PRACTICANTES QUE REQUIEREN CAPACITACIÓN</h2>
      
      <div className="capacitacion-grid">
        {practicantes.map((practicante) => (
          <div key={practicante.id} className="capacitacion-card">
            <div className="capacitacion-header">
              <span className="capacitacion-id">{practicante.id}</span>
              <span className="capacitacion-puntaje">{practicante.puntaje_total}/20</span>
            </div>
            <h3 className="capacitacion-nombre">{practicante.nombre}</h3>
            <div className="capacitacion-nivel">{getNivel(practicante.puntaje_total)}</div>
            <div className="capacitacion-areas">
              <strong>Áreas críticas:</strong>
              <ul>
                {practicante.areas_mejora.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PracticantesCapacitacion

