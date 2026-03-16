<template>
  <div>
    <h1>Página de Lista de Libros</h1>

    <form @submit.prevent="agregarLibro">
    <input v-model="nuevoLibro.titulo" placeholder="Título" required @keyup.enter="agregarLibro">
  <input v-model="nuevoLibro.autor" placeholder="Autor" required @keyup.enter="agregarLibro">
      <select v-model="nuevoLibro.categoria">
        <option value="Clásico">Clásico</option>
        <option value="Técnico">Técnico</option>
        <option value="Ficción">Ficción</option>
      </select>
      <button type="submit">Agregar Libro</button>
    </form>

    <div v-if="libros.length > 0">
      <LibroItem
        v-for="(libro, index) in libros" 
        :key="index"
        :titulo="libro.titulo"
        :autor="libro.autor"
        :categoria="libro.categoria"
        :index="index"
        @eliminar="eliminarLibro(index)"
      />
    </div> 

<div v-else style="margin-top: 20px; color: #666; font-style: italic;">
  <p>⚠️ No hay libros registrados aún. ¡Agrega uno arriba!</p>
</div>
</div> </template>

<script>
import LibroItem from '../components/LibroItem.vue' 
import { store } from '../store.js'; 
export default {
  components: { LibroItem }, 
  data() {
    return {
      nuevoLibro: { titulo: '', autor: '', categoria: '' },
      sharedStore: store 
    }
  },
  computed: {
    libros() {
      return this.sharedStore.libros;
    }
  },
  methods: {
    agregarLibro() {
      
      if (this.nuevoLibro.titulo.trim() !== '' && this.nuevoLibro.autor.trim() !== '') {
        this.sharedStore.agregarLibro(this.nuevoLibro);
        this.nuevoLibro = { titulo: '', autor: '', categoria: '' };
      }
    },
    eliminarLibro(index) {
      this.sharedStore.eliminarLibro(index);
    }
  }
}
</script>