import React, { useState } from 'react'
import './App.css'
import FormularioInicio from './components/FormularioInicio'
import Evaluacion from './components/Evaluacion'
import ResultadoEvaluacion from './components/ResultadoEvaluacion'

function App() {
  const [paso, setPaso] = useState('inicio') // 'inicio', 'evaluacion', 'resultado'
  const [datosInicio, setDatosInicio] = useState(null)
  const [resultado, setResultado] = useState(null)

  const handleIniciar = (datos) => {
    setDatosInicio(datos)
    setPaso('evaluacion')
  }

  const handleCompletar = (resultadoEvaluacion) => {
    setResultado(resultadoEvaluacion)
    setPaso('resultado')
  }

  const handleNuevaEvaluacion = () => {
    setPaso('inicio')
    setDatosInicio(null)
    setResultado(null)
  }

  return (
    <div className="app">
      {paso === 'inicio' && (
        <FormularioInicio onIniciar={handleIniciar} />
      )}
      {paso === 'evaluacion' && datosInicio && (
        <Evaluacion 
          datosInicio={datosInicio} 
          onCompletar={handleCompletar}
        />
      )}
      {paso === 'resultado' && resultado && (
        <ResultadoEvaluacion 
          resultado={resultado}
          onNuevaEvaluacion={handleNuevaEvaluacion}
        />
      )}
    </div>
  )
}

export default App

