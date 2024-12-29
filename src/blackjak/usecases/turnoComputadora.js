import { pedirCarta, valorCarta, crearCarta } from "./";
/**
 * Pide cartas la computadora del deck
 * @param {Number} puntosMinimos putnos que hizo el jugador
 * @param {String[]} deck deck de cartas
 * @param {HTMLElement} puntosHTML elemento html donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora elemento html donde se muestran las cartas
 */
export const turnoComputadora = (
  puntosMinimos,
  deck,
  puntosHTML,
  divCartasComputadora
) => {
  if (!puntosMinimos) throw new Error("punntos del jugador son necesarios");
  if (!deck || !deck.length) throw Error("deck es necesario");
  if (!puntosHTML) throw Error("Html es necesario");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    divCartasComputadora.append(crearCarta(carta));

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
