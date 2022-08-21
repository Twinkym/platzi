function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipoge = document.getElementById("Hipoge");
  let inputCapipego = document.getElementById("Capipego");
  let inputRatigueya = document.getElementById("Ratigueya");

  if (inputHipoge.checked) {
    alert("Elegiste a Hipoge");
  } else if (inputCapipego.checked) {
    alert("Elegiste a Capipego");
  } else if (inputRatigueya.checked) {
    alert("Elegiste a Ratigueya");
  } else {
    alert("Elige a una mascota");
  }
}
window.addEventListener("load", iniciarJuego);
