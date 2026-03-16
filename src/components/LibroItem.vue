<template>
  <div class="libro-card">
    <h4>{{ titulo }}</h4>
    <p>Autor: {{ autor }}</p>
    <p>Categoría: {{ categoria }}</p>
    
    <router-link :to="'/libro/' + index">Ver detalles</router-link>
    <br><br>
    <button @click="$emit('eliminar')">Eliminar</button>
  </div>
</template>

<script>
export default {

  props: ['titulo', 'autor', 'categoria', 'index']
}
</script>

<style>
.libro-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  width: 200px;
  display: inline-block;
}
</style>