import React, { useState, useEffect, useMemo } from 'react'
import './Evaluacion.css'
import { COMPETENCIAS, PREGUNTAS } from '../data/preguntas'
import { cargarPreguntas } from '../utils/preguntasStorage'

// Función para mezclar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function Evaluacion({ datosInicio, onCompletar }) {
  // Cargar preguntas editadas o usar las predeterminadas
  const preguntasUsar = useMemo(() => {
    const preguntasGuardadas = cargarPreguntas()
    if (preguntasGuardadas) {
      return preguntasGuardadas
    }
    // Si no hay preguntas guardadas, usar las predeterminadas
    const predeterminadas = {}
    COMPETENCIAS.forEach(comp => {
      predeterminadas[comp] = [PREGUNTAS[comp][0]]
    })
    return predeterminadas
  }, [])

  // Crear orden aleatorio de competencias y mapeo de opciones al inicio
  const { ordenCompetencias, mapeoOpciones } = useMemo(() => {
    // Mezclar el orden de las competencias
    const indices = Array.from({ length: COMPETENCIAS.length }, (_, i) => i)
    const ordenAleatorio = shuffleArray(indices)
    
    // Crear mapeo de opciones mezcladas para cada competencia
    const mapeo = {}
    ordenAleatorio.forEach((compIndex) => {
      const competencia = COMPETENCIAS[compIndex]
      const pregunta = preguntasUsar[competencia]?.[0] || PREGUNTAS[competencia][0]
      const indicesOpciones = Array.from({ length: pregunta.opciones.length }, (_, i) => i)
      const ordenOpciones = shuffleArray(indicesOpciones)
      
      // Crear mapeo: nueva posición -> posición original
      mapeo[compIndex] = ordenOpciones
    })
    
    return {
      ordenCompetencias: ordenAleatorio,
      mapeoOpciones: mapeo
    }
  }, [preguntasUsar])

  const [competenciaActual, setCompetenciaActual] = useState(0)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)

  // Obtener competencia actual del orden aleatorio
  const competenciaIndex = ordenCompetencias[competenciaActual]
  const competencia = COMPETENCIAS[competenciaIndex]
  const pregunta = preguntasUsar[competencia]?.[0] || PREGUNTAS[competencia][0]
  
  // Mezclar opciones usando el mapeo
  const opcionesMezcladas = mapeoOpciones[competenciaIndex].map(
    (indiceOriginal) => pregunta.opciones[indiceOriginal]
  )
  
  // Encontrar la nueva posición de la respuesta correcta
  const respuestaCorrectaOriginal = pregunta.correcta
  const nuevaPosicionCorrecta = mapeoOpciones[competenciaIndex].indexOf(respuestaCorrectaOriginal)

  const totalPreguntas = COMPETENCIAS.length // 10 preguntas en total

  const preguntasRespondidas = Object.keys(respuestas).length
  const progreso = (preguntasRespondidas / totalPreguntas) * 100

  const handleRespuesta = (opcionIndexMezclada) => {
    // Guardar el índice mezclado seleccionado
    const key = `${competenciaIndex}`
    const nuevaRespuesta = {
      ...respuestas,
      [key]: opcionIndexMezclada
    }
    setRespuestas(nuevaRespuesta)

    // Avanzar a la siguiente competencia
    if (competenciaActual < ordenCompetencias.length - 1) {
      setCompetenciaActual(competenciaActual + 1)
    } else {
      // Evaluación completada
      setMostrarResultado(true)
      calcularResultado(nuevaRespuesta)
    }
  }

  const calcularResultado = (todasRespuestas) => {
    const competenciasResultado = {}
    let puntajeTotal = 0
    const respuestasParticipante = [] // Guardar respuestas para exportar

    // Usar el orden aleatorio de competencias para calcular resultados
    ordenCompetencias.forEach((compIndex) => {
      const comp = COMPETENCIAS[compIndex]
      const preguntaComp = preguntasUsar[comp]?.[0] || PREGUNTAS[comp][0]
      const key = `${compIndex}`
      const respuestaDadaMezclada = todasRespuestas[key]
      
      // Obtener la opción seleccionada (letra A, B, C, D)
      const opcionesMezcladas = mapeoOpciones[compIndex].map(
        (indiceOriginal) => preguntaComp.opciones[indiceOriginal]
      )
      const letraRespuesta = String.fromCharCode(65 + respuestaDadaMezclada)
      respuestasParticipante.push(letraRespuesta)
      
      // Encontrar la nueva posición de la respuesta correcta para esta competencia
      const respuestaCorrectaOriginal = preguntaComp.correcta
      const nuevaPosicionCorrecta = mapeoOpciones[compIndex].indexOf(respuestaCorrectaOriginal)
      
      // Verificar si la respuesta dada coincide con la posición correcta mezclada
      const esCorrecta = respuestaDadaMezclada === nuevaPosicionCorrecta
      
      if (esCorrecta) {
        puntajeTotal += 2 // Cada pregunta vale 2 puntos (10 preguntas * 2 = 20 puntos)
        competenciasResultado[comp] = { correctas: 1, total: 1 }
      } else {
        competenciasResultado[comp] = { correctas: 0, total: 1 }
      }
    })

    // Calcular fortalezas (competencias respondidas correctamente)
    const fortalezas = []
    ordenCompetencias.forEach((compIndex) => {
      const comp = COMPETENCIAS[compIndex]
      const preguntaComp = preguntasUsar[comp]?.[0] || PREGUNTAS[comp][0]
      const key = `${compIndex}`
      const respuestaDadaMezclada = todasRespuestas[key]
      const respuestaCorrectaOriginal = preguntaComp.correcta
      const nuevaPosicionCorrecta = mapeoOpciones[compIndex].indexOf(respuestaCorrectaOriginal)
      if (respuestaDadaMezclada === nuevaPosicionCorrecta) {
        fortalezas.push(comp)
      }
    })

    // Calcular áreas de mejora (competencias respondidas incorrectamente)
    const areasMejora = []
    ordenCompetencias.forEach((compIndex) => {
      const comp = COMPETENCIAS[compIndex]
      const preguntaComp = preguntasUsar[comp]?.[0] || PREGUNTAS[comp][0]
      const key = `${compIndex}`
      const respuestaDadaMezclada = todasRespuestas[key]
      const respuestaCorrectaOriginal = preguntaComp.correcta
      const nuevaPosicionCorrecta = mapeoOpciones[compIndex].indexOf(respuestaCorrectaOriginal)
      if (respuestaDadaMezclada !== nuevaPosicionCorrecta) {
        areasMejora.push(comp)
      }
    })

    const resultado = {
      nombre: datosInicio.nombre,
      evaluador: datosInicio.evaluador,
      periodo: datosInicio.periodo,
      fecha: new Date().toISOString().split('T')[0],
      puntaje_total: Math.round(puntajeTotal * 10) / 10,
      fortalezas,
      areas_mejora: areasMejora.length > 0 ? areasMejora : ['Todas las áreas técnicas requieren reforzamiento'],
      competencias: competenciasResultado,
      respuestas: respuestasParticipante, // Guardar respuestas para exportar
      totalCorrectas: Math.round(puntajeTotal / 2) // Número de respuestas correctas
    }

    onCompletar(resultado)
  }

  if (mostrarResultado) {
    return (
      <div className="evaluacion-completada">
        <div className="completada-card">
          <div className="check-icon">✓</div>
          <h2>Evaluación Completada</h2>
          <p>Procesando resultados...</p>
        </div>
      </div>
    )
  }

  const preguntaNumero = competenciaActual + 1
  const competenciaNumero = competenciaActual + 1
  const totalCompetencias = COMPETENCIAS.length

  return (
    <div className="evaluacion-container">
      <div className="evaluacion-header">
        <div className="progreso-bar">
          <div 
            className="progreso-fill" 
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
        <div className="progreso-texto">
          Pregunta {preguntasRespondidas + 1} de {totalPreguntas}
        </div>
      </div>

      <div className="evaluacion-content">
        <div className="competencia-info">
          <span className="competencia-badge">
            Competencia {competenciaNumero} de {totalCompetencias}
          </span>
          <h2 className="competencia-nombre">{competencia}</h2>
        </div>

        <div className="pregunta-container">
          <div className="pregunta-header">
            <span className="pregunta-numero">
              Pregunta {preguntaNumero} de {totalPreguntas}
            </span>
          </div>
          
          <h3 className="pregunta-texto">{pregunta.pregunta}</h3>

          <div className="opciones-container">
            {opcionesMezcladas.map((opcion, index) => (
              <button
                key={index}
                onClick={() => handleRespuesta(index)}
                className="opcion-btn"
              >
                <span className="opcion-letra">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="opcion-texto">{opcion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evaluacion

