/**
 * Obtenemos el valor de la carta.
 * @param {String} carta carta
 * @returns {Number} regresa valor de la carta
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error("Carta es necesaria");
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
