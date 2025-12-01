import React from 'react'
import './Observaciones.css'
import './seccion-titulo.css'

function Observaciones({ observaciones }) {
  return (
    <section className="observaciones">
      <h2 className="seccion-titulo">OBSERVACIONES GENERALES</h2>
      <div className="observaciones-content">
        <p>{observaciones}</p>
      </div>
    </section>
  )
}

export default Observaciones

