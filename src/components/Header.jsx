import React from 'react'
import './Header.css'
import './seccion-titulo.css'

function Header({ fecha, evaluador, periodo }) {
  return (
    <header className="header">
      <h1 className="titulo-principal">
        EVALUACIÓN TÉCNICA - INGENIERÍA DE SOFTWARE
      </h1>
      <div className="header-info">
        <div className="info-item">
          <span className="label">Fecha de evaluación:</span>
          <span className="value">{fecha}</span>
        </div>
        <div className="info-item">
          <span className="label">Evaluador:</span>
          <span className="value">{evaluador}</span>
        </div>
        <div className="info-item">
          <span className="label">Período evaluado:</span>
          <span className="value">{periodo}</span>
        </div>
      </div>
    </header>
  )
}

export default Header

