/*
 * Liskov Substitution Principle, LSP / Принцип подстановки Барбары Лисков
 * Если мы любим игрушки, то и мышек, и фантики
 */

const MarasStuff = {
  enjoy() {
    console.log('Ура!');
  },
};

const CandyWrapper = {
  ...MarasStuff,
  enjoy() {
    console.log('Ура, шелестеть!');
  },
};
const MommysHand = {
  ...MarasStuff,
  enjoy() {
    console.log('Ура, царапать!');
  },
};
const TableThings = {
  ...MarasStuff,
  enjoy() {
    console.log('Урааа, скидывать на пол!');
  },
};
const CoolMouse = {
  ...MarasStuff,
  hate() {
    throw new Error('Какая мышь? Где мой трижды погрызанный фантик?');
  },
};

module.exports = {
  CandyWrapper,
  MommysHand,
  TableThings,
  CoolMouse,
};