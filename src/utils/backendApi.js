// URL del backend: usa variable de entorno o detecta automáticamente
const getBackendUrl = () => {
  // Si hay una variable de entorno configurada, úsala
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL
  }
  
  // Si estamos en producción (no es localhost), usa la URL de Render
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return 'https://practicantes-backend.onrender.com'
  }
  
  // Por defecto, usa localhost para desarrollo
  return 'http://localhost:4000'
}

const API_BASE_URL = getBackendUrl()

export async function guardarEvaluacionEnBackend(resultado) {
  try {
    const url = `${API_BASE_URL}/api/evaluaciones`
    console.log('📡 Enviando evaluación a:', url)
    
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resultado),
    })

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}))
      console.error('Error HTTP al guardar evaluación:', resp.status, errorData)
      return false
    }

    const data = await resp.json()
    console.log('✅ Evaluación guardada en backend:', data)
    return true
  } catch (err) {
    console.error('Error llamando al backend:', err)
    return false
  }
}


