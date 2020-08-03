<template>
  <div
    class="flex items-center justify-around h-16 w-full
    mx-auto mb-4 p-1 bg-white rounded-lg text-xs"
  >
    <router-link class="flex flex-col px-1" to="/">
      <i class="fa fa-home text-center text-xl text-green-600"></i>
      <p class="uppercase">inicio</p>
    </router-link>
    <router-link class="flex flex-col px-1" to="/opciones">
      <i class="fa fa-flag text-center text-xl text-orange-600"></i>
      <p class="uppercase">+ opciones</p>
    </router-link>
    <router-link class="flex flex-col px-1" to="/ganadores">
      <i class="fa fa-trophy text-center text-xl text-yellow-600"></i>
      <p class="uppercase">ganadores</p>
    </router-link>
    <router-link class="flex flex-col px-1" to="/historial">
      <i class="fa fa-history text-center text-xl text-blue-600"></i>
      <p class="uppercase">historial</p>
    </router-link>
  </div>
</template>
