import _ from "underscore";
/**
 * Crear nuevo deck
 * @param {String[]} tipos es el tipo de cartas que hay
 * @param {String[]} especiales son las cartas especiales que hay
 * @returns {String[]} nuevo deck creado
 */
export const crearDeck = (tipos, especiales) => {
  if (!tipos) throw new Error("Los tipos de cartas son obligatorios");
  if (!especiales) throw new Error("Los tipos esciales son obligatorios");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
