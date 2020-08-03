<template>
  <div id="app">
    <div id="nav">
      <router-link class="uppercase" to="/">inicio</router-link> |
      <router-link class="uppercase" to="/opciones">+ opciones</router-link> |
      <router-link class="uppercase" to="/ganadores">ganadores</router-link> |
      <router-link class="uppercase" to="/historial">historial</router-link>
    </div>
    <router-view />
  </div>
</template>
