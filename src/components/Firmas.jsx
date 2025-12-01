import React from 'react'
import './Firmas.css'
import './seccion-titulo.css'

function Firmas({ evaluador, fecha }) {
  return (
    <section className="firmas">
      <h2 className="seccion-titulo">FIRMAS</h2>
      <div className="firmas-content">
        <div className="firma-item">
          <strong>Evaluador:</strong> {evaluador}
        </div>
        <div className="firma-item">
          <strong>Fecha:</strong> {fecha}
        </div>
      </div>
    </section>
  )
}

export default Firmas

