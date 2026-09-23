<script setup>
  definePageMeta({
    layout: 'dashboard',
  })

  const accesos = [
    {
      title: 'Asignaturas',
      texto: 'Registrar y consultar las asignaturas del programa.',
      icono: 'mdi-book-open-variant',
      ruta: '/dashboard/asignatura',
    },
    {
      title: 'Alumnos',
      texto: 'Registrar y consultar los alumnos matriculados.',
      icono: 'mdi-account-school',
      ruta: '/dashboard/alumno',
    },
  ]
</script>

<template>
  <div>
    <h1 class="text-h5 font-weight-black mb-2">Dashboard</h1>
    <p class="text-body-2 mb-6">
      Usa el menu lateral o las tarjetas para navegar entre modulos.
    </p>

    <v-row>
      <v-col v-for="acceso in accesos" :key="acceso.ruta" cols="12" md="6">
        <v-card class="pa-4" :to="acceso.ruta" hover>
          <v-icon color="primary" :icon="acceso.icono" size="40"></v-icon>
          <v-card-title class="px-0">{{ acceso.title }}</v-card-title>
          <v-card-text class="px-0">{{ acceso.texto }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
