/**
 * Se obtiene una carta del deck
 * @param {String[]} deck deck de cartas
 * @returns {String} carta
 */
export const pedirCarta = (deck) => {
  if (!deck || !deck.length) throw new Error("Deck es obligatorio");
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
