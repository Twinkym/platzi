function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function elegir(jugada) {
  let resultado = " ";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijeras ✂️";
  } else {
    resultado = "Escoje un valor entre 1 y 3.";
  }
  return resultado;
}
let jugador = 0;

let pc = 0;
let triunfos = 0;
let derrotas = 0;

while (triunfos < 3 && derrotas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera");

  alert("El Pc elige: " + elegir(pc));
  alert("Jugador elige una opción: " + elegir(jugador));

  if (pc == jugador) {
    alert("🤝 Empate");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("✌️Ganaste!!!!");
    triunfos = triunfos + 1;
  } else {
    alert("☠️Perdiste!!!");
    derrotas = derrotas + 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces. ");
