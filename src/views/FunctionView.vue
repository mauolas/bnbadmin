<template>
  <div v-if="dialog" class="rows2">
    <div></div>
    <div class="cuadritos2">
      <h1 class="titulos2">Rentero</h1>
      <p class="parrafos2">
        Nos encargamos de rentar tu inmueble por medio de la plataforma Airbnb,
        de esa forma nos aseguramos de la protección de tu inmueble y de
        renteros selectos para este programa.
      </p>
      <br />
      <p class="parrafos3">Planes ideales para tus necesidades:</p>
      <ul>
        <li>Solo mensajes.</li>
        <li>Mensajes y limpieza.</li>
        <li>Mensajes, limpieza y super.</li>
      </ul>
      <button v-on:click="dialog = 0">Ver mas</button>
    </div>
    <div></div>
    <div class="cuadritos2">
      <h1 class="titulos2">Huesped</h1>
      <p class="parrafos2">
        Al alojarte en uno de nuestros departamentos, olvidate de pasar un mal
        rato o encontrarte con alguna sopresa indeseada. Todos los departamentos
        son previamente vistos y alineados con nuestros ideales.
      </p>
      <br />
      <p class="parrafos3">Nuestros departamentos cuentan:</p>
      <ul>
        <li>Altos estandares de limpieza</li>
        <li>Comunicación efectiva 24/7</li>
        <li>Gente capacitada cerca para cualquier problema</li>
      </ul>
    </div>
    <div></div>
  </div>
  <ExplicacionDetllada v-if="dialog != 1" />
  <button v-if="dialog != 1" v-on:click="dialog = 1">Ver mas</button>
</template>

<script>
import ExplicacionDetllada from "@/components/ExplicacionDetallada.vue";
export default {
  components: { ExplicacionDetllada },
  data() {
    return {
      dialog: 1,
    };
  },
};
</script>

<style>
.rows2 {
  display: grid;
  grid-template-columns: 15% 30% 10% 30% 15%;
  background-image: url("https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/depamar.jpg");
  background-size: cover;
  height: 900px;
  width: 100%;
  margin-bottom: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
}
.cuadritos2 {
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
  background-color: rgb(214, 205, 205);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px;
}
.titulos2 {
  font-family: "BOSQUE", Montserrat;
  text-align: center;
  font-size: 30px;
  color: black;
}
.parrafos2 {
  font-family: "BOSQUE", Montserrat;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin: 20px;
  margin-bottom: 10px;
}
.parrafos3 {
  font-family: "BOSQUE", Montserrat;
  text-align: left;
  font-size: 20px;
  color: black;
  margin: 0ch;
  margin-left: 20px;
}
.imagen-pe2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 17px;
}
</style>
