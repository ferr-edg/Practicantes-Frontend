import React, { useState } from 'react'
import './FormularioInicio.css'
import EditorPreguntas from './EditorPreguntas'

function FormularioInicio({ onIniciar }) {
  const [nombre, setNombre] = useState('')
  const [evaluador, setEvaluador] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [mostrarEditor, setMostrarEditor] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.trim() && evaluador.trim() && periodo.trim()) {
      onIniciar({
        nombre: nombre.trim(),
        evaluador: evaluador.trim(),
        periodo: periodo.trim()
      })
    }
  }

  return (
    <div className="formulario-inicio">
      {mostrarEditor && (
        <EditorPreguntas onCerrar={() => setMostrarEditor(false)} />
      )}
      <div className="formulario-inicio-card">
        <div className="header-formulario">
          <h1 className="titulo-formulario">
            EVALUACIÓN TÉCNICA - INGENIERÍA DE SOFTWARE
          </h1>
          <button 
            onClick={() => setMostrarEditor(true)}
            className="btn-editar-preguntas"
            title="Editar preguntas"
          >
            ✏️ Editar Preguntas
          </button>
        </div>
        <p className="subtitulo-formulario">
          Complete los datos para iniciar la evaluación entre compañeros
        </p>
        
        <form onSubmit={handleSubmit} className="form-inicio">
          <div className="form-group">
            <label htmlFor="evaluador">Nombre del Estudiante que Evalúa *</label>
            <input
              type="text"
              id="evaluador"
              value={evaluador}
              onChange={(e) => setEvaluador(e.target.value)}
              placeholder="Ej: María González (tu nombre)"
              required
              className="input-form"
            />
            <small className="form-help">Tu nombre como evaluador</small>
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre del Estudiante Evaluado *</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez (compañero a evaluar)"
              required
              className="input-form"
            />
            <small className="form-help">Nombre del compañero que estás evaluando</small>
          </div>

          <div className="form-group">
            <label htmlFor="periodo">Período Evaluado *</label>
            <input
              type="text"
              id="periodo"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              placeholder="Ej: Enero 2024"
              required
              className="input-form"
            />
          </div>

          <button type="submit" className="btn-iniciar">
            Iniciar Evaluación
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormularioInicio

