<template>
  <div>
    <h1>Detalle del Libro</h1>
    
    <div v-if="libro" style="border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
      <p><strong>Título:</strong> {{ libro.titulo }}</p>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <router-link to="/libros">← Volver a la lista</router-link>
    </div>
    
    <div v-else style="color: red;">
      <p>⚠️ No se encontró la información del libro.</p>
      <router-link to="/libros">Volver a la lista</router-link>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'; 

export default {
  
  props: ['id'], 
  
  computed: {
    libro() {
      
      return store.libros[this.id];
    }
  }
}
</script>