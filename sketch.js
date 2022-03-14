let cars = [];
let randomCar;

let bg = [];
let randomBg;

let wheels = [];
let randomWheels;

let wheelbase;

function preload() {

  wheelbase = loadImage('images/base.png');

  let bg0 = loadImage('images/background0.png');
  let bg1 = loadImage('images/background1.png');
  let bg2 = loadImage('images/background2.png');
  let bg3 = loadImage('images/background3.png');
  let bg4 = loadImage('images/background4.png');
  bg = [bg0, bg1, bg2, bg3, bg4];

  let wheel0 = loadImage('images/wheel0.png');
  let wheel1 = loadImage('images/wheel1.png');
  let wheel2 = loadImage('images/wheel2.png');
  let wheel3 = loadImage('images/wheel3.png');
  let wheel4 = loadImage('images/wheel4.png');
  let wheel5 = loadImage('images/wheel5.png');
  let wheel6 = loadImage('images/wheel6.png');
  let wheel7 = loadImage('images/wheel7.png');
  let wheel8 = loadImage('images/wheel8.png');
  wheels = [wheel0, wheel1, wheel2, wheel3, wheel4, wheel5, wheel6, wheel7, wheel8];

  let car0 = loadImage('images/car0.png');
  let car1 = loadImage('images/car1.png');
  let car2 = loadImage('images/car2.png');
  let car3 = loadImage('images/car3.png');
  let car4 = loadImage('images/car4.png');
  let car5 = loadImage('images/car5.png');
  let car6 = loadImage('images/car6.png');
  let car7 = loadImage('images/car7.png');
  cars = [car0, car1, car2, car3, car4, car5, car6, car7];

}

function setup() {
  createCanvas(1000, 1000);
  noLoop();
}

function draw() {
  background(220);
  imageMode(CENTER);

  let randomBg = int(random(bg.length));
  image(bg[randomBg], 500, 500)

  image(wheelbase, 500, 500);

  let randomWheels = int(random(wheels.length));
  image(wheels[randomWheels], 500, 500)

  let randomCar = int(random(cars.length));
  image(cars[randomCar], 500, 500);

}

function mousePressed() {
  let randomBg = int(random(bg.length));
  image(bg[randomBg], 500, 500)

  image(wheelbase, 500, 500);

  let randomWheels = int(random(wheels.length));
  image(wheels[randomWheels], 500, 500)

  let randomCar = int(random(cars.length));
  image(cars[randomCar], 500, 500);
}

//cars.splice(randomIndex, 1);
