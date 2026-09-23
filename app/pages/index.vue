<script setup>
import { ref } from 'vue'


definePageMeta({
  layout: 'default',
})

useHead({
  title: 'REDAS',
})

const menuMovil = ref(false)
const dialogo = ref(false)
const tipoModal = ref('')
const tarjetaAbierta = ref(null) // controla qué tarjeta de "funciones" está desplegada

const navegacion = [
  { titulo: 'Inicio', ancla: '#inicio' },
  { titulo: 'Comunidades', ancla: '#comunidades' },
  { titulo: 'Retos académicos', ancla: '#retos' },
  { titulo: 'Portafolios', ancla: '#portafolios' },
  { titulo: 'Recursos', ancla: '#recursos' },
]

const indicadores = [
  {
    valor: '100%',
    etiqueta: 'Aprendizaje colaborativo',
    icono: 'mdi-account-group',
  },
  {
    valor: '24/7',
    etiqueta: 'Acceso a recursos',
    icono: 'mdi-clock-outline',
  },
  {
    valor: '6',
    etiqueta: 'Módulos principales',
    icono: 'mdi-view-dashboard-outline',
  },
  {
    valor: 'SENA',
    etiqueta: 'Comunidad educativa',
    icono: 'mdi-school-outline',
  },
]

const funciones = [
  {
    titulo: 'Comunidades de aprendizaje',
    descripcion:
      'Únete a espacios relacionados con tu programa de formación, comparte conocimientos y trabaja en equipo.',
    icono: 'mdi-account-group-outline',
    color: '#0E7C7B',
  },
  {
    titulo: 'Retos académicos',
    descripcion:
      'Participa en retos creados por instructores, entrega tus soluciones y demuestra tus habilidades.',
    icono: 'mdi-trophy-outline',
    color: '#05302E',
  },
  {
    titulo: 'Portafolio digital',
    descripcion:
      'Organiza tus proyectos, certificados, evidencias y habilidades en un solo lugar.',
    icono: 'mdi-folder-star-outline',
    color: '#0E7C7B',
  },
  {
    titulo: 'Recursos educativos',
    descripcion:
      'Consulta documentos, videos, enlaces y materiales de apoyo para complementar tu formación.',
    icono: 'mdi-book-open-page-variant-outline',
    color: '#05302E',
  },
  {
    titulo: 'Publicaciones',
    descripcion:
      'Realiza preguntas, comparte proyectos y participa en conversaciones académicas.',
    icono: 'mdi-post-outline',
    color: '#0E7C7B',
  },
  {
    titulo: 'Eventos y actividades',
    descripcion:
      'Entérate de talleres, charlas, actividades y eventos importantes de tu comunidad educativa.',
    icono: 'mdi-calendar-star-outline',
    color: '#05302E',
  },
]

const comunidades = [
  {
    nombre: 'Programación y desarrollo',
    descripcion:
      'Comparte conocimientos sobre desarrollo web, aplicaciones y nuevas tecnologías.',
    miembros: '248 aprendices',
    icono: 'mdi-code-tags',
    color: '#0E7C7B',
  },
  {
    nombre: 'Bases de datos',
    descripcion:
      'Aprende y conversa sobre modelado, consultas, SQL y administración de bases de datos.',
    miembros: '186 aprendices',
    icono: 'mdi-database-outline',
    color: '#05302E',
  },
  {
    nombre: 'Redes y sistemas',
    descripcion:
      'Espacio para resolver dudas sobre redes, servidores, seguridad informática y sistemas.',
    miembros: '134 aprendices',
    icono: 'mdi-lan-connect',
    color: '#0E7C7B',
  },
]

const retos = [
  {
    titulo: 'Construye una aplicación web',
    categoria: 'Programación',
    fecha: 'Entrega: 30 de septiembre',
    puntos: '250 puntos',
    icono: 'mdi-laptop',
  },
  {
    titulo: 'Diseña una base de datos',
    categoria: 'Bases de datos',
    fecha: 'Entrega: 8 de octubre',
    puntos: '180 puntos',
    icono: 'mdi-database-check-outline',
  },
  {
    titulo: 'Configura una red segura',
    categoria: 'Redes',
    fecha: 'Entrega: 15 de octubre',
    puntos: '300 puntos',
    icono: 'mdi-shield-check-outline',
  },
]

function abrirModal(tipo) {
  tipoModal.value = tipo
  dialogo.value = true
}

function alternarTarjeta(indice) {
  tarjetaAbierta.value = tarjetaAbierta.value === indice ? null : indice
}
</script>

<template>
  <div class="sena-connect">

    <!-- Barra superior -->
    <v-toolbar class="cabecera px-md-6" flat>

      <div class="identidad-redas">
        <v-avatar
          class="logo-redas"
          size="60"
        >
          <v-img
            src="/logo.jpeg"
            alt="Logo REDAS"
            contain
          />
        </v-avatar>

        <div class="texto-redas">
          <div class="nombre-proyecto">
            REDAS
          </div>

          <div class="subtitulo-proyecto">
            Red Educativa de Aprendices SENA
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="d-none d-md-flex ml-8 navegacion-redas">
        <v-btn
          v-for="enlace in navegacion"
          :key="enlace.ancla"
          :href="enlace.ancla"
          class="text-none"
          variant="text"
          color="#05302E"
        >
          {{ enlace.titulo }}
        </v-btn>
      </div>

      <v-spacer />

      <!-- Botones -->
      <div class="d-none d-sm-flex align-center ga-2 botones-redas">
        <v-btn
          class="text-none"
          color="#7B2CBF"
          variant="outlined"
          @click="abrirModal('login')"
        >
          Iniciar sesión
        </v-btn>

        <v-btn
          class="text-none"
          color="#7B2CBF"
          variant="flat"
          style="color: white;"
          @click="abrirModal('registro')"
        >
          Registrarse
        </v-btn>
      </div>

      <!-- Menú móvil -->
      <v-menu v-model="menuMovil">
        <template #activator="{ props }">
          <v-btn
            class="d-flex d-md-none ml-2"
            icon="mdi-menu"
            v-bind="props"
            variant="text"
            color="#05302E"
          />
        </template>

        <v-list>
          <v-list-item
            v-for="enlace in navegacion"
            :key="enlace.ancla"
            :href="enlace.ancla"
            :title="enlace.titulo"
            @click="menuMovil = false"
          />

          <v-divider class="my-2" />

          <v-list-item
            title="Iniciar sesión"
            prepend-icon="mdi-login"
            @click="abrirModal('login')"
          />

          <v-list-item
            title="Registrarse"
            prepend-icon="mdi-account-plus-outline"
            @click="abrirModal('registro')"
          />
        </v-list>
      </v-menu>

    </v-toolbar>

    <!-- Portada -->
    <section id="inicio" class="portada">

      <div class="portada-fondo"></div>

      <v-container fluid class="portada-contenido py-12 py-md-16">

        <v-row align="center" justify="start">

          <v-col cols="12" md="7">

            <v-chip
              class="mb-5"
              color="#7B2CBF"
              prepend-icon="mdi-school"
              variant="flat"
            >
              Comunidad educativa del SENA
            </v-chip>

            <h1 class="portada-titulo text-white">
              Aprende,<br />
              comparte<br />
              y crece
            </h1>

            <p class="portada-descripcion mt-5">
              Una red social informativa y colaborativa donde aprendices e
              instructores pueden compartir conocimientos, proyectos, recursos y
              oportunidades de aprendizaje.
            </p>

            <div class="d-flex flex-wrap ga-3 mt-8">

              <v-btn
                class="text-none"
                color="#FFFFFF"
                href="#comunidades"
                size="large"
                variant="flat"
              >
                Explorar comunidades

                <v-icon
                  end
                  icon="mdi-arrow-right"
                  color="#0E7C7B"
                />
              </v-btn>

              <v-btn
                class="text-none"
                color="#FFFFFF"
                href="#retos"
                prepend-icon="mdi-trophy-outline"
                size="large"
                variant="outlined"
              >
                Ver retos académicos
              </v-btn>

            </div>

          </v-col>

        </v-row>

        <!-- Indicadores -->
        <v-row class="mt-10 mt-md-14">

          <v-col
            v-for="indicador in indicadores"
            :key="indicador.etiqueta"
            cols="6"
            md="3"
          >

            <div class="d-flex align-center ga-3">

              <v-avatar
                color="#0E7C7B"
                size="46"
              >
                <v-icon
                  :icon="indicador.icono"
                  color="#FFFFFF"
                />
              </v-avatar>

              <div>

                <div class="text-h6 font-weight-bold text-white">
                  {{ indicador.valor }}
                </div>

                <div class="text-caption texto-claro">
                  {{ indicador.etiqueta }}
                </div>

              </div>

            </div>

          </v-col>

        </v-row>

      </v-container>
    </section>

    <!-- Funcionalidades -->
    <section class="seccion seccion-funciones">

      <v-container>

        <v-row>

          <v-col
            v-for="(funcion, indice) in funciones"
  :key="funcion.titulo"
  cols="12"
  sm="4"
  md="3"
  lg="4"
          >

            <v-card
            
  class="tarjeta-funcion pa-3"
  rounded="xl"
  variant="outlined"
  style="cursor: pointer;"
  @click="alternarTarjeta(indice)"
>
            >

           <v-avatar
  :color="funcion.color"
  rounded="lg"
  size="42"
>
  <v-icon
    :icon="funcion.icono"
    color="#FFFFFF"
    size="22"
  />
</v-avatar>

              <h3 class="text-h6 font-weight-bold mt-5">
                {{ funcion.titulo }}
              </h3>

              <v-expand-transition>
                <p
                  v-if="tarjetaAbierta === indice"
                  class="descripcion-funcion mt-3 mb-0"
                >
                  {{ funcion.descripcion }}
                </p>
              </v-expand-transition>

            </v-card>

          </v-col>

        </v-row>

        <!-- Bloque de texto al pie del container -->
        <div class="text-center mt-10 caja-destacada">

          <h2 class="text-h4 text-md-h3 font-weight-black text-white">
            Herramientas para tu formación
          </h2>

          <p class="texto-seccion mt-3 mx-auto">
            REDAS reúne las funciones necesarias para fortalecer el
            aprendizaje colaborativo y compartir el conocimiento.
          </p>

        </div>

      </v-container>
    </section>

    <!-- Comunidades -->
    <section
      id="comunidades"
      class="seccion seccion-turquesa"
    >

      <v-container>

        <v-row
          align="center"
          class="mb-8"
        >

          <v-col cols="12" md="7">

            <div class="rotulo">
              Conecta con otros
            </div>

            <h2 class="text-h4 text-md-h3 font-weight-black">
              Comunidades de aprendizaje
            </h2>

            <p class="descripcion-seccion mt-3">
              Encuentra personas interesadas en las mismas áreas de formación,
              resuelve dudas y construye conocimiento en equipo.
            </p>

          </v-col>

          <v-col
            class="text-md-end"
            cols="12"
            md="5"
          >

            <v-btn
              class="text-none"
              color="#0E7C7B"
              prepend-icon="mdi-plus"
              variant="tonal"
            >
              Ver todas las comunidades
            </v-btn>

          </v-col>

        </v-row>

        <v-row>

          <v-col
            v-for="comunidad in comunidades"
            :key="comunidad.nombre"
            cols="12"
            md="4"
          >

            <v-card
              class="tarjeta-comunidad h-100"
              rounded="xl"
            >

              <v-card-item class="pa-5">

                <template #prepend>

                  <v-avatar
                    :color="comunidad.color"
                    rounded="lg"
                    size="54"
                  >
                    <v-icon
                      :icon="comunidad.icono"
                      color="#FFFFFF"
                      size="28"
                    />
                  </v-avatar>

                </template>

                <v-card-title class="text-wrap text-h6">
                  {{ comunidad.nombre }}
                </v-card-title>

                <v-card-subtitle class="mt-1">
                  {{ comunidad.miembros }}
                </v-card-subtitle>

              </v-card-item>

              <v-card-text class="pt-0 descripcion-funcion">
                {{ comunidad.descripcion }}
              </v-card-text>

              <v-card-actions class="px-5 pb-5">

                <v-btn
                  block
                  class="text-none"
                  color="#0E7C7B"
                  variant="outlined"
                >
                  Unirme a la comunidad
                </v-btn>

              </v-card-actions>

            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </section>

    <!-- Retos -->
    <section
      id="retos"
      class="seccion seccion-oscura"
    >

      <v-container>

        <div class="text-center mb-10">

          <div class="rotulo rotulo-blanco">
            Pon a prueba tus conocimientos
          </div>

          <h2 class="text-h4 text-md-h3 font-weight-black text-white">
            Retos académicos
          </h2>

          <p class="texto-claro mt-3 mx-auto texto-seccion">
            Participa en actividades prácticas, entrega tus soluciones y acumula
            puntos dentro de la plataforma.
          </p>

        </div>

        <v-row>

          <v-col
            v-for="reto in retos"
            :key="reto.titulo"
            cols="12"
            md="4"
          >

            <v-card
              class="tarjeta-reto h-100"
              rounded="xl"
            >

              <v-card-item class="pa-5">

                <template #prepend>

                  <v-avatar
                    color="#0E7C7B"
                    rounded="lg"
                    size="52"
                  >
                    <v-icon
                      :icon="reto.icono"
                      color="#FFFFFF"
                    />
                  </v-avatar>

                </template>

                <v-card-title class="text-wrap text-h6">
                  {{ reto.titulo }}
                </v-card-title>

                <v-card-subtitle class="mt-1">
                  {{ reto.categoria }}
                </v-card-subtitle>

              </v-card-item>

              <v-card-text class="pt-0">

                <div class="d-flex align-center ga-2 mb-3">

                  <v-icon
                    icon="mdi-calendar-outline"
                    color="#0E7C7B"
                    size="18"
                  />

                  <span class="descripcion-funcion">
                    {{ reto.fecha }}
                  </span>

                </div>

                <v-chip
                  color="#0E7C7B"
                  prepend-icon="mdi-star-outline"
                  size="small"
                  variant="tonal"
                >
                  {{ reto.puntos }}
                </v-chip>

              </v-card-text>

              <v-card-actions class="px-5 pb-5">

                <v-btn
                  block
                  class="text-none"
                  color="#0E7C7B"
                  variant="flat"
                >
                  Ver detalles
                </v-btn>

              </v-card-actions>

            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </section>

    <!-- Portafolio -->
    <section
      id="portafolios"
      class="seccion"
    >

      <v-container>

        <v-row align="center">

          <v-col cols="12" md="6">

            <div class="rotulo">
              Muestra tu talento
            </div>

            <h2 class="text-h4 text-md-h3 font-weight-black">
              Construye tu portafolio digital
            </h2>

            <p class="descripcion-seccion mt-4">
              Registra los proyectos que has desarrollado, agrega tecnologías,
              evidencias, certificados y logros obtenidos durante tu formación.
            </p>

            <div class="mt-6">

              <div class="d-flex align-center ga-3 mb-4">

                <v-avatar
                  color="#0E7C7B"
                  size="40"
                >
                  <v-icon
                    color="#FFFFFF"
                    icon="mdi-folder-outline"
                  />
                </v-avatar>

                <span>
                  Organiza tus proyectos por categorías
                </span>

              </div>

              <div class="d-flex align-center ga-3 mb-4">

                <v-avatar
                  color="#05302E"
                  size="40"
                >
                  <v-icon
                    color="#FFFFFF"
                    icon="mdi-certificate-outline"
                  />
                </v-avatar>

                <span>
                  Agrega certificados y evidencias
                </span>

              </div>

              <div class="d-flex align-center ga-3">

                <v-avatar
                  color="#0E7C7B"
                  size="40"
                >
                  <v-icon
                    color="#FFFFFF"
                    icon="mdi-share-variant-outline"
                  />
                </v-avatar>

                <span>
                  Comparte tus habilidades con la comunidad
                </span>

              </div>

            </div>

            <v-btn
              class="text-none mt-8"
              color="#0E7C7B"
              size="large"
              @click="abrirModal('registro')"
            >
              Crear mi portafolio
            </v-btn>

          </v-col>

          <v-col cols="12" md="6">

            <v-card
              class="portafolio-preview pa-6"
              rounded="xl"
            >

              <div class="d-flex align-center ga-4 mb-6">

                <v-avatar
                  color="#0E7C7B"
                  size="68"
                >
                  <v-icon
                    color="#FFFFFF"
                    icon="mdi-account-school"
                  />
                </v-avatar>

                <div>

                  <div class="text-h6 font-weight-bold">
                    Mi portafolio académico
                  </div>

                  <div class="descripcion-funcion">
                    Aprendiz SENA
                  </div>

                </div>

              </div>

              <v-divider class="mb-5" />

              <div class="text-subtitle-1 font-weight-bold mb-3">
                Habilidades
              </div>

              <div class="d-flex flex-wrap ga-2 mb-6">

                <v-chip
                  color="#0E7C7B"
                  size="small"
                  variant="tonal"
                >
                  HTML
                </v-chip>

                <v-chip
                  color="#0E7C7B"
                  size="small"
                  variant="tonal"
                >
                  CSS
                </v-chip>

                <v-chip
                  color="#0E7C7B"
                  size="small"
                  variant="tonal"
                >
                  JavaScript
                </v-chip>

                <v-chip
                  color="#0E7C7B"
                  size="small"
                  variant="tonal"
                >
                  Bases de datos
                </v-chip>

              </div>

              <div class="text-subtitle-1 font-weight-bold mb-3">
                Proyectos recientes
              </div>

              <v-card
                class="mb-3 tarjeta-proyecto"
                rounded="lg"
                variant="flat"
              >

                <v-card-item>

                  <template #prepend>

                    <v-icon
                      color="#0E7C7B"
                      icon="mdi-web"
                    />

                  </template>

                  <v-card-title class="text-subtitle-1">
                    Red social educativa
                  </v-card-title>

                  <v-card-subtitle>
                    Desarrollo web · 2026
                  </v-card-subtitle>

                </v-card-item>

              </v-card>

              <v-card
                class="tarjeta-proyecto"
                rounded="lg"
                variant="flat"
              >

                <v-card-item>

                  <template #prepend>

                    <v-icon
                      color="#05302E"
                      icon="mdi-database"
                    />

                  </template>

                  <v-card-title class="text-subtitle-1">
                    Sistema de información
                  </v-card-title>

                  <v-card-subtitle>
                    Bases de datos · 2026
                  </v-card-subtitle>

                </v-card-item>

              </v-card>

            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </section>

    <!-- Recursos -->
    <section
      id="recursos"
      class="seccion seccion-turquesa"
    >

      <v-container>

        <div class="text-center mb-8">

          <div class="rotulo">
            Fortalece tu aprendizaje
          </div>

          <h2 class="text-h4 text-md-h3 font-weight-black">
            Recursos educativos
          </h2>

          <p class="descripcion-seccion mt-3">
            Encuentra material de apoyo para continuar aprendiendo.
          </p>

        </div>

        <v-row justify="center">

          <v-col cols="12" md="4">

            <v-card
              class="pa-5 text-center h-100"
              rounded="xl"
            >

              <v-avatar
                color="#0E7C7B"
                size="64"
              >
                <v-icon
                  color="#FFFFFF"
                  icon="mdi-file-document-outline"
                  size="32"
                />
              </v-avatar>

              <h3 class="text-h6 font-weight-bold mt-5">
                Documentos y guías
              </h3>

              <p class="descripcion-funcion mt-3">
                Consulta documentos compartidos por instructores y aprendices.
              </p>

            </v-card>

          </v-col>

          <v-col cols="12" md="4">

            <v-card
              class="pa-5 text-center h-100"
              rounded="xl"
            >

              <v-avatar
                color="#05302E"
                size="64"
              >
                <v-icon
                  color="#FFFFFF"
                  icon="mdi-play-circle-outline"
                  size="32"
                />
              </v-avatar>

              <h3 class="text-h6 font-weight-bold mt-5">
                Videos y tutoriales
              </h3>

              <p class="descripcion-funcion mt-3">
                Aprende mediante videos y explicaciones prácticas.
              </p>

            </v-card>

          </v-col>

          <v-col cols="12" md="4">

            <v-card
              class="pa-5 text-center h-100"
              rounded="xl"
            >

              <v-avatar
                color="#0E7C7B"
                size="64"
              >
                <v-icon
                  color="#FFFFFF"
                  icon="mdi-link-variant"
                  size="32"
                />
              </v-avatar>

              <h3 class="text-h6 font-weight-bold mt-5">
                Enlaces recomendados
              </h3>

              <p class="descripcion-funcion mt-3">
                Accede a plataformas y sitios útiles para tu proceso de formación.
              </p>

            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </section>

    <!-- Pie de página -->
    <v-footer class="pie d-block">

      <v-container>

        <v-row>

          <v-col cols="12" md="5">

            <div class="d-flex align-center ga-3 mb-4">

              <v-avatar
                color="#0E7C7B"
                size="42"
              >
                <v-icon
                  color="#FFFFFF"
                  icon="mdi-school-outline"
                />
              </v-avatar>

              <div class="text-h6 font-weight-bold text-white">
                REDAS
              </div>

            </div>

            <p class="texto-claro">
              Red social informativa y de aprendizaje colaborativo para
              aprendices e instructores del SENA.
            </p>

          </v-col>

          <v-col cols="6" md="3">

            <div class="text-subtitle-2 font-weight-bold text-white mb-3">
              Plataforma
            </div>

            <div class="texto-claro mb-2">
              Comunidades
            </div>

            <div class="texto-claro mb-2">
              Retos académicos
            </div>

            <div class="texto-claro mb-2">
              Portafolios
            </div>

            <div class="texto-claro">
              Recursos educativos
            </div>

          </v-col>

          <v-col cols="6" md="4">
          </v-col>

        </v-row>

        <v-divider class="my-6" />

        <div class="text-caption texto-claro">
          © {{ new Date().getFullYear() }} REDAS · Proyecto académico
        </div>

      </v-container>

    </v-footer>

    <!-- Modal -->
    <v-dialog
      v-model="dialogo"
      max-width="480"
    >

      <v-card rounded="xl">

        <v-card-title class="pa-6 pb-2">

          <span v-if="tipoModal === 'login'">
            Iniciar sesión
          </span>

          <span v-else>
            Crear una cuenta
          </span>

        </v-card-title>

        <v-card-text class="px-6">

          <p class="descripcion-funcion mb-5">

            <span v-if="tipoModal === 'login'">
              Ingresa tus datos para acceder a tu cuenta.
            </span>

            <span v-else>
              Regístrate para participar en la comunidad de aprendizaje.
            </span>

          </p>

          <v-text-field
            label="Correo electrónico"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            color="#0E7C7B"
          />

          <v-text-field
            v-if="tipoModal === 'registro'"
            label="Nombre completo"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
            color="#0E7C7B"
          />

          <v-text-field
            label="Contraseña"
            prepend-inner-icon="mdi-lock-outline"
            type="password"
            variant="outlined"
            color="#0E7C7B"
          />

          <v-select
            v-if="tipoModal === 'registro'"
            :items="['Aprendiz', 'Instructor']"
            label="Tipo de usuario"
            prepend-inner-icon="mdi-account-school-outline"
            variant="outlined"
            color="#0E7C7B"
          />

        </v-card-text>

        <v-card-actions class="px-6 pb-5">

          <v-spacer />

          <v-btn
            class="text-none"
            color="#0E7C7B"
            variant="text"
            @click="dialogo = false"
          >
            Cerrar
          </v-btn>

        </v-card-actions>

      </v-card>

    </v-dialog>

  </div>
</template>


<style scoped>
.sena-connect {
  --verde-principal: #0E7C7B;
  --verde-oscuro: #05302E;
  --turquesa: #0E7C7B;
  --turquesa-oscuro: #05302E;
  --blanco: #FFFFFF;

  color: var(--verde-oscuro);
}

/* =========================
   CABECERA
========================= */
.cabecera {
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 90px;
  height: 90px;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.96) !important;
  border-bottom: 1px solid rgba(0, 107, 63, 0.15);
  display: flex;
  align-items: center;
}

.identidad-redas {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  height: 100%;
}

.logo-redas {
  flex-shrink: 0;
  min-width: 60px;
  min-height: 60px;
  box-shadow: 0 2px 8px rgba(0, 107, 63, 0.20);
}

.texto-redas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4px;
}

.nombre-proyecto {
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.1;
  color: var(--verde-oscuro);
}

.subtitulo-proyecto {
  margin-top: 4px;
  color: rgba(0, 107, 63, 0.7);
  font-size: 0.75rem;
  line-height: 1.2;
}

.navegacion-redas,
.botones-redas {
  align-self: center;
}

.cabecera :deep(.v-btn) {
  color: var(--verde-oscuro);
}

.cabecera :deep(.v-btn--icon) {
  color: var(--verde-oscuro) !important;
}

/* =========================
   PORTADA / HERO
========================= */
.portada {
  position: relative;
  overflow: hidden;

  background-image: url('/portada.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.portada-fondo {
  display: none; /* efecto verde desactivado, solo queda la imagen */
}

.portada-contenido {
  position: relative;
  z-index: 1;
}

.portada-titulo {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--blanco);
}

.portada-descripcion {
  max-width: 420px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 1.15rem;
  line-height: 1.6;
  text-shadow: 2px 2px 8px rgba(123, 44, 191, 0.6);
}

/* =========================
   TARJETA DE ACCESO
========================= */
.tarjeta-acceso {
  background: rgba(0, 77, 42, 0.92) !important;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
}

.texto-claro {
  color: rgba(233, 223, 231, 0.78);
}

.tarjeta-funcion {
  margin-bottom: 16px;
}

/* =========================
   SECCIONES
========================= */
.seccion {
  padding: 88px 0;
  background: var(--blanco);
}

.seccion-turquesa {
  background: linear-gradient(
    180deg,
    rgba(0, 166, 166, 0.05),
    rgba(57, 169, 0, 0.04)
  );
}

.seccion-oscura {
  background: linear-gradient(
    135deg,
    var(--verde-oscuro),
    var(--turquesa-oscuro)
  );
}

.rotulo {
  color: var(--verde-principal);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.rotulo-blanco {
  color: var(--blanco);
}

.texto-seccion,
.descripcion-seccion {
  max-width: 680px;
  color: rgba(0, 107, 63, 0.75);
}

.texto-seccion {
  margin-inline: auto;
}

.descripcion-funcion {
  color: rgb(1, 84, 95);
}

/* =========================
   TARJETAS DE FUNCIONES
========================= */
.tarjeta-funcion {
  background: rgba(255, 255, 255, 0.55) !important;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.tarjeta-funcion:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 1);
}

/* =========================
   COMUNIDADES
========================= */
.tarjeta-comunidad {
  background: var(--blanco) !important;
  border: 1px solid rgba(0, 166, 166, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tarjeta-comunidad:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 166, 166, 0.14);
}

.tarjeta-comunidad :deep(.v-card-title) {
  color: var(--verde-oscuro);
  font-weight: 800;
}

.tarjeta-comunidad :deep(.v-card-subtitle) {
  color: rgba(0, 107, 63, 0.7) !important;
}

/* =========================
   RETOS ACADÉMICOS
========================= */
.tarjeta-reto {
  background: rgba(255, 255, 255, 0.98) !important;
  border: 1px solid rgba(14, 124, 123, 0.18);
}

.tarjeta-reto :deep(.v-card-title) {
  color: var(--verde-oscuro);
  font-weight: 800;
}

.tarjeta-reto :deep(.v-card-subtitle) {
  color: rgba(0, 107, 63, 0.72) !important;
}

/* =========================
   PORTAFOLIO
========================= */
.portafolio-preview {
  background: linear-gradient(145deg, var(--blanco), rgba(0, 166, 166, 0.07)) !important;
  border: 1px solid rgba(0, 166, 166, 0.18);
  box-shadow: 0 20px 45px rgba(0, 107, 63, 0.12);
}

.portafolio-preview :deep(.v-card-title) {
  color: var(--verde-oscuro);
}

.portafolio-preview :deep(.v-card-subtitle) {
  color: rgba(0, 107, 63, 0.7) !important;
}

.tarjeta-proyecto {
  background: rgba(0, 166, 166, 0.08);
  border: 1px solid rgba(0, 166, 166, 0.16);
}

/* =========================
   PIE DE PÁGINA
========================= */
.pie {
  background: linear-gradient(135deg, var(--verde-oscuro), var(--turquesa-oscuro)) !important;
}

/* =========================
   DIALOG / MODAL
========================= */
.sena-connect :deep(.v-overlay__scrim) {
  background: var(--verde-oscuro) !important;
  opacity: 0.7 !important;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 960px) {
  .seccion { padding: 65px 0; }
  .portada-titulo { font-size: clamp(2.4rem, 10vw, 4rem); }
  .portada-descripcion { font-size: 1rem; }
}

@media (max-width: 600px) {
  .seccion { padding: 50px 0; }
  .portada-titulo { font-size: 2.5rem; }
  .nombre-proyecto { font-size: 1rem; }
  .subtitulo-proyecto { font-size: 0.68rem; }
}

/* =========================
   FONDO SECCIÓN FUNCIONES
========================= */
.seccion-funciones {
  position: relative;
  background-image: url('/imagen3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Textos en blanco solo dentro de esta sección */
.seccion-funciones .rotulo {
  color: #FFFFFF;
}

.seccion-funciones .texto-seccion {
  color: #FFFFFF;
}

.seccion-funciones h2 {
  color: #FFFFFF;
}

/* Caja destacada del bloque de texto al pie del container */
.caja-destacada {
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid #FFFFFF;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.seccion-turquesa {
  background-image: url('/img/imagen3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

</style>