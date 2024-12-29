/**
 * Crea elemtno html de la carta
 * @param {String} carta
 * @returns
 */
export const crearCarta = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
