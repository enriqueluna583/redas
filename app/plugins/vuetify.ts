// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // Nuxt renderiza en el servidor: sin esto los ids de los componentes
    // no coinciden con los del cliente y Vue avisa de errores de hidratacion.
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
