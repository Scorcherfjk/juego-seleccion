<template>
  <div class="navbar">
    <router-link class="navbar__option" to="/">
      <i class="navbar__option__icon fa fa-home text-green-600"></i>
      <p class="navbar__option__title">inicio</p>
    </router-link>
    <router-link class="navbar__option" to="/options">
      <i class="navbar__option__icon fa fa-flag text-orange-600"></i>
      <p class="navbar__option__title">+opciones</p>
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

<style lang="postcss" scoped>
.navbar {
  @apply flex items-center justify-around h-16 w-full mx-auto mb-4 p-1 bg-white rounded-full text-xs;
}

.navbar__option {
  @apply flex flex-col px-1 no-underline;
}

.navbar__option__icon {
  @apply text-center text-xl;
}

.navbar__option__title {
  @apply uppercase font-semibold text-gray-900;
}

.router-link-exact-active {
  @apply border-b-2 border-blue-700 rounded;
}
</style>
