<template>
  <div class="Home">
    <div class="div-img flex h-screen">
      <div class="m-auto">
        <h1 class="title1">Servicios de excelencia en la renta de inmuebles</h1>
        <img
          src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/logo/logo_transparent_background.png"
          alt="logo"
          width="350"
          height="350"
          class="mx-auto"
        />
      </div>
      <p class="nave"></p>
    </div>
    <br />
    <br />
    <div class="beneficios">
      <div></div>
      <div>
        <InfoCard class="m-auto" />
      </div>
      <div></div>
      <div>
        <InfoCard class="m-auto" />
      </div>
      <div></div>
      <div>
        <InfoCard class="m-auto" />
      </div>
    </div>
    <h1 class="text-title">Personaliza el servicio a tu manera</h1>
    <p class="texto2 w-10/12 m-auto">
      Buscamos transformar tu inversión en algo mas, tanto si ya usabas Airbnb y
      quieres dejar de preocuparte. O buscas empezar a movilizar un poco tu
      departamento, en Bnbadmin buscamos convertir tu departamento en un ingreso
      pasivo efectivo. Contamos con el plan ideal para ti, con tarifas dinámicas
      para que tu propiedad alcance un rendimiento mas alto.
    </p>
    <br />
    <br />
    <br />
    <h1 class="text-title">Estandares altos garantizados</h1>
    <div class="div3 w-10/12 m-auto">
      <div class="cuadritos">
        <p class="titulos2 m-auto">Superhost</p>
        <br />
        <p class="parrafos3 w-10/12 m-auto text-2xl">
          Insignia de Superhost garantizada.
        </p>
        <p class="parrafos3 w-10/12 m-auto text-2xl">
          Es una categoría de Airbnb que destaca a los anfitriones más
          experimentados, hospitalarios y mejor valorados
        </p>
        <br />
        <img
          src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/superhost-nofondo.png"
          alt="logo"
          class="imagen-p justify-self-center"
          width="200px"
          height="100px"
        />
      </div>
      <div class="cuadritos">
        <p class="titulos2 w-10/12 m-auto">Calificación 4.5 estrellas</p>
        <br />
        <p class="parrafos2 w-10/12 m-auto text-2xl">
          Un trato único para los clientes, en el cual nos forzamos a los
          estandares mas altos de atención para conseguir las mejores
          calificaciones.
        </p>
        <br />
        <br />
        <br />
        <img
          src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/4-5-estrellas.png"
          alt="logo"
          class="imagen-p"
          width="200px"
          height="50px"
        />
      </div>
      <div class="cuadritos">
        <p class="titulos2 w-10/12 m-auto">Personal en menos de 2 horas</p>
        <br />
        <p class="parrafos2 w-10/12 m-auto text-2xl">
          Nos aseguramos de tener el personal capacitado por la zona, para
          resolver cualquier problema que surja durante la estancia.
        </p>
        <br />
        <img
          src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/Ventajas-Capacitacion.png"
          alt="logo"
          class="imagen-p"
          width="200px"
          height="100px"
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <h1 class="text-3xl text-center">Nuestros destinos</h1>
    <div class="destinos text-center w-10/12 m-auto text-xl">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <br />
        <h2 class="m-auto">{{ destination.name }}</h2>
        <img
          :src="`${destination.image[0]}`"
          :alt="destination.name"
          class="img-home m-auto"
        />
      </router-link>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import InfoCard from "@/components/InfoCard.vue";

export default {
  components: { InfoCard },
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
.img-home {
  width: 500px;
  height: 400px;
  background-size: auto;
}
.text-title {
  text-align: center;
  font-family: "BOSQUE", Montserrat;
  font-size: 50px;
}
.texto2 {
  font-family: "BOSQUE", Montserrat;
  text-align: center;
  font-size: 25px;
  width: 100%;
  text-align: center;
}
.div3 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.cuadritos {
  height: cover;
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
  text-align: center;
  font-size: 20px;
  color: black;
  margin: 40px;
}
.parrafos3 {
  font-family: "BOSQUE", Montserrat;
  text-align: center;
  font-size: 20px;
  color: black;
  margin-bottom: 30px;
}
.imagen-p {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 17px;
}
.destinos {
  display: grid;
  grid-template-columns: 50% 50%;
  align-content: center;
  text-align: center;
}
.beneficios {
  display: grid;
  grid-template-columns: 7% 25% 5% 25% 5% 25% 7%;
}
.div-img {
  background-image: url("https://storage.googleapis.com/bnbadmin/Fotos/departamentoportada.jpg");
  background-size: cover;
  height: 900px;
  width: 100%;
}
.div-title {
  grid-template-rows: 50%;
  text-align: center;
}
</style>
