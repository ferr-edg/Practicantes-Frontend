// Utilidades para guardar y cargar preguntas editadas desde localStorage

const STORAGE_KEY = 'evaluacion_preguntas_editadas'

export function guardarPreguntas(preguntas) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preguntas))
    return true
  } catch (error) {
    console.error('Error al guardar preguntas:', error)
    return false
  }
}

export function cargarPreguntas() {
  try {
    const preguntasGuardadas = localStorage.getItem(STORAGE_KEY)
    if (preguntasGuardadas) {
      return JSON.parse(preguntasGuardadas)
    }
    return null
  } catch (error) {
    console.error('Error al cargar preguntas:', error)
    return null
  }
}

export function resetearPreguntas() {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return true
  } catch (error) {
    console.error('Error al resetear preguntas:', error)
    return false
  }
}


