// TODO: optimización de tarjeta sencilla
<template>
  <div class="history">
    <Card msg="historial">
      <div class="card__children">
        <InfoBox
          icon="fa-paw"
          colorIcon="text-yellow-300"
          message="Juega: escoge tu opción"
          :points="$store.state.points"
        />
        <InfoBox
          icon="fa-whatsapp"
          colorIcon="text-green-500"
          message="Comparte en Whatsapp"
          :points="1500"
        />
        <InfoBox
          icon="fa-facebook-official"
          colorIcon="text-blue-500"
          message="Comparte en Facebook"
          :points="250000"
        />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/card/Card';
import InfoBox from '../components/card/InfoBox';

export default {
  components: {
    Card,
    InfoBox
  }
};
</script>
