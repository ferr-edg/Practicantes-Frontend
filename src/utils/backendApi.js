export async function guardarEvaluacionEnBackend(resultado) {
  try {
    const resp = await fetch('http://localhost:4000/api/evaluaciones', {
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


