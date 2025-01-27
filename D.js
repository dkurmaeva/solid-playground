/*
 * Dependency Inversion Principle / Принцип инверсии зависимостей
 * То, что коты мяукают, не влияет на всех остальных зверей. Но то, что животные издают звуки, влияет на котов
 */

const Sound = {
  makeSound() {},
};

const CatSound = {
  ...Sound,
  makeSound() {
    console.log('Мяаааааууу!');
  },
};

const MaraCoolCat = (sound) => {
  return {
    sound,
    speak() {
      this.sound.makeSound();
    },
  };
};

module.exports = {
  CatSound,
  MaraCoolCat,
};