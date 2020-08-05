// TODO: optimización de tarjeta sencilla
<template>
  <div class="history">
    <Card msg="historial">
      <div class="card__children">
        <div class="card__children__group">
          <i class="card__children__group__icon fa fa-paw text-yellow-300"></i>
          <p class="card__children__group__title ">Juega: escoge tu opción</p>
          <p class="card__children__group__points ">
            {{ $store.state.points }} opciones
          </p>
        </div>
        <div class="card__children__group">
          <i
            class="card__children__group__icon fa fa-whatsapp text-green-500"
          ></i>
          <p class="card__children__group__title ">Comparte en Whatsapp</p>
          <p class="card__children__group__points ">
            1500 opciones
          </p>
        </div>
        <div class="card__children__group">
          <i
            class="card__children__group__icon fa fa-facebook-official text-blue-500"
          ></i>
          <p class="card__children__group__title">Comparte en Facebook</p>
          <p class="card__children__group__points">
            250000 opciones
          </p>
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
  }
};
</script>
