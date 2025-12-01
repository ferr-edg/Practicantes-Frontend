import React, { useState, useEffect } from 'react'
import './ResultadoEvaluacion.css'
import ReporteEvaluacion from './ReporteEvaluacion'
import { exportarEvaluacionAExcel } from '../utils/exportarExcel'
import { subirAGoogleSheets, abrirGoogleSheets } from '../utils/googleSheets'
import { guardarEvaluacionEnBackend } from '../utils/backendApi'

function ResultadoEvaluacion({ resultado, onNuevaEvaluacion }) {
  const [subiendo, setSubiendo] = useState(false)
  const [guardando, setGuardando] = useState(false)
  const [guardadoExitoso, setGuardadoExitoso] = useState(false)

  // Guardar automáticamente en Supabase cuando se muestra el resultado
  useEffect(() => {
    const guardarAutomaticamente = async () => {
      if (!guardadoExitoso) {
        setGuardando(true)
        try {
          const ok = await guardarEvaluacionEnBackend(resultado)
          if (ok) {
            setGuardadoExitoso(true)
            console.log('✅ Evaluación guardada automáticamente en Supabase')
          } else {
            console.warn('⚠️ No se pudo guardar automáticamente. El backend puede no estar corriendo.')
          }
        } catch (error) {
          console.error('Error guardando automáticamente:', error)
        } finally {
          setGuardando(false)
        }
      }
    }

    guardarAutomaticamente()
  }, [resultado, guardadoExitoso])

  const handleSubirGoogleSheets = async () => {
    setSubiendo(true)
    try {
      await subirAGoogleSheets(resultado)
      // Abrir Google Sheets después de copiar
      setTimeout(() => {
        abrirGoogleSheets()
      }, 500)
    } catch (error) {
      console.error('Error:', error)
      alert('Error al subir a Google Sheets. Intenta descargar el Excel.')
    } finally {
      setSubiendo(false)
    }
  }

  const handleGuardarBackend = async () => {
    setGuardando(true)
    try {
      const ok = await guardarEvaluacionEnBackend(resultado)
      if (ok) {
        setGuardadoExitoso(true)
        alert('✅ Evaluación guardada exitosamente en Supabase')
      } else {
        alert('⚠️ No se pudo guardar en Supabase. Verifica que el backend esté corriendo en http://localhost:4000')
      }
    } catch (error) {
      console.error('Error guardando en backend:', error)
      alert('Error al guardar en Supabase. Verifica la consola para más detalles.')
    } finally {
      setGuardando(false)
    }
  }

  // Convertir resultado individual a formato de datos completo
  const datosCompletos = {
    fecha: resultado.fecha,
    evaluador: resultado.evaluador,
    periodo: resultado.periodo,
    observaciones: `Evaluación realizada mediante examen técnico interactivo. El practicante ${resultado.nombre} obtuvo un puntaje de ${resultado.puntaje_total}/20.`,
    practicantes: [{
      id: `P${Date.now().toString().slice(-3)}`,
      nombre: resultado.nombre,
      puntaje_total: resultado.puntaje_total,
      fortalezas: resultado.fortalezas,
      areas_mejora: resultado.areas_mejora,
      competencias: resultado.competencias
    }]
  }

  const getNivel = (puntaje) => {
    if (puntaje === 20) return 'Excelente'
    if (puntaje >= 15 && puntaje <= 17) return 'Competente'
    if (puntaje >= 10 && puntaje <= 14) return 'Básico'
    if (puntaje >= 5 && puntaje <= 9) return 'Deficiente'
    return 'Sin conocimiento'
  }

  return (
    <div className="resultado-container">
      <div className="resultado-header">
        <h1>Resultado de la Evaluación</h1>
        <div className="resultado-resumen">
          <div className="resumen-item">
            <span className="resumen-label">Practicante:</span>
            <span className="resumen-value">{resultado.nombre}</span>
          </div>
          <div className="resumen-item">
            <span className="resumen-label">Puntaje:</span>
            <span className="resumen-value destacado">{resultado.puntaje_total}/20</span>
          </div>
          <div className="resumen-item">
            <span className="resumen-label">Nivel:</span>
            <span className="resumen-value destacado">{getNivel(resultado.puntaje_total)}</span>
          </div>
        </div>
        {guardadoExitoso && (
          <div className="mensaje-exito">
            ✅ Evaluación guardada automáticamente en Supabase
          </div>
        )}
        <div className="botones-accion">
          <button 
            onClick={() => exportarEvaluacionAExcel(resultado)} 
            className="btn-exportar-excel"
          >
            📊 Descargar Excel
          </button>
          <button 
            onClick={handleSubirGoogleSheets}
            className="btn-google-sheets"
            disabled={subiendo}
          >
            {subiendo ? '⏳ Subiendo...' : '📝 Subir a Google Sheets'}
          </button>
          <button
            onClick={handleGuardarBackend}
            className={`btn-backend-guardar ${guardadoExitoso ? 'guardado' : ''}`}
            disabled={guardando || guardadoExitoso}
            title={guardadoExitoso ? 'Ya guardado en Supabase' : 'Guardar manualmente en Supabase'}
          >
            {guardando ? '⏳ Guardando...' : guardadoExitoso ? '✅ Guardado en Supabase' : '💾 Guardar en Supabase'}
          </button>
          <button onClick={onNuevaEvaluacion} className="btn-nueva-evaluacion">
            Nueva Evaluación
          </button>
        </div>
      </div>
      
      <ReporteEvaluacion datos={datosCompletos} />
    </div>
  )
}

export default ResultadoEvaluacion

