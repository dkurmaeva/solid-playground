/* 
 * Single Responsibility Principle, SRP / Принцип единственности ответственности
 * Для игры и еды должны быть отдельные места
 */

const CatFeeding = {
  morningEat() {
    console.log('Омномном');
  },
  eat() {
    console.log('Не люблю сухой корм');
  }
}

const CatPlay = {
  morningEatPlay() {
    console.log('О луковичка, буду катать её по полу!');
  },
  play() {
    console.log('Тыгыдык');
  }
}

const CatDatabase = {
  saveToDatabase() {
    // Код для сохранения Мары в базу данных
  }
}

module.exports = {
  CatFeeding,
  CatPlay,
  CatDatabase,
};
