<template>
  <div class="division">
    <div class="space"></div>
    <div class="contenido">
      <div>
        <a
          href="https://www.instagram.com/bnbadmi/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/icono-insta1.png"
            alt="facebook"
            class="icon"
          />
          <p class="logo-text">Instagram</p>
        </a>
      </div>
      <div></div>
      <div>
        <a
          href="https://www.facebook.com/Bnbadmin-103638348951185"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/icono-face1.png"
            alt="facebook"
            class="icon"
          />
          <p class="logo-text">Facebook</p>
        </a>
      </div>
    </div>
    <div>
      <img
        src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/logo/logo_transparent_background.png"
        alt="bnbadmin-logo"
        width="250px"
        height="250px"
      />
    </div>
    <div>
      <p class="texto">
        En Bnbadmin nos comprometemos con la excelencia.
        <br />
        Cualquier duda o comentario contactarse al siguiente correo:
        <strong>bnbadmi@gmail.com</strong>
      </p>
    </div>
  </div>
</template>

<style lang="css">
.texto {
  text-align: center;
  color: rgb(221, 221, 221);
  font-size: large;
  margin-top: 10%;
}
.division {
  background-color: rgb(102, 102, 102);
  height: cover;
  display: grid;
  grid-template-columns: 40% 20% 40%;
}
.space {
  height: 10px;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: 4;
}
.title {
  font-size: 60px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: lighter;
  color: rgb(0, 0, 0);
}
.icon {
  width: 30px;
  height: 30px;
  margin-left: 20px;
}
.hyper {
  color: azure;
}
.contenido {
  margin: auto;
  display: grid;
  grid-template-columns: 45% 10% 45%;
}
.logo-text {
  color: rgb(221, 221, 221);
}
</style>
