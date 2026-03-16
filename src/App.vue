<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/libros">Catálogo de Libros</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>

body {
  margin: 0;
  background-color: #f0f2f5; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto; 
}


.libro-card {
  background: rgb(228, 214, 214) !important;
  border: none !important;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;
  border-radius: 15px !important;
  transition: transform 0.3s ease !important;
}

.libro-card:hover {
  transform: translateY(-8px);
}


button {
  background-color: #2c5342;
  color: rgb(236, 225, 225);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

button:hover {
  background-color: #4d5b69;
}


a {
  text-decoration: none;
  color: #0c507e;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
</style>