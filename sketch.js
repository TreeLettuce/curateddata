let cars = [];
let randomCar;

let bg = [];
let randomBg;

let wheels = [];
let randomWheels;

let wheelbase;

//let randomIndex;


function preload() {

  wheelbase = loadImage('base.png');

  let bg0 = loadImage('background0.png');
  let bg1 = loadImage('background1.png');
  let bg2 = loadImage('background2.png');
  let bg3 = loadImage('background3.png');
  let bg4 = loadImage('background4.png');
  bg = [bg0, bg1, bg2, bg3, bg4];

  let wheel0 = loadImage('wheel0.png');
  let wheel1 = loadImage('wheel1.png');
  let wheel2 = loadImage('wheel2.png');
  let wheel3 = loadImage('wheel3.png');
  let wheel4 = loadImage('wheel4.png');
  let wheel5 = loadImage('wheel5.png');
  let wheel6 = loadImage('wheel6.png');
  let wheel7 = loadImage('wheel7.png');
  let wheel8 = loadImage('wheel8.png');
  wheels = [wheel0, wheel1, wheel2, wheel3, wheel4, wheel5, wheel6, wheel7, wheel8];

  let car0 = loadImage('car0.png');
  let car1 = loadImage('car1.png');
  let car2 = loadImage('car2.png');
  let car3 = loadImage('car3.png');
  let car4 = loadImage('car4.png');
  let car5 = loadImage('car5.png');
  let car6 = loadImage('car6.png');
  let car7 = loadImage('car7.png');
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
  image(wheels[randomWheels],500 ,500)

  let randomCar = int(random(cars.length));
  image(cars[randomCar],500 ,500);

}

function mousePressed(){
  let randomBg = int(random(bg.length));
  image(bg[randomBg], 500, 500)

  image(wheelbase, 500, 500);

  let randomWheels = int(random(wheels.length));
  image(wheels[randomWheels],500 ,500)

  let randomCar = int(random(cars.length));
  image(cars[randomCar],500 ,500);
}

//function mousePressed() {
//randomIndex = int(random(cars.length));
//image(cars[randomIndex]);
//cars.splice(randomIndex, 1);
//}
