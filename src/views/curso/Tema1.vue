<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Evaluación y mejora de los sistemas integrados de gestión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La gestión empresarial moderna se enfrenta a un entorno dinámico y competitivo que requiere de una constante adaptación y mejora. En este contexto, los sistemas integrados de gestión (SIG) emergen como una solución efectiva para alinear las distintas áreas de una organización con sus objetivos estratégicos, optimizando recursos y asegurando la calidad de los productos y servicios ofrecidos. Sin embargo, la mera implementación de un SIG no es suficiente para garantizar su efectividad. Es fundamental llevar a cabo procesos de evaluación y mejora continua que permitan identificar áreas de oportunidad y asegurar que el sistema se mantenga alineado con las necesidades del mercado y de la organización.
    

    .row.mb-5
      .col-lg-8
        h2(data-aos="fade-left") Importancia de la evaluación de SIG
    
        p(data-aos="fade-left") La evaluación de los sistemas integrados de gestión, es un proceso crítico que permite a las organizaciones medir la efectividad de sus políticas, procedimientos y prácticas. Este proceso puede incluir auditorías internas, revisiones de gestión, análisis de indicadores de rendimiento y encuestas de satisfacción del cliente. 

        p(data-aos="fade-left") A través de estas evaluaciones, las organizaciones pueden:
    
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in").mb-4.mb-lg-0
    

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Importancia de la evaluación de SIG
            p.mb-4(data-aos="fade-right") La evaluación de los sistemas integrados de gestión es un proceso esencial para garantizar la eficiencia operativa y la mejora continua dentro de una organización. En el PDF #[strong Importancia de la evaluación de SIG], se presentan los principales enfoques y herramientas para analizar el desempeño de estos sistemas, destacando su importancia en la identificación de desviaciones, el cumplimiento normativo, la transparencia y la toma de decisiones estratégicas. A través de este material, se exploran metodologías clave que permiten a las empresas fortalecer su competitividad y adaptabilidad en un entorno dinámico y exigente.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Importancia de la evaluación de SIG
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principios de los sistemas de gestión


    .bg-full-width-2.bg-fondo-2.mb-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primero
                p.mb-0 Los procesos organizacionales constituyen la columna vertebral del funcionamiento eficiente de cualquier entidad, dado que son los encargados de definir cómo se llevan a cabo las actividades diarias y cómo se toman decisiones cruciales.

          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo
                p.mb-0 En un mundo empresarial cada vez más dinámico y competitivo, la necesidad de optimizar estos procesos se convierte en un imperativo. Cuando estos procesos se integran dentro de un Sistema de Gestión Integral (SIG), se logra no solo una gestión más coherente, sino también una alineación efectiva con los objetivos estratégicos de la organización.


    
    
        
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La integración de los procesos organizacionales en un SIG, implica un análisis exhaustivo y una posible reestructuración de las actividades existentes. Esta revisión permite adoptar una visión holística que favorece la coordinación entre diferentes departamentos y fomenta la colaboración en toda la entidad. La sinergia generada por esta integración no solo mejora la eficiencia operativa, sino que también contribuye a un ambiente de trabajo más cohesionado y proactivo.
    
        p(data-aos="fade-left").mb-4 Conozcamos algunos procesos:
    
    

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='Diagrama de procesos de gestión', style="max-width: 1130px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2.3%" y="49.5%" numero="+")
                h5 Gestión de calidad
                p Uno de los procesos organizacionales más relevantes que se pueden integrar en un SIG es la gestión de calidad. Este proceso no solo se enfoca en asegurar que los productos o servicios ofrecidos cumplan con los estándares requeridos, sino que también se centra en la creación de valor para el cliente. Integrar la gestión de calidad en un SIG permite establecer métricas y objetivos claros que no solo se alinean con otros procesos, como la gestión ambiental y la seguridad, sino que también promueven una cultura de mejora continua. Esto significa que cada miembro de la organización está comprometido con la búsqueda de la excelencia, lo que a su vez se traduce en una mayor satisfacción del cliente y en una reputación sólida en el mercado.
    
              .bg-color-white.box-shadow.p-3(x="7.2%" y="81.5%" numero="+")
                h5 Gestión de riesgos
                p Es otro proceso clave que debe ser considerado en la integración de un SIG. La identificación, evaluación y mitigación de riesgos son actividades esenciales para garantizar la sostenibilidad y el éxito de cualquier organización. Al incorporar la gestión de riesgos en un SIG, se adopta un enfoque sistemático que no solo previene incidentes, sino que también prepara a la organización para enfrentar situaciones adversas. Esto implica desarrollar protocolos específicos que aborden riesgos asociados a la calidad, el medio ambiente y la seguridad, asegurando que todos los aspectos de la operación estén interrelacionados y que se tomen decisiones informadas y proactivas.
    
              .bg-color-white.box-shadow.p-3(x="59%" y="95.5%" numero="+")
                h5 Gestión de recursos humanos
                p Es un componente crucial dentro de los procesos organizacionales. La integración de esta gestión en un SIG permite establecer políticas y procedimientos que no solo promueven el desarrollo profesional de los empleados, sino que también se centran en su bienestar integral. Esto incluye la capacitación en temas relevantes como calidad, medio ambiente y seguridad, lo que, además de mejorar la competencia del personal, fortalece su compromiso con los objetivos del SIG. Una fuerza laboral bien capacitada y motivada es esencial para la implementación exitosa de cualquier sistema de gestión, puesto que son los empleados quienes, en última instancia, llevan a cabo las actividades del día a día.
    
              .bg-color-white.box-shadow.p-3(x="96.5%" y="86%" numero="+")
                h5 Gestión de la mejora continua
                p Debe ser un proceso central en cualquier SIG. La implementación de herramientas como el ciclo PDCA (Planificar, Hacer, Verificar, Actuar) permite a las organizaciones no solo analizar su desempeño, sino también identificar áreas de mejora y establecer acciones correctivas. Al integrar este proceso dentro del SIG, se fomenta una cultura organizacional que valora la innovación y la adaptación, lo que es esencial para prosperar en un entorno empresarial que está en constante evolución.


    
              .bg-color-white.box-shadow.p-3(x="97.7%" y="54.5%" numero="+")
                h5 Gestión de la comunicación
                p Tanto interna como externa, es un proceso organizacional que merece especial atención en el contexto de un SIG. La comunicación efectiva es un pilar fundamental para el éxito de cualquier iniciativa organizacional. Al establecer canales de comunicación claros y accesibles, se facilita el flujo de información entre departamentos y se promueve la transparencia en todas las operaciones. Esta claridad es especialmente crucial en momentos de cambio, porque permite que todos los miembros de la organización estén alineados y comprometidos con las metas y objetivos establecidos, lo que resulta en una mayor cohesión y efectividad en la ejecución de estrategias.


    .row.mb-5
      .col-lg-8
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La integración de los procesos organizacionales en un Sistema de Gestión Integral no solo optimiza la eficiencia y efectividad de la organización, sino que también promueve un enfoque más sostenible y responsable en la toma de decisiones. Al abordar de manera integrada la calidad, la gestión de riesgos, los recursos humanos, la comunicación y la mejora continua, las organizaciones se posicionan de manera más competitiva en el mercado, asegurando su éxito a largo plazo.  
        
        p(data-aos="fade-left") Esta integración, sin embargo, requiere un compromiso genuino por parte de todos los niveles de la organización, así como una adecuada capacitación y sensibilización sobre la importancia de adoptar un enfoque integrado en la gestión. Solo a través de un esfuerzo colectivo se podrá alcanzar el máximo potencial y establecer un legado de sostenibilidad y éxito organizacional.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in").mb-4.mb-lg-0
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/130251" target="_blank" rel="noopener noreferrer") Sevilla Tendero, J. (2019). Auditoría de los sistemas integrados de gestión ISO 9001:2015, ISO 14001:2015, ISO 45001:2018: ( ed.). FC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=eue5HtagBA4" target="_blank" rel="noopener noreferrer") CEC - IAEN. (2016, 15 de noviembre). M2_La Gestión por procesos en la Actualidad [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
