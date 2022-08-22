let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipoge = document.getElementById("Hipoge");
  let inputCapipego = document.getElementById("Capipego");
  let inputRatigueya = document.getElementById("Ratigueya");
  let spanMascotajugador = document.getElementById("mascota-jugador");

  if (inputHipoge.checked) {
    spanMascotajugador.innerHTML = "Hipoge";
  } else if (inputCapipego.checked) {
    spanMascotajugador.innerHTML = "Capipego";
  } else if (inputRatigueya.checked) {
    spanMascotajugador.innerHTML = "Ratigueya";
  } else {
    alert("Elige a una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "hipoge";
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipego";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }

  function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
  }
  function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
  }
  function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
  }

  function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
      ataqueEnemigo = "FUEGO";
    } else if (ataqueAleatorio == 2) {
      ataqueEnemigo = "AGUA";
    } else {
      ataqueEnemigo = "TIERRA";
    }
    crearMensaje();
  }

  function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerHTML =
      "Tu mascota atacó con " +
      ataqueJugador +
      "la mascota del enemigo atacó con " +
      ataqueEnemigo +
      "- PENDIENTE";
    sectionMensajes.appendChild(parrafo);
  }
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
window.addEventListener("load", iniciarJuego);
