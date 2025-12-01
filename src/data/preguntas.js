// Banco de preguntas por competencia técnica
// Se usa 1 pregunta por competencia (10 preguntas en total)
// Cada pregunta vale 2 puntos (10 preguntas * 2 = 20 puntos total)

export const COMPETENCIAS = [
  'Algoritmos y Estructuras de Datos',
  'Bases de Datos',
  'Arquitectura de Software',
  'Testing y QA',
  'DevOps y CI/CD',
  'Seguridad',
  'APIs y Microservicios',
  'Patrones de Diseño',
  'Versionado (Git)',
  'Frameworks y Librerías'
]

export const PREGUNTAS = {
  'Algoritmos y Estructuras de Datos': [
    {
      id: 1,
      pregunta: '¿Cuál es la complejidad temporal de una búsqueda binaria en un array ordenado?',
      opciones: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correcta: 1
    },
    {
      id: 2,
      pregunta: '¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?',
      opciones: ['Cola (Queue)', 'Pila (Stack)', 'Lista enlazada', 'Árbol binario'],
      correcta: 1
    },
    {
      id: 3,
      pregunta: '¿Cuál es la diferencia entre un array y una lista enlazada?',
      opciones: [
        'Los arrays tienen tamaño fijo, las listas son dinámicas',
        'Las listas son más rápidas para acceso aleatorio',
        'No hay diferencia',
        'Los arrays solo almacenan números'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es un algoritmo de ordenamiento estable?',
      opciones: [
        'Mantiene el orden relativo de elementos iguales',
        'Ordena en tiempo constante',
        'Solo funciona con números',
        'Requiere memoria adicional'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Cuál es la complejidad espacial de QuickSort en el peor caso?',
      opciones: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correcta: 2
    },
    {
      id: 6,
      pregunta: '¿Qué es un grafo dirigido?',
      opciones: [
        'Un grafo donde las aristas tienen dirección',
        'Un grafo con solo un nodo',
        'Un grafo sin aristas',
        'Un grafo con ciclos'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Cuál es la diferencia entre BFS y DFS?',
      opciones: [
        'BFS usa cola, DFS usa pila',
        'DFS es más rápido siempre',
        'BFS solo funciona con árboles',
        'No hay diferencia'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es un hash table?',
      opciones: [
        'Una estructura que mapea claves a valores',
        'Una lista ordenada',
        'Un tipo de árbol',
        'Un algoritmo de ordenamiento'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Cuál es la complejidad de insertar en un heap binario?',
      opciones: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correcta: 1
    },
    {
      id: 10,
      pregunta: '¿Qué estructura de datos es mejor para implementar una cola de prioridad?',
      opciones: ['Array', 'Lista enlazada', 'Heap', 'Stack'],
      correcta: 2
    }
  ],
  'Bases de Datos': [
    {
      id: 1,
      pregunta: '¿Qué es una clave primaria (Primary Key)?',
      opciones: [
        'Un campo que identifica únicamente cada registro',
        'Un campo opcional',
        'Un tipo de índice',
        'Una relación entre tablas'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es una transacción ACID?',
      opciones: [
        'Atomicidad, Consistencia, Aislamiento, Durabilidad',
        'Un tipo de base de datos',
        'Un lenguaje de consulta',
        'Un método de backup'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es una clave foránea (Foreign Key)?',
      opciones: [
        'Una referencia a una clave primaria en otra tabla',
        'Un campo único',
        'Un tipo de índice',
        'Una restricción de tipo'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es la normalización de bases de datos?',
      opciones: [
        'Proceso de organizar datos para reducir redundancia',
        'Un método de backup',
        'Un tipo de índice',
        'Una forma de encriptar datos'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es un índice en una base de datos?',
      opciones: [
        'Estructura que mejora la velocidad de búsqueda',
        'Un tipo de tabla',
        'Una relación',
        'Un campo obligatorio'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es un JOIN en SQL?',
      opciones: [
        'Combinar filas de dos o más tablas',
        'Un tipo de dato',
        'Una función agregada',
        'Un comando de inserción'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Cuál es la diferencia entre INNER JOIN y LEFT JOIN?',
      opciones: [
        'LEFT JOIN incluye todas las filas de la tabla izquierda',
        'No hay diferencia',
        'INNER JOIN es más rápido',
        'LEFT JOIN solo funciona con dos tablas'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es un stored procedure?',
      opciones: [
        'Conjunto de comandos SQL precompilados',
        'Un tipo de tabla',
        'Un índice',
        'Una vista'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es la integridad referencial?',
      opciones: [
        'Garantizar consistencia entre tablas relacionadas',
        'Un tipo de índice',
        'Un método de backup',
        'Una forma de encriptar'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es un deadlock en bases de datos?',
      opciones: [
        'Situación donde dos transacciones se bloquean mutuamente',
        'Un tipo de error de sintaxis',
        'Una tabla corrupta',
        'Un índice dañado'
      ],
      correcta: 0
    }
  ],
  'Arquitectura de Software': [
    {
      id: 1,
      pregunta: '¿Qué es la arquitectura de software?',
      opciones: [
        'Estructura fundamental de un sistema de software',
        'Un lenguaje de programación',
        'Un framework',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es el patrón MVC?',
      opciones: [
        'Model-View-Controller: separa lógica, presentación y control',
        'Un tipo de base de datos',
        'Un framework específico',
        'Un método de deployment'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es una arquitectura de microservicios?',
      opciones: [
        'Sistema compuesto de servicios independientes',
        'Un solo servicio grande',
        'Un tipo de base de datos',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es el principio SOLID?',
      opciones: [
        'Principios de diseño orientado a objetos',
        'Un framework',
        'Un lenguaje de programación',
        'Un método de deployment'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es la separación de responsabilidades?',
      opciones: [
        'Cada módulo debe tener una única responsabilidad',
        'Un método de testing',
        'Un tipo de base de datos',
        'Un framework'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es una API REST?',
      opciones: [
        'Interfaz que usa métodos HTTP estándar',
        'Un tipo de base de datos',
        'Un framework',
        'Un lenguaje de programación'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es la escalabilidad horizontal?',
      opciones: [
        'Agregar más servidores para manejar carga',
        'Mejorar hardware existente',
        'Optimizar código',
        'Reducir funcionalidades'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es un load balancer?',
      opciones: [
        'Distribuye carga entre múltiples servidores',
        'Un tipo de base de datos',
        'Un framework',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es la arquitectura de tres capas?',
      opciones: [
        'Presentación, Lógica de negocio, Datos',
        'Frontend, Backend, Database',
        'Un framework específico',
        'Un método de deployment'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es la desacoplamiento en arquitectura?',
      opciones: [
        'Reducir dependencias entre componentes',
        'Un método de testing',
        'Un tipo de base de datos',
        'Un framework'
      ],
      correcta: 0
    }
  ],
  'Testing y QA': [
    {
      id: 1,
      pregunta: '¿Qué es una prueba unitaria?',
      opciones: [
        'Prueba de una unidad individual de código',
        'Prueba de todo el sistema',
        'Prueba manual',
        'Prueba de rendimiento'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es TDD (Test-Driven Development)?',
      opciones: [
        'Escribir tests antes del código',
        'Testing después del desarrollo',
        'Solo testing manual',
        'Un framework específico'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es una prueba de integración?',
      opciones: [
        'Prueba de interacción entre componentes',
        'Prueba de una función aislada',
        'Prueba manual',
        'Prueba de UI'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es un mock en testing?',
      opciones: [
        'Objeto simulado para aislar pruebas',
        'Un tipo de prueba',
        'Un framework',
        'Un método de deployment'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es la cobertura de código?',
      opciones: [
        'Porcentaje de código ejecutado por tests',
        'Número de tests',
        'Tiempo de ejecución',
        'Complejidad del código'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es una prueba end-to-end (E2E)?',
      opciones: [
        'Prueba del flujo completo de usuario',
        'Prueba de una función',
        'Prueba de rendimiento',
        'Prueba manual'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es un test de regresión?',
      opciones: [
        'Verificar que cambios no rompan funcionalidad existente',
        'Un nuevo tipo de test',
        'Testing de nuevas features',
        'Testing de performance'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es CI/CD en testing?',
      opciones: [
        'Integración y despliegue continuo con tests automáticos',
        'Un framework de testing',
        'Un método manual',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es una prueba de carga?',
      opciones: [
        'Evaluar rendimiento bajo carga',
        'Prueba de funcionalidad',
        'Prueba unitaria',
        'Prueba de integración'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es el testing de caja negra?',
      opciones: [
        'Testing sin conocer implementación interna',
        'Testing del código fuente',
        'Testing manual',
        'Testing automático'
      ],
      correcta: 0
    }
  ],
  'DevOps y CI/CD': [
    {
      id: 1,
      pregunta: '¿Qué es CI/CD?',
      opciones: [
        'Integración y Despliegue Continuo',
        'Un lenguaje de programación',
        'Un framework',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es Docker?',
      opciones: [
        'Plataforma de contenedores',
        'Un lenguaje de programación',
        'Un framework',
        'Un servidor web'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es un pipeline en CI/CD?',
      opciones: [
        'Secuencia automatizada de pasos de desarrollo',
        'Un tipo de base de datos',
        'Un framework',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es Kubernetes?',
      opciones: [
        'Orquestador de contenedores',
        'Un lenguaje de programación',
        'Un framework',
        'Un servidor web'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es Git?',
      opciones: [
        'Sistema de control de versiones',
        'Un framework',
        'Un servidor',
        'Un lenguaje'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es un contenedor?',
      opciones: [
        'Entorno aislado para ejecutar aplicaciones',
        'Un tipo de base de datos',
        'Un framework',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es Jenkins?',
      opciones: [
        'Servidor de automatización CI/CD',
        'Un framework',
        'Un lenguaje',
        'Un servidor web'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es la infraestructura como código (IaC)?',
      opciones: [
        'Gestionar infraestructura mediante código',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es un deployment?',
      opciones: [
        'Proceso de poner software en producción',
        'Un framework',
        'Un método de testing',
        'Un tipo de servidor'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es monitoring en DevOps?',
      opciones: [
        'Supervisión continua de aplicaciones',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    }
  ],
  'Seguridad': [
    {
      id: 1,
      pregunta: '¿Qué es SQL Injection?',
      opciones: [
        'Ataque que inserta código SQL malicioso',
        'Un tipo de base de datos',
        'Un framework',
        'Un método de backup'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es XSS (Cross-Site Scripting)?',
      opciones: [
        'Inyección de scripts maliciosos en páginas web',
        'Un framework',
        'Un método de testing',
        'Un tipo de servidor'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es HTTPS?',
      opciones: [
        'HTTP con cifrado SSL/TLS',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es autenticación?',
      opciones: [
        'Verificar identidad de usuario',
        'Encriptar datos',
        'Un framework',
        'Un método de backup'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es autorización?',
      opciones: [
        'Determinar permisos de usuario',
        'Verificar identidad',
        'Encriptar datos',
        'Un framework'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es OWASP?',
      opciones: [
        'Organización de seguridad de aplicaciones web',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es un token JWT?',
      opciones: [
        'Token de autenticación JSON',
        'Un framework',
        'Un método de backup',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es hashing de contraseñas?',
      opciones: [
        'Convertir contraseña en valor irreversible',
        'Encriptar contraseña',
        'Un framework',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es CORS?',
      opciones: [
        'Política de compartir recursos entre orígenes',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es un firewall?',
      opciones: [
        'Sistema que controla tráfico de red',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    }
  ],
  'APIs y Microservicios': [
    {
      id: 1,
      pregunta: '¿Qué es una API REST?',
      opciones: [
        'Interfaz que usa métodos HTTP estándar',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es un endpoint?',
      opciones: [
        'Punto de entrada de una API',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es JSON?',
      opciones: [
        'Formato de intercambio de datos',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es GraphQL?',
      opciones: [
        'Lenguaje de consulta para APIs',
        'Un framework',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es un microservicio?',
      opciones: [
        'Servicio independiente y desacoplado',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es un gateway API?',
      opciones: [
        'Punto de entrada único para múltiples servicios',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es rate limiting?',
      opciones: [
        'Limitar número de solicitudes por tiempo',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es versionado de API?',
      opciones: [
        'Mantener múltiples versiones de API',
        'Un framework',
        'Un método de testing',
        'Un tipo de servidor'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es un webhook?',
      opciones: [
        'Callback HTTP para notificaciones',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es documentación de API?',
      opciones: [
        'Descripción de cómo usar una API',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    }
  ],
  'Patrones de Diseño': [
    {
      id: 1,
      pregunta: '¿Qué es un patrón de diseño?',
      opciones: [
        'Solución reutilizable a problema común',
        'Un framework',
        'Un lenguaje',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es el patrón Singleton?',
      opciones: [
        'Garantizar una sola instancia de clase',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es el patrón Factory?',
      opciones: [
        'Crear objetos sin especificar clase exacta',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es el patrón Observer?',
      opciones: [
        'Notificar cambios a múltiples objetos',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es el patrón Strategy?',
      opciones: [
        'Definir familia de algoritmos intercambiables',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es el patrón Decorator?',
      opciones: [
        'Agregar funcionalidad a objetos dinámicamente',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es el patrón Adapter?',
      opciones: [
        'Permitir interfaces incompatibles trabajar juntas',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es el patrón MVC?',
      opciones: [
        'Separar Modelo, Vista y Controlador',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es el patrón Repository?',
      opciones: [
        'Abstraer acceso a datos',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es el patrón Dependency Injection?',
      opciones: [
        'Inyectar dependencias desde fuera',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    }
  ],
  'Versionado (Git)': [
    {
      id: 1,
      pregunta: '¿Qué es Git?',
      opciones: [
        'Sistema de control de versiones distribuido',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es un commit?',
      opciones: [
        'Guardar cambios en repositorio',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es una rama (branch) en Git?',
      opciones: [
        'Línea de desarrollo independiente',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es un merge?',
      opciones: [
        'Combinar cambios de ramas',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es un pull request?',
      opciones: [
        'Solicitud para integrar cambios',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es un fork?',
      opciones: [
        'Copia de repositorio para modificar',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es un conflicto de merge?',
      opciones: [
        'Cambios incompatibles en mismo archivo',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es GitHub?',
      opciones: [
        'Plataforma de hosting para Git',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es un stash en Git?',
      opciones: [
        'Guardar cambios temporalmente',
        'Un framework',
        'Un método de testing',
        'Un tipo de base de datos'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es rebase?',
      opciones: [
        'Reaplicar commits sobre otra base',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    }
  ],
  'Frameworks y Librerías': [
    {
      id: 1,
      pregunta: '¿Qué es React?',
      opciones: [
        'Biblioteca JavaScript para interfaces',
        'Un lenguaje',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 2,
      pregunta: '¿Qué es un framework?',
      opciones: [
        'Estructura base para desarrollo',
        'Un lenguaje',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 3,
      pregunta: '¿Qué es Node.js?',
      opciones: [
        'Runtime JavaScript para servidor',
        'Un framework frontend',
        'Un lenguaje',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 4,
      pregunta: '¿Qué es npm?',
      opciones: [
        'Gestor de paquetes de Node.js',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 5,
      pregunta: '¿Qué es Express.js?',
      opciones: [
        'Framework web para Node.js',
        'Un lenguaje',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 6,
      pregunta: '¿Qué es Angular?',
      opciones: [
        'Framework frontend de Google',
        'Un lenguaje',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 7,
      pregunta: '¿Qué es Vue.js?',
      opciones: [
        'Framework progresivo JavaScript',
        'Un lenguaje',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 8,
      pregunta: '¿Qué es una librería?',
      opciones: [
        'Conjunto de funciones reutilizables',
        'Un framework completo',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    },
    {
      id: 9,
      pregunta: '¿Qué es TypeScript?',
      opciones: [
        'JavaScript con tipos estáticos',
        'Un framework',
        'Un servidor',
        'Un método de testing'
      ],
      correcta: 0
    },
    {
      id: 10,
      pregunta: '¿Qué es Webpack?',
      opciones: [
        'Empaquetador de módulos',
        'Un framework',
        'Un lenguaje',
        'Un servidor'
      ],
      correcta: 0
    }
  ]
}

