const { CatFeeding, CatPlay, CatDatabase } = require("./S");
const { NiceCat } = require("./O");
const { CandyWrapper, CoolMouse } = require("./L");
const { Walkable, Hateable } = require("./I");
const { CatSound, MaraCoolCat } = require("./D");

const Mara = {
  ...CatFeeding,
  ...CatPlay,
  ...CatDatabase,
  ...NiceCat,
  ...CandyWrapper,
  ...CoolMouse,
  ...Walkable,
  ...Hateable,
  ...MaraCoolCat(CatSound),
};

console.log(Object.keys(Mara));
Mara.speak();
