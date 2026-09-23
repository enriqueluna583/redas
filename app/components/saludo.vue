<script setup>
const props = defineProps(['mensaje'])


</script>


<template>
  <div>
    <h1 class="letra">{{mensaje}}</h1>
    <p>This is the main landing page of the application.</p>
  </div>
  </template>
  <style scoped>
   .letra{
    color : red;
   }
  </style>