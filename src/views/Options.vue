// TODO: optimización de tarjeta que abre y cierra
<template>
  <div class="options">
    <Card msg="¡gana más opciones!">
      <div class="card__children">
        <TextField :color="'text-white'">
          Mientras más
          <span class="text-yellow-500 font-bold">Opciones</span>, más
          posibilidades de ganar un viaje a
          <span class="text-yellow-500 font-bold">Punta sal y S/ 1000</span>.
          <p class="text-xs">
            Promoción válida desde 01/01/2020 hasta 31/12/2020
          </p>
        </TextField>
        <InfoBoxExpanded
          icon="fa-whatsapp"
          colorIcon="text-green-500"
          userCode="xyz123"
          message="Comparte tu código en WhatsApp"
          :points="134"
        />
        <InfoBoxExpanded
          icon="fa-facebook-official"
          colorIcon="text-blue-500"
          userCode="xyz123"
          message="Comparte tu código en Facebook"
        />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card';
import TextField from '../components/TextField';
import InfoBoxExpanded from '../components/InfoBox_expanded';

export default {
  components: {
    Card,
    TextField,
    InfoBoxExpanded
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
