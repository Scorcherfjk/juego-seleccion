// TODO: optimización de tarjeta que abre y cierra
<template>
  <div class="options">
    <Card msg="¡gana más opciones!">
      <div class="card__children">
        <div class="mb-4 text-white text-center">
          <p class="text-sm mb-2">
            Mientras más
            <span class="text-yellow-500 font-bold">Opciones</span>, más
            posibilidades de ganar un viaje a
            <span class="text-yellow-500 font-bold">Punta sal y S/ 1000</span>.
          </p>
          <p class="text-xs">
            Promoción válida desde 01/01/2020 hasta 31/12/2020
          </p>
        </div>
        <div class="card__children__group flex-col">
          <div class="flex w-full justify-around items-center">
            <i
              class="card__children__group__icon fa fa-whatsapp text-green-500 mr-2"
            ></i>
            <p class="card__children__group__title">
              Comparte tu código en Whatsapp
            </p>
            <p
              class="card__children__group__title text-right text-yellow-500 uppercase mr-2"
            >
              100 opciones por persona
            </p>
            <button @click="openClose">
              <i
                class="card__children__group__icon fa fa-chevron-down text-white"
              ></i>
            </button>
          </div>
          <div
            class="h-48 w-full mt-4 py-2 flex flex-col items-center justify-around border-t-2"
            v-show="open"
          >
            <p class="text-xs">
              Comparte el código Z1PMzu6 con tus amigos. Cada amigo que ingrese
              te dará 100 OPCIONES
            </p>
            <div
              class="w-3/4 border px-4 py-2 rounded-full flex justify-around"
            >
              <span>amigos</span>
              <span>opciones</span>
            </div>
            <button
              class="w-2/4 py-1 px-4 uppercase border-2 border-green-300 text-green-300 rounded-lg"
            >
              compartir
            </button>
          </div>
        </div>
        <div class="card__children__group flex-col">
          <div class="flex w-full justify-around items-center">
            <i
              class="card__children__group__icon fa fa-facebook-official text-blue-500 mr-2"
            ></i>
            <p class="card__children__group__title">
              Comparte tu código en Facebook
            </p>
            <p
              class="card__children__group__title text-right text-yellow-500 uppercase mr-2"
            >
              100 opciones por persona
            </p>
            <button @click="openClose2">
              <i
                class="card__children__group__icon fa fa-chevron-down text-white"
              ></i>
            </button>
          </div>
          <div
            class="h-48 w-full mt-4 py-2 flex flex-col items-center justify-around border-t-2"
            v-show="open2"
          >
            <p class="text-xs">
              Comparte el código Z1PMzu6 con tus amigos. Cada amigo que ingrese
              te dará 100 OPCIONES
            </p>
            <div
              class="w-3/4 border px-4 py-2 rounded-full flex justify-around"
            >
              <span>amigos</span>
              <span>opciones</span>
            </div>
            <button
              class="w-2/4 py-1 px-4 uppercase border-2 border-green-300 text-green-300 rounded-lg"
            >
              compartir
            </button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card';

export default {
  components: {
    Card
  },
  data() {
    return {
      open: false,
      open2: false
    };
  },
  methods: {
    openClose() {
      this.open = !this.open;
      this.open2 = false;
    },
    openClose2() {
      this.open2 = !this.open2;
      this.open = false;
    }
  }
};
</script>
