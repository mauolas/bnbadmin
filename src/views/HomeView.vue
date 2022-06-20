<template>
  <div class="Home">
    <div class="div-img flex h-screen">
      <div class="m-auto">
        <h1 class="title1">Servicios de excelencia en la renta de inmuebles</h1>
        <br />
        <img
          src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/logo/logosin%20letras.png"
          alt="logo"
          width="300"
          height="300"
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
        <TranquilidadCard class="m-auto" />
      </div>
      <div></div>
      <div>
        <FlexibilidadCard class="m-auto" />
      </div>
    </div>
    <br />
    <br />
    <br />
    <h1 class="text-title">Personaliza el servicio a tu manera</h1>
    <p class="texto2 w-7/12 m-auto">
      Buscamos transformar tu inversión en algo más, tanto si ya usabas Airbnb y
      quieres dejar de preocuparte, o buscas empezar a movilizar un poco tu
      departamento.
      <br />
      En Bnbadmin buscamos convertir tu departamento en un ingreso pasivo
      efectivo. Contamos con el plan ideal para ti, con tarifas dinámicas para
      que tu propiedad alcance un rendimiento más alto.
    </p>
    <br />
    <br />
    <br />
    <h1 class="text-title">Estándares altos garantizados</h1>
    <div class="div3 w-10/12 m-auto">
      <div class="cuadritos">
        <p class="titulos2 m-auto">Superhost</p>
        <br />
        <p class="parrafos3 w-10/12 m-auto text-2xl">
          Insignia de Superhost garantizada.
        </p>
        <p class="parrafos3 w-10/12 m-auto text-2xl text-center">
          Es una categoría de Airbnb que destaca a los anfitriones más
          experimentados, hospitalarios y mejor valorados.
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
        <p class="parrafos2 w-10/12 m-auto text-2xl text-center">
          Un trato único para los clientes, brindamos los estándares más altos
          de atención para conseguir las mejores calificaciones.
        </p>
        <br />
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
        <p class="titulos2 w-10/12 m-auto">Personal a 2 horas</p>
        <br />
        <p class="parrafos2 w-10/12 m-auto text-2xl text-center">
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
    <div class="contactanos grid grid-cols-6 gap-4">
      <br />
      <h1 class="text-5xl text-center text-opacity-100 col-start-2 col-span-4">
        <br />
        Contáctanos
      </h1>
      <div class="col-start-2 col-span-3">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import InfoCard from "@/components/tarjetas_home/InfoCard.vue";
import ContactForm from "@/components/ContactForm.vue";
import TranquilidadCard from "@/components/tarjetas_home/TranquilidadCard.vue";
import FlexibilidadCard from "@/components/tarjetas_home/FlexibilidadCard.vue";

export default {
  components: { InfoCard, ContactForm, TranquilidadCard, FlexibilidadCard },
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
.contactanos {
  background-image: url("https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/departamento-playa-del-carmen.jpg");
  background-size: cover;
  height: 500px;
  width: 100%;
  opacity: 0.8;
}
.contactanos:hover {
  opacity: 1;
}
</style>
