// TODO: optimización de tarjeta de texto
<template>
  <div class="winners">
    <Card msg="ganadores">
      <div class="card__children">
        <CustomText>
          ¡Felicitaciones! Nos contactaremos en un plazo máximo de 14 días.
        </CustomText>
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
        <CustomText :uppercase="true">
          ¡sigue ganando opciones!
        </CustomText>
        <CustomText>
          No te pierdas la oportunidad de ser el ganador del sorteo semanal de 1
          viaje todo incluido a Punta Sal y 2 tarjetas de S/1000.
        </CustomText>
        <CustomText>
          Debido a la coyuntura actual, se han reprogramado las fechas de sorteo
          para el:
        </CustomText>
        <CustomText :color="'text-yellow-500'">
          08 de Abril <br />
          15 de Abril <br />
          22 de Abril <br />
          29 de Abril <br />
          06 de Mayo <br />
          13 de Mayo <br />
          20 de Mayo <br />
          27 de Mayo
        </CustomText>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card';
import CustomText from '../components/CustomText';

export default {
  components: {
    Card,
    CustomText
  }
};
</script>
