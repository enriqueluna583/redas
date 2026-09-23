<script setup>
  import { ref } from 'vue'

  const items = [
    {
      title: 'Asignatura',
      ruta: '/dashboard/asignatura',
      icono: 'mdi-book-open-variant',
    },
    {
      title: 'Alumno',
      ruta: '/dashboard/alumno',
      icono: 'mdi-account-school',
    },
     {
      title: 'Notas',
      ruta: '/dashboard/notas',
      icono: 'mdi-chili-hot',
    },
  ]

  const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sistema academico</v-toolbar-title>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn icon="mdi-home" variant="text" to="/"></v-btn>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list lines="one" nav>
        <v-list-item
          v-for="item in items"
          :key="item.ruta"
          :prepend-icon="item.icono"
          :title="item.title"
          :to="item.ruta"
          @click="drawer = false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
