<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Pensamiento basado en riesgos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El pensamiento basado en riesgos es un enfoque fundamental que se ha consolidado en la gestión de sistemas de gestión integrados (SIG), como el Sistema de Gestión de Calidad (SGC) y el Sistema de Gestión Ambiental (SGA). 
      
          p(data-aos="fade-left") Este enfoque no solo se centra en la identificación de problemas potenciales, sino que también promueve una visión proactiva que busca entender y gestionar tanto los riesgos como las oportunidades que pueden influir en la capacidad de una organización para alcanzar sus objetivos estratégicos y operativos.
      
  
      h2 Identificación de riesgos
      p El primer paso en el proceso de pensamiento basado en riesgos, es la identificación de riesgos. 

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="¿Qué implica?")
              p Este proceso esencial implica un esfuerzo sistemático para reconocer y definir una variedad de eventos o situaciones que podrían tener un impacto tanto negativo como positivo en los procesos, recursos y finalidades de la organización. La identificación de riesgos no solo se limita a reconocer amenazas, sino que también abarca oportunidades que, si se gestionan adecuadamente, pueden contribuir al logro de los objetivos organizacionales.
      
            .div(titulo="Herramientas y técnicas")
              p Para llevar a cabo esta identificación, se pueden utilizar diversas herramientas y técnicas que facilitan el análisis y la comprensión de los riesgos. Entre estas herramientas se encuentran las sesiones de lluvia de ideas, donde los miembros del equipo pueden expresar libremente sus ideas y preocupaciones; el análisis de causa raíz, que permite profundizar en las causas subyacentes de los problemas; auditorias que examinan los procesos y sistemas existentes; y revisiones de incidentes pasados, que ayudan a aprender de experiencias anteriores y a evitar la repetición de errores.
      
            .div(titulo="Participación")
              p La participación de diferentes partes interesadas es crucial en esta fase, debido a que permite captar una visión más amplia de los riesgos potenciales desde diversas perspectivas dentro de la organización. Involucrar a empleados de diferentes niveles y áreas, así como a clientes, proveedores y otros socios, enriquece el proceso de identificación de riesgos. Cada grupo puede aportar conocimientos únicos y experiencias que son vitales para una comprensión holística del entorno en el que opera la organización.
      
            .div(titulo="Contexto")
              p Además, es importante considerar el contexto en el que se desarrolla la organización, dado que factores externos como cambios en la legislación, fluctuaciones económicas, avances tecnológicos y dinámicas sociales pueden influir significativamente en el perfil de riesgos. Por lo tanto, la identificación de riesgos debe ser un proceso dinámico y continuo, que se ajuste a las circunstancias cambiantes y que se realice de manera regular para asegurar que se mantenga actualizado y relevante.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      

      .bg-full-width.bg-color-1.mb-4
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La identificación de riesgos es un proceso fundamental que sienta las bases para una gestión efectiva de riesgos. Al adoptar un enfoque proactivo y colaborativo, las organizaciones no solo pueden identificar amenazas y oportunidades, sino que también pueden fortalecer su capacidad para responder a los desafíos y aprovechar las posibilidades que se presenten en su camino. 

      h2 Evaluación de riesgos
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") La evaluación de riesgos es un componente crítico dentro del marco de gestión de riesgos de cualquier organización. Una vez que se han identificado los riesgos, el siguiente paso es la evaluación de estos, un proceso que requiere un análisis profundo y sistemático. 
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 Este análisis no solo se centra en la identificación de los riesgos, sino que también implica una evaluación exhaustiva de cada uno en términos de su probabilidad de ocurrencia y la severidad de su impacto potencial.

          p Para llevar a cabo esta evaluación, se pueden utilizar diversos métodos:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      
      
      .bg-full-width-2.bg-fondo-3
        .px-4.px-md-5.py-4

          .row.justify-content-center.align-items-stretch
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/tarjeta-1.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Métodos cualitativos
                  p.mb-0 Se centran en la descripción y clasificación de los riesgos basándose en la experiencia y el juicio experto, lo que permite a los evaluadores categorizar los riesgos en niveles de alta, media o baja prioridad.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/tarjeta-2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Métodos cuantitativos
                  p.mb-0 Emplean datos numéricos y modelos estadísticos para calcular la probabilidad que un riesgo se materialice y el impacto financiero o de otro tipo que podría resultar de ello.

          
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En muchos casos, una combinación de ambos enfoques resulta ser la más efectiva, puesto que permite a la organización tener una visión más completa y matizada de los riesgos que enfrenta. 


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La evaluación de riesgos no solo se limita a la identificación y clasificación; también juega un papel crucial en la priorización de los mismos. Por ejemplo, un riesgo que presenta una alta probabilidad de ocurrencia junto con un alto impacto potencial se consideraría una prioridad alta y, por lo tanto, debería ser objeto de atención inmediata. En contraste, un riesgo que tiene una baja probabilidad de ocurrir y un impacto igualmente bajo podría ser gestionado de manera diferente, tal vez con un enfoque más preventivo o monitoreando su evolución con menor intensidad.
      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esta priorización es esencial para asegurar que los recursos de la organización se utilicen de manera eficiente y efectiva. En un entorno donde los recursos pueden ser limitados, concentrar los esfuerzos en aquellos riesgos que podrían causar el mayor daño o que son más propensos a materializarse es fundamental para la sostenibilidad y el éxito a largo plazo.
      

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Además, la evaluación de riesgos también contribuye a la toma de decisiones informada, permitiendo que la alta dirección y otros interesados puedan entender mejor el panorama de riesgos y las implicaciones de cada uno, facilitando así la formulación de estrategias de mitigación adecuadas.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 La evaluación de riesgos es un proceso integral que no solo ayuda a identificar y clasificar los riesgos, sino que también permite a las organizaciones priorizarlos y gestionar sus recursos de manera adecuada, garantizando así una respuesta efectiva y proactiva ante posibles eventualidades. Este enfoque sistemático es esencial para construir una cultura de gestión de riesgos sólida y resiliente dentro de la organización.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      
      
      h2 Gestión de riesgos
      p La gestión de riesgos se erige como un componente fundamental dentro del marco del pensamiento basado en riesgos, constituyendo un pilar esencial para la toma de decisiones informadas y efectivas en cualquier organización. 

      .bg-full-width.bg-fondo-slider.mb-5#slide-2
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-1.png" alt="Personas analizando gráficos y documentos")
              .col-lg-7
                h4 Comienzo
                p Este proceso comienza una vez que se han identificado y evaluado los riesgos potenciales que podrían afectar el logro de los objetivos estratégicos de la empresa. La identificación de estos riesgos puede abarcar una amplia gama de factores, desde amenazas externas como cambios en el mercado o desastres naturales, hasta riesgos internos relacionados con procesos, personas o tecnología.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-2.png" alt="Equipo de trabajo analizando plan de acción")
              .col-lg-7
                h4 Plan de acción
                p Una vez que se ha realizado la evaluación de los riesgos, es imperativo desarrollar un plan de acción robusto que busque mitigar o, en el mejor de los casos, eliminar los riesgos identificados. Este plan de acción puede incluir una variedad de estrategias de gestión de riesgos, cada una diseñada para abordar diferentes tipos de riesgos de manera efectiva. Por ejemplo, una de las estrategias más proactivas es la evitación del riesgo, que implica realizar cambios en los procesos existentes o en la planificación estratégica para evitar situaciones que podrían generar riesgos. Esta opción, aunque a menudo efectiva, puede requerir ajustes significativos en la forma en que opera la organización.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-3.png" alt="Equipo discutiendo estrategias de reducción de riesgo")
              .col-lg-7
                h4 Reducción del riesgo
                p Otra estrategia común es la reducción del riesgo, que se centra en disminuir la probabilidad que un riesgo ocurra o en minimizar su impacto en caso que se materialice. Esto puede lograrse mediante la implementación de controles internos, medidas preventivas y capacitación del personal, entre otras acciones. Por ejemplo, una empresa puede optar por establecer protocolos de seguridad más estrictos para reducir el riesgo de accidentes laborales.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-4.png" alt="Equipo discutiendo transferencia de riesgos")
              .col-lg-7
                h4 Transferir el riesgo
                p Adicionalmente, existe la opción de transferir el riesgo, que puede ser particularmente útil en situaciones donde la organización no puede o no desea asumir el riesgo directamente. Esto puede lograrse a través de la contratación de seguros, donde la entidad aseguradora asume parte del riesgo financiero asociado con ciertos eventos adversos. Esta estrategia permite a la organización manejar mejor su exposición al riesgo, aunque no elimina el riesgo en sí.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-5.png" alt="Equipo analizando datos y gráficos")
              .col-lg-7
                h4 Aceptar el riesgo
                p Por último, es importante mencionar que, en algunos casos, la organización puede decidir aceptar el riesgo, especialmente si este se encuentra dentro de los límites de tolerancia establecidos. Esta decisión debe basarse en un análisis cuidadoso de los costos y beneficios, considerando si la potencial pérdida resultante del riesgo es aceptable en comparación con el costo de las medidas de mitigación.


      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 La gestión de riesgos, por lo tanto, no es un proceso estático, sino que debe ser un enfoque dinámico que se adapte continuamente a las circunstancias cambiantes y a la evolución del entorno empresarial.  


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Esto implica una revisión regular de los riesgos existentes, la monitorización de nuevos riesgos y la actualización de las estrategias de mitigación, asegurando que la organización esté siempre preparada para enfrentar los desafíos que puedan surgir en su camino. Un enfoque proactivo hacia la gestión de riesgos no solo protege a la organización, sino que también puede ofrecer oportunidades para la innovación y la mejora continua, fortaleciendo su posición competitiva en el mercado.
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Un aspecto vital del pensamiento basado en riesgos es su enfoque no solo en los riesgos, sino también en las oportunidades que pueden surgir de ellos. Este enfoque dual implica una mentalidad proactiva que busca identificar y aprovechar las posibilidades que emergen a partir de la gestión de riesgos.
      
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") En lugar de ver los riesgos únicamente como amenazas que deben ser mitigadas, las organizaciones que adoptan esta perspectiva buscan activamente cómo estos riesgos pueden ser transformados en oportunidades de mejora y crecimiento.
      
          .bg-color-3.p-4(data-aos="fade-left")
            p.mb-0 Por ejemplo, la identificación de un riesgo puede llevar a la revisión y mejora de procesos existentes. Al analizar un riesgo potencial, una organización puede descubrir ineficiencias o áreas que requieren actualización, lo que a su vez puede resultar en la optimización de sus operaciones. Este proceso no solo ayuda a minimizar la probabilidad que ocurran eventos adversos, sino que también puede resultar en un aumento de la eficiencia y la productividad.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
            

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Además, la gestión de riesgos puede abrir la puerta a la adopción de innovaciones tecnológicas. Al evaluar los riesgos asociados con la falta de modernización o la obsolescencia de herramientas y métodos, una organización puede verse motivada a invertir en nuevas tecnologías que no solo mitiguen esos riesgos, sino que también mejoren su competitividad en el mercado. Este tipo de innovación puede incluir la implementación de software avanzado, la automatización de procesos o la adopción de soluciones basadas en inteligencia artificial. 
      
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Asimismo, el pensamiento basado en riesgos fomenta la exploración de nuevos mercados. Al identificar riesgos asociados con la expansión o la diversificación, una organización puede desarrollar estrategias de mitigación que le permitan entrar en nuevos segmentos de mercado con mayor confianza. Esto no solo ayuda a diversificar las fuentes de ingresos, sino que también puede llevar a la creación de productos o servicios innovadores que respondan a las necesidades cambiantes de los consumidores.
      

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Este enfoque positivo hacia la gestión de riesgos permite a las organizaciones no solo protegerse contra pérdidas, sino también posicionarse para el crecimiento y la mejora continua. Al integrar la identificación de oportunidades dentro de su proceso de gestión de riesgos, las empresas pueden cultivar una cultura organizacional que valore tanto la resiliencia como la innovación.
      
          .bg-color-3.p-4(data-aos="fade-left")
            p.mb-0 Por ejemplo, la identificación de un riesgo puede llevar a la revisión y mejora de procesos existentes. Al analizar un riesgo potencial, una organización puede descubrir ineficiencias o áreas que requieren actualización, lo que a su vez puede resultar en la optimización de sus operaciones. Este proceso no solo ayuda a minimizar la probabilidad que ocurran eventos adversos, sino que también puede resultar en un aumento de la eficiencia y la productividad.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      


      p De esta manera, no solo se convierten en entidades más robustas frente a la adversidad, sino que también se preparan para capitalizar sobre las oportunidades que el entorno cambiante les ofrece. En un mundo empresarial cada vez más dinámico y competitivo, esta capacidad de adaptación y crecimiento se convierte en un factor crítico para el éxito sostenible a largo plazo.

      h2 Monitoreo y revisión. Un enfoque dinámico y proactivo
      p El concepto de monitoreo y revisión es un pilar fundamental en el marco del pensamiento basado en riesgos. 

      .row.align-items-start.mb-5#aco-2
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/15.png", alt="Imagen representativa de monitoreo y revisión").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="¿Qué reconoce?")
              p Este enfoque reconoce que tanto los riesgos como las oportunidades no son entidades fijas, sino variables que pueden evolucionar con el tiempo, influenciadas por una serie de factores que pueden ser internos, como cambios en la estructura organizativa, la cultura corporativa o la disponibilidad de recursos, así como externos, que pueden incluir fluctuaciones en el mercado, cambios regulatorios o alteraciones en el entorno socioeconómico. En consecuencia, se vuelve imperativo que las organizaciones establezcan e implementen mecanismos de monitoreo robustos y flexibles que les permitan no solo evaluar la efectividad de las acciones que han tomado, sino también ajustar su enfoque cuando sea necesario.
      
            .div(titulo="Continuo y sistemático")
              p Este proceso de monitoreo debe ser continuo y sistemático, lo que implica la revisión periódica de los planes de gestión de riesgos. Dichas revisiones permiten a las organizaciones identificar qué estrategias han sido efectivas, cuáles necesitan ajustes y cuáles pueden haber dejado de ser relevantes. Además, la actualización constante de registros es crucial; mantener un inventario actualizado de los riesgos y oportunidades identificados facilita una mejor toma de decisiones y permite a la organización anticiparse a posibles problemas antes que se conviertan en crisis.
      
            .div(titulo="Auditorías internas")
              p Las auditorías internas también juegan un papel vital en este proceso, proporcionando una evaluación objetiva de las prácticas y políticas de gestión de riesgos. A través de auditorías regulares, las organizaciones pueden identificar áreas de mejora y asegurar que están cumpliendo con los estándares establecidos, así como con las expectativas de las partes interesadas. Este enfoque proactivo en el monitoreo no solo ayuda a mitigar los riesgos, sino que también fomenta una cultura de mejora continua y aprendizaje organizacional.

      
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al adoptar un modelo dinámico de monitoreo y revisión, las organizaciones se colocan en una posición más favorable para adaptarse rápidamente a los cambios del entorno. Esto no solo les permite reaccionar de manera efectiva ante los desafíos, sino que también les brinda la oportunidad de capitalizar sobre las nuevas oportunidades que surgen, manteniéndose así alineadas con sus objetivos estratégicos y mejorando su competitividad en el mercado. 
      

      h2 Fortaleciendo la resiliencia organizacional

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") El pensamiento basado en riesgos ofrece un marco integral que va más allá de la simple gestión de desafíos y peligros. Proporciona a las organizaciones las herramientas necesarias para identificar y aprovechar oportunidades que podrían haber pasado desapercibidas en un enfoque más tradicional. 
      
          .bg-color-3.p-4(data-aos="fade-left")
            p Este enfoque, cuando se aplica de manera efectiva, no solo contribuye al fortalecimiento de la resiliencia organizacional, sino que también impulsa la mejora continua de sus procesos y resultados.

            p.mb-0 Al integrar el monitoreo y la revisión en la cultura organizacional, las empresas pueden posicionarse mejor para enfrentar el futuro, asegurando su sostenibilidad y éxito a largo plazo.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      
      p En un mundo en constante cambio, aquellas organizaciones que adopten un pensamiento basado en riesgos estarán mejor preparadas para navegar la incertidumbre y prosperar en la adversidad.

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/42932" target="_blank" rel="noopener noreferrer") Díaz Domínguez, L. F. & Navarro Huerga, M. A. (2014). Sistemas de Gestión Integrada para las Empresas (ERP): ( ed.). Editorial Universidad de Alcalá.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=NLvuPpeEE4A" target="_blank" rel="noopener noreferrer") Creative Zone Solutions. (2016, 2 de septiembre). RESPONSABILIDADES DE LA ALTA DIRECCIÓN - ISO 9001-2008 [Video]. YouTube.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
