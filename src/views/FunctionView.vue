<template>
  <div class="rows2">
    <div></div>
    <div class="cuadritos">
      <h1 class="titulos2">Rentero</h1>
      <p class="parrafos2">
        En BnBadmin nos preocupamos por ti, deja que tu inmueble se vuelva una
        gran inversión y empieza a ganar mensualmente dinero extra.
        <br />
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
        <li>Mensajes, limpieza, super e incluso contabilidad.</li>
      </ul>
    </div>
    <div></div>
    <div class="cuadritos">
      <h1 class="titulos2">Huesped</h1>
      <p>para los huespedes funciona asi</p>
    </div>
    <div></div>
  </div>
</template>

<style>
.rows2 {
  display: grid;
  grid-template-columns: 15% 30% 10% 30% 15%;
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
</style>
