// TODO: optimización de tarjeta de texto
<template>
  <div class="winners">
    <i class="fa fa-trophy winners__icon"></i>
    <Card msg="ganadores">
      <div class="card__children">
        <CustomText>
          ¡Felicitaciones! Nos contactaremos en un plazo minimo de 50 días.
        </CustomText>
        <InfoBox
          :hasIcon="false"
          message="Pedro Pérez 01/08/2020"
          :points="null"
          prize="$1000"
        />
        <CustomText :uppercase="true">
          ¡sigue ganando opciones!
        </CustomText>
        <CustomText>
          No te pierdas la oportunidad de ser el ganador del sorteo semanal de
          $1000.
        </CustomText>
        <CustomText>
          Debido al covid19, se han reprogramado las fechas de sorteo para el:
        </CustomText>
        <CustomText :color="'text-yellow-500'">
          08 de Noviembre <br />
          15 de Noviembre <br />
          22 de Noviembre <br />
          29 de Noviembre <br />
          06 de Diciembre <br />
          13 de Diciembre <br />
          20 de Diciembre <br />
          27 de Diciembre
        </CustomText>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/card/Card';
import CustomText from '@/components/card/CustomText';
import InfoBox from '@/components/card/InfoBox';

export default {
  components: {
    Card,
    CustomText,
    InfoBox
  }
};
</script>

<style lang="postcss" scoped>
.winners__icon {
  @apply w-full text-center text-6xl text-yellow-600 -mb-2;
}
</style>
