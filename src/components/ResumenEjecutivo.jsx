import React from 'react'
import './ResumenEjecutivo.css'
import './seccion-titulo.css'

function ResumenEjecutivo({ totalPracticantes, distribucion }) {
  return (
    <section className="resumen-ejecutivo">
      <h2 className="seccion-titulo">RESUMEN EJECUTIVO</h2>
      
      <div className="total-practicantes">
        <span className="total-label">Total practicantes evaluados:</span>
        <span className="total-numero">{totalPracticantes}</span>
      </div>

      <h3 className="subseccion-titulo">DISTRIBUCIÓN POR NIVEL TÉCNICO:</h3>
      
      <div className="distribucion-grid">
        <div className="nivel-card excelente">
          <div className="nivel-nombre">Excelente (20pts)</div>
          <div className="nivel-cantidad">{distribucion.excelente} practicantes</div>
        </div>
        
        <div className="nivel-card competente">
          <div className="nivel-nombre">Competente (17-15pts)</div>
          <div className="nivel-cantidad">{distribucion.competente} practicantes</div>
        </div>
        
        <div className="nivel-card basico">
          <div className="nivel-nombre">Básico (14-10pts)</div>
          <div className="nivel-cantidad">{distribucion.basico} practicantes</div>
        </div>
        
        <div className="nivel-card deficiente">
          <div className="nivel-nombre">Deficiente (09-05pts)</div>
          <div className="nivel-cantidad">{distribucion.deficiente} practicantes</div>
        </div>
        
        <div className="nivel-card sin-conocimiento">
          <div className="nivel-nombre">Sin conocimiento (00pts)</div>
          <div className="nivel-cantidad">{distribucion.sinConocimiento} practicantes</div>
        </div>
      </div>
    </section>
  )
}

export default ResumenEjecutivo

