/*
 * Interface Segregation Principle, ISP / Принцип разделения интерфейсов
 * Незачем тебе умение плавать, если ты никогда не будешь это делать
 */

const Walkable = {
  run() {},
};

const Hateable = {
  morningYell() {},
};

const Swimmable = {
  swim() {},
};

module.export = {
  Walkable,
  Hateable,
};