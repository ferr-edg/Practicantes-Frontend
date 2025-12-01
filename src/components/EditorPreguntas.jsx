import React, { useState, useEffect } from 'react'
import './EditorPreguntas.css'
import { COMPETENCIAS, PREGUNTAS } from '../data/preguntas'
import { guardarPreguntas, cargarPreguntas, resetearPreguntas } from '../utils/preguntasStorage'

function EditorPreguntas({ onCerrar }) {
  const [preguntasEditadas, setPreguntasEditadas] = useState({})
  const [competenciaSeleccionada, setCompetenciaSeleccionada] = useState(COMPETENCIAS[0])

  useEffect(() => {
    // Cargar preguntas guardadas o usar las predeterminadas
    const preguntasGuardadas = cargarPreguntas()
    if (preguntasGuardadas) {
      setPreguntasEditadas(preguntasGuardadas)
    } else {
      // Inicializar con preguntas predeterminadas (solo la primera de cada competencia)
      const inicial = {}
      COMPETENCIAS.forEach(comp => {
        inicial[comp] = [PREGUNTAS[comp][0]]
      })
      setPreguntasEditadas(inicial)
    }
  }, [])

  const preguntaActual = preguntasEditadas[competenciaSeleccionada]?.[0] || PREGUNTAS[competenciaSeleccionada][0]

  const handleCambiarPregunta = (campo, valor) => {
    setPreguntasEditadas(prev => {
      const nuevas = { ...prev }
      if (!nuevas[competenciaSeleccionada]) {
        nuevas[competenciaSeleccionada] = [{ ...PREGUNTAS[competenciaSeleccionada][0] }]
      }
      nuevas[competenciaSeleccionada][0] = {
        ...nuevas[competenciaSeleccionada][0],
        [campo]: valor
      }
      return nuevas
    })
  }

  const handleCambiarOpcion = (index, valor) => {
    setPreguntasEditadas(prev => {
      const nuevas = { ...prev }
      if (!nuevas[competenciaSeleccionada]) {
        nuevas[competenciaSeleccionada] = [{ ...PREGUNTAS[competenciaSeleccionada][0] }]
      }
      const opciones = [...nuevas[competenciaSeleccionada][0].opciones]
      opciones[index] = valor
      nuevas[competenciaSeleccionada][0] = {
        ...nuevas[competenciaSeleccionada][0],
        opciones
      }
      return nuevas
    })
  }

  const handleCambiarCorrecta = (index) => {
    setPreguntasEditadas(prev => {
      const nuevas = { ...prev }
      if (!nuevas[competenciaSeleccionada]) {
        nuevas[competenciaSeleccionada] = [{ ...PREGUNTAS[competenciaSeleccionada][0] }]
      }
      nuevas[competenciaSeleccionada][0] = {
        ...nuevas[competenciaSeleccionada][0],
        correcta: index
      }
      return nuevas
    })
  }

  const handleGuardar = () => {
    if (guardarPreguntas(preguntasEditadas)) {
      alert('✅ Preguntas guardadas correctamente')
      onCerrar()
    } else {
      alert('❌ Error al guardar las preguntas')
    }
  }

  const handleResetear = () => {
    if (confirm('¿Estás seguro de que quieres resetear todas las preguntas a las predeterminadas?')) {
      resetearPreguntas()
      const inicial = {}
      COMPETENCIAS.forEach(comp => {
        inicial[comp] = [PREGUNTAS[comp][0]]
      })
      setPreguntasEditadas(inicial)
      alert('✅ Preguntas reseteadas')
    }
  }

  return (
    <div className="editor-preguntas-overlay">
      <div className="editor-preguntas-container">
        <div className="editor-header">
          <h2>📝 Editor de Preguntas</h2>
          <button onClick={onCerrar} className="btn-cerrar">✕</button>
        </div>

        <div className="editor-content">
          <div className="selector-competencia">
            <label>Competencia:</label>
            <select 
              value={competenciaSeleccionada} 
              onChange={(e) => setCompetenciaSeleccionada(e.target.value)}
              className="select-competencia"
            >
              {COMPETENCIAS.map(comp => (
                <option key={comp} value={comp}>{comp}</option>
              ))}
            </select>
          </div>

          <div className="editor-pregunta">
            <div className="campo-editor">
              <label>Pregunta:</label>
              <textarea
                value={preguntaActual.pregunta}
                onChange={(e) => handleCambiarPregunta('pregunta', e.target.value)}
                className="input-pregunta"
                rows="3"
              />
            </div>

            <div className="opciones-editor">
              <label>Opciones de Respuesta:</label>
              {preguntaActual.opciones.map((opcion, index) => (
                <div key={index} className="opcion-editor">
                  <input
                    type="radio"
                    name="correcta"
                    checked={preguntaActual.correcta === index}
                    onChange={() => handleCambiarCorrecta(index)}
                    className="radio-correcta"
                  />
                  <input
                    type="text"
                    value={opcion}
                    onChange={(e) => handleCambiarOpcion(index, e.target.value)}
                    className="input-opcion"
                    placeholder={`Opción ${String.fromCharCode(65 + index)}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="editor-footer">
          <button onClick={handleResetear} className="btn-resetear">
            🔄 Resetear a Predeterminadas
          </button>
          <div className="botones-accion-editor">
            <button onClick={onCerrar} className="btn-cancelar">
              Cancelar
            </button>
            <button onClick={handleGuardar} className="btn-guardar">
              💾 Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorPreguntas


