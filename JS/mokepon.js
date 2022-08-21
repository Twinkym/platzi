function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
}
window.addEventListener("load", iniciarJuego);
