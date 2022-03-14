let cars = [];
let numCars = 8;
let randomIndex;

function preload() {
  let car0 = loadImage('car0.png');
  let car1 = loadImage('car1.png');
  let car2 = loadImage('car2.png');
  let car3 = loadImage('car3.png');
  let car4 = loadImage('car4.png');
  let car5 = loadImage('car5.png');
  let car6 = loadImage('car6.png');
  let car7 = loadImage('car7.png');
  cars = [car0,car1,car2,car3,car4,car5,car6,car7];
  }

  function setup() {
    createCanvas(1000, 1000);
    noLoop();
  }

  function draw() {
    background(220);
    imageMode(CENTER);
    //let randomCar = random(cars);
    //image(randomCar);
  }

function mousePressed() {
    randomIndex = int(random(cars.length));
    image(cars[randomIndex]);
    cars.splice(randomIndex, 1);
}
