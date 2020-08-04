<template>
  <div class="navbar">
    <router-link class="navbar__option" to="/">
      <i class="navbar__option__icon fa fa-home text-green-600"></i>
      <p class="navbar__option__title">inicio</p>
    </router-link>
    <router-link class="navbar__option" to="/options">
      <i class="navbar__option__icon fa fa-flag text-orange-600"></i>
      <p class="navbar__option__title">+ opciones</p>
    </router-link>
    <router-link class="navbar__option" to="/winners">
      <i class="navbar__option__icon fa fa-trophy text-yellow-600"></i>
      <p class="navbar__option__title">ganadores</p>
    </router-link>
    <router-link class="navbar__option" to="/history">
      <i class="navbar__option__icon fa fa-history text-blue-600"></i>
      <p class="navbar__option__title">historial</p>
    </router-link>
  </div>
</template>
