<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Instrumentos de evaluación de integración y estrategias para la integración'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p Para abordar el tema sobre los instrumentos de evaluación de integración y saber cómo evaluar la efectividad de estos sistemas, es esencial implementar diferentes instrumentos de evaluación que permitan medir y asegurar el desempeño y la conformidad del SIG. A continuación, se describen algunos de los principales instrumentos utilizados.


      .bg-full-width.bg-color-4.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Principales instrumentos utilizados 
              p.mb-4(data-aos="fade-right") Los instrumentos de evaluación desempeñan un papel fundamental en la gestión de sistemas integrados, permitiendo medir el desempeño organizacional y asegurar la mejora continua. En el PDF Principales instrumentos utilizados, se analizan diversas herramientas, como las auditorías internas, la revisión por la dirección y los indicadores de desempeño, que permiten verificar la conformidad con normativas y optimizar procesos estratégicos. A través de este material, se presentan enfoques prácticos para la identificación de riesgos, la revisión de documentación y la implementación de evaluaciones externas, facilitando la toma de decisiones basada en datos objetivos y promoviendo una cultura de transparencia y eficiencia en la organización.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principales instrumentos utilizados 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/6.png', alt='')
      
  
      h2(data-aos="fade-left") Estrategias para la integración

      .bg-full-width.bg-color-3
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.

              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Estrategias para la integración"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28665" target="_blank" rel="noopener noreferrer") Tor, D. (2009). Sistema integrado gestión ambiental; seguridad y salud ocupacional: ( ed.). El Cid Editor | apuntes.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=JbsTaLNtiZg" target="_blank" rel="noopener noreferrer") Gomez, G. (2015, 17 de diciembre). AUDITORÍA INTERNA y MEJORA CONTINUA EN UN SGC CON ISO 9001:2015 [Video]. YouTube.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Evaluación y mejora de los sistemas integrados de gestión',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es una de las principales funciones de la evaluación de sistemas integrados de gestión (SIG)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumentar la burocracia en la organización',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejorar la satisfacción del cliente',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Disminuir la transparencia en los procesos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Eliminar todos los riesgos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La evaluación de los SIG permite a las organizaciones medir la efectividad de sus políticas y procedimientos, lo cual contribuye a mejorar la satisfacción del cliente al identificar áreas de oportunidad.',
            mensaje_incorrecto:
              'Incorrecto. Recuerda que la evaluación de SIG busca mejorar la efectividad organizacional y la satisfacción del cliente.',
          },
          {
            id: 2,
            texto:
              'La implementación de un SIG garantiza automáticamente su efectividad.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La mera implementación de un SIG no asegura su efectividad; es necesario realizar procesos de evaluación y mejora continua para mantenerlo alineado con las necesidades del mercado.',
            mensaje_incorrecto:
              'Incorrecto. La implementación por sí sola no garantiza la efectividad, se requiere evaluación y mejora continua.',
          },
          {
            id: 3,
            texto:
              '¿Qué aspecto se considera fundamental para asegurar el cumplimiento normativo en una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La falta de auditorías',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La implementación de auditorías y revisiones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La ignorancia de las regulaciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La creación de políticas ambiguas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las auditorías y revisiones permiten evaluar sistemáticamente las prácticas y procedimientos internos, asegurando que la organización cumpla con las normativas aplicables.',
            mensaje_incorrecto:
              'Incorrecto. Las auditorías y revisiones son fundamentales para asegurar el cumplimiento normativo.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes procesos organizacionales es clave para integrar en un SIG?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Gestión de calidad',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Gestión de conflictos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Gestión de ocio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Gestión de relaciones personales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Integrar la gestión de calidad en un SIG es crucial para asegurar que los productos y servicios cumplan con los estándares requeridos y creen valor para el cliente.',
            mensaje_incorrecto:
              'Incorrecto. La gestión de calidad es un proceso clave en un SIG.',
          },
          {
            id: 5,
            texto:
              'El pensamiento basado en riesgos solo se centra en la identificación de problemas potenciales.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El pensamiento basado en riesgos también promueve la identificación de oportunidades que pueden influir positivamente en la organización, no solo la gestión de amenazas.',
            mensaje_incorrecto:
              'Incorrecto. El pensamiento basado en riesgos abarca tanto la identificación de problemas como de oportunidades.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicitaciones! Has completado con éxito la evaluación.',
        mensaje_final_reprobado:
          'Te recomendamos repasar los contenidos y volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
