// src/store.js
export const store = {
 
  libros: [
    { titulo: 'Don Quijote', autor: 'Cervantes', categoria: 'Clásico' },
    { titulo: 'Vue.js Guía', autor: 'Evan You', categoria: 'Técnico' }
  ],
  
  agregarLibro(nuevoLibro) {
    this.libros.push({ ...nuevoLibro });
  },
  eliminarLibro(index) {
    this.libros.splice(index, 1);
  }
};