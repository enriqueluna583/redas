<script setup>
  import { reactive, ref } from 'vue'

  definePageMeta({
    layout: 'dashboard',
  })

  const asignaturas = reactive([])
  const valid = ref(false)

  const materia = reactive({
    id: '',
    nombre: '',
  })

  const nameRules = [
    value => !!value || 'Campo requerido',
  ]

  function guardar () {
    asignaturas.push({ ...materia })
    materia.id = ''
    materia.nombre = ''
  }
</script>

<template>
  <div>
    <v-card class="mx-auto" prepend-icon="$vuetify" width="600">
      <template v-slot:title>
        <span class="font-weight-black">REGISTROS DE ASIGNATURA</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        <v-form v-model="valid" @submit.prevent="guardar">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="materia.id"
                :counter="10"
                :rules="nameRules"
                label="Id Asignatura"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="materia.nombre"
                :counter="10"
                :rules="nameRules"
                label="Nombre Asignatura"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn color="primary" type="submit" :disabled="!valid">Guardar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card class="mx-auto mt-6" width="600" title="Asignaturas registradas">
      <v-list v-if="asignaturas.length">
        <v-list-item
          v-for="item in asignaturas"
          :key="item.id"
          :title="item.nombre"
          :subtitle="item.id"
        ></v-list-item>
      </v-list>

      <v-card-text v-else>Aun no hay asignaturas registradas.</v-card-text>
    </v-card>

    <div class="mt-6 text-center">
      <v-btn variant="text" append-icon="mdi-arrow-right" to="/dashboard/alumno">
        Ir a Alumnos
      </v-btn>
    </div>
  </div>
</template>
