/*
 * Open/Closed Principle, OCP / Принцип открытости / закрытости
 * Если кот научится шипеть, он не должен разучиться мяукать.
 */

const MaraCat = {
  speak() {
    console.log('Мяу!');
  },
};

const NiceCat = {
  ...MaraCat,
  speak() {
    console.log('Мур-мур-мур');
  },
};

const AngryCat = {
  ...MaraCat,
  speak() {
    console.log('Шшшшшшш');
  },
};

module.exports = {
  NiceCat,
  AngryCat,
};
