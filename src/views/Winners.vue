// TODO: optimización de tarjeta de texto
<template>
  <div class="winners">
    <Card msg="ganadores">
      <div class="card__children">
        <div class="mb-4 text-white text-center">
          <p class="text-sm mb-2">
            ¡Felicitaciones! Nos contactaremos en un plazo máximo de 14 días.
          </p>
        </div>
        <div class="card__children__group">
          <div class="flex w-full justify-between items-center">
            <p class="card__children__group__title">
              Pedro Pérez <br />
              01/08/2020
            </p>
            <p class="card__children__group__points ">
              Punta sal
            </p>
          </div>
        </div>
        <div class="my-4 text-white text-center">
          <p class="text-md mb-2 uppercase">
            ¡sigue ganando opciones!
          </p>
        </div>
        <div class="mb-4 text-white text-center">
          <p class="text-sm mb-2">
            No te pierdas la oportunidad de ser el ganador del sorteo semanal de
            1 viaje todo incluido a Punta Sal y 2 tarjetas de S/1000.
          </p>
        </div>
        <div class="mb-4 text-white text-center">
          <p class="text-sm mb-2">
            Debido a la coyuntura actual, se han reprogramado las fechas de
            sorteo para el:
          </p>
        </div>
        <div class="mb-4 text-white text-center">
          <p class="text-sm mb-2 text-yellow-500">
            08 de Abril <br />
            15 de Abril <br />
            22 de Abril <br />
            29 de Abril <br />
            06 de Mayo <br />
            13 de Mayo <br />
            20 de Mayo <br />
            27 de Mayo
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
