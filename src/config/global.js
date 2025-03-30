export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evaluación y mejora de los sistemas integrados de gestión',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación y mejora de los sistemas integrados de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios de los sistemas de gestión',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pensamiento basado en riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Instrumentos de evaluación de integración y estrategias para la integración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AENOR (n.f). (2019). Sistema de gestión de organización saludable. ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/118166?page=38',
    },
    {
      referencia:
        'Cienfuegos Gayo, S. Gómez Macho, N. & Millas Alonso, Y. (2021). Guía para la realización de las auditorías internas de los sistemas de gestión: ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/177342?page=42',
    },
    {
      referencia:
        'Fontalvo Herrera, T. J. (2007). La gestión avanzada de la calidad: metodologías eficaces para el diseño, implementación y mejoramiento de un sistema de gestión de la calidad: ( ed.). Corporación para la gestión del conocimiento ASD 2000.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/94601',
    },
    {
      referencia:
        'González H. (2015). ISO 9001:2015. Enfoque basado en riesgos. Obtenido de',
      link: 'https://calidadgestion.wordpress.com',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (2015). Environmental management systems — Requirements with guidance for use (ISO 14001:2015).',
      link: 'https://www.iso.org/standard/60857.html',
    },
    {
      referencia:
        'Norma ISO 9001:2015 de calidad. (2025, 9 enero). ISO 9001:2015.',
      link: 'https://www.nueva-iso-9001-2015.com/',
    },
    {
      referencia:
        'Organización Internacional de Normalización (2018). Sistemas de gestión de la seguridad y salud en el trabajo - Requisitos con orientación para su uso (Norma ISO n.º 45001:2018).',
      link: 'https://www.iso.org/standard/63787.html',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Proceso de modificar estrategias o acciones en respuesta a cambios en el entorno o las condiciones del mercado.',
    },
    {
      termino: 'Auditorías internas',
      significado:
        'Evaluaciones sistemáticas y documentadas que se llevan a cabo para verificar la conformidad y eficacia de los procesos de un Sistema de Gestión Integrado.',
    },
    {
      termino: 'Benchmarking',
      significado:
        'Comparación del desempeño de un sistema de gestión con otras organizaciones o estándares reconocidos para identificar mejores prácticas.',
    },
    {
      termino: 'Cumplimiento normativo',
      significado:
        'Adherencia a leyes, regulaciones y estándares que rigen las operaciones de una organización.',
    },
    {
      termino: 'Cultura de mejora continua',
      significado:
        'Enfoque organizacional que promueve la evaluación regular y la optimización de procesos para fomentar la innovación y la adaptación constante.',
    },
    {
      termino: 'Desviaciones',
      significado:
        'Diferencias entre el rendimiento esperado y el rendimiento real, que pueden indicar áreas de mejora dentro de un sistema.',
    },
    {
      termino: 'Estrategias de gestión de riesgos',
      significado:
        'Planes de acción diseñados para abordar, mitigar o aceptar riesgos identificados en una organización.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'Análisis sistemático de los riesgos identificados, considerando su probabilidad de ocurrencia y el impacto potencial.',
    },
    {
      termino: 'Indicadores de desempeño',
      significado:
        'Métricas utilizadas para evaluar la eficacia y eficiencia de los procesos dentro de un Sistema de Gestión Integrado.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso cíclico de identificar y aplicar acciones correctivas y preventivas para optimizar el rendimiento organizacional.',
    },
    {
      termino: 'Monitoreo y revisión',
      significado:
        'Proceso de seguimiento continuo y evaluación de la efectividad de los sistemas de gestión, adaptándose a cambios.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'Posibilidades de mejora o crecimiento que pueden surgir a partir de la identificación y gestión de riesgos.',
    },
    {
      termino: 'Procesos organizacionales',
      significado:
        'Conjunto de actividades interrelacionadas que definen cómo se llevan a cabo las operaciones dentro de una organización.',
    },
    {
      termino: 'Revisión por la dirección',
      significado:
        'Evaluación sistemática del desempeño del Sistema de Gestión Integral realizada por la alta dirección para identificar mejoras y asegurar la alineación con los objetivos estratégicos.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de seleccionar entre diferentes opciones o acciones basado en la evaluación de información y datos relevantes.',
    },
    {
      termino: 'Valoración de riesgos',
      significado:
        'Proceso de identificar, evaluar y priorizar riesgos potenciales que afectan a la organización.',
    },
  ],
}
