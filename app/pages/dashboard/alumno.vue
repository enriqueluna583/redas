<script setup>
  import { reactive, ref } from 'vue'

  definePageMeta({
    layout: 'dashboard',
  })

  const alumnos = reactive([])
  const valid = ref(false)

  const estudiante = reactive({
    id: '',
    nombre: '',
  })

  const nameRules = [
    value => !!value || 'Campo requerido',
  ]

  function guardar () {
    alumnos.push({ ...estudiante })
    estudiante.id = ''
    estudiante.nombre = ''
  }
</script>

<template>
  <div>
    <v-card class="mx-auto" prepend-icon="mdi-account-school" width="600">
      <template v-slot:title>
        <span class="font-weight-black">REGISTROS DE ALUMNO</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        <v-form v-model="valid" @submit.prevent="guardar">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="estudiante.id"
                :counter="10"
                :rules="nameRules"
                label="Id Alumno"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="estudiante.nombre"
                :counter="10"
                :rules="nameRules"
                label="Nombre Alumno"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn color="primary" type="submit" :disabled="!valid">Guardar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card class="mx-auto mt-6" width="600" title="Alumnos registrados">
      <v-list v-if="alumnos.length">
        <v-list-item
          v-for="item in alumnos"
          :key="item.id"
          :title="item.nombre"
          :subtitle="item.id"
        ></v-list-item>
      </v-list>

      <v-card-text v-else>Aun no hay alumnos registrados.</v-card-text>
    </v-card>

    <div class="mt-6 text-center">
      <v-btn variant="text" prepend-icon="mdi-arrow-left" to="/dashboard/asignatura">
        Ir a Asignaturas
      </v-btn>
    </div>
  </div>
</template>
