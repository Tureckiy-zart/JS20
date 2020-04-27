"use strict";
// game "MARVEL'S HERO"
// // 1. Создаем прототип нашего героя
{const Hero = function ({ name = "", health = 100, hitPower = 1.1, speed = 1 }) {
  this.name = name;
  this.health = health;
  this.hitPower = hitPower;
  this.speed = speed;
};
Hero.prototype.hit = function (hitPower, speed) {
  this.health -= hitPower * speed;
};
// 2. Создаем героев на основе прототипа
const spiderMan = new Hero({ name: "spiderMan", hitPower: 2.8, speed: 2.3 });
const hulk = new Hero({ name: "Hulk", hitPower: 5.3, speed: 1.2 });

// 3. Тестируем возможности наших героев
{hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
}
console.log("spiderMan :", spiderMan);
console.log("hulk :", hulk);}

// ======================================================================
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = (min + (Math.random()) * (max + 1 - min));
  return Math.floor(rand);
}

const Hero = function ({ health = 100, speed = 1.1, strange = 2 }) {
  this.health = health;
  this.speed = speed;
  this.strange = strange;

  // this.hit = function (hit, strange, speed) {
  //     this.health = this.health - hit * strange * speed;
  // }
} 
// 2. Создаем героев на основе прототипа
const ironMan = new Hero({ health: 100, speed: 1.2, strange: 2 });
const capAmerica = new Hero({ health: 100, speed: 1.4, strange: 3 });

// 3. Тестируем возможности наших героев
{// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// capAmerica.hit(15, ironMan.strange, ironMan.speed)
// capAmerica.hit(15, ironMan.strange, ironMan.speed)
// console.log('ironMan :', ironMan);
// console.log('capAmerica :', capAmerica);
}

// 4. Выносим методы в отдельные функции
Hero.prototype.hit = function (hit, strange, speed) {
  this.health = this.health - hit * strange * speed;
}
console.dir(Hero.prototype);

// 5. Тестируем
{
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
console.log('Iron HP',Math.floor(ironMan.health));
capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed)
console.log('Cap HP',  Math.floor(capAmerica.health));
}
console.log('ironMan health:', Math.floor(ironMan.health));
console.log('capAmerica health:', Math.floor(capAmerica.health));

