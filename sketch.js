let cars = [];
let randomCar;

let bg = [];
let randomBg;

let wheels = [];
let randomWheels;

let wheelbase;

let randomTitle1;
let randomTitle2;

let bungee;
let button;

let title1 = [{
  adj: "SPEED"
}, {
  adj: "TURBO"
}, {
  adj: "SUPER"
}, {
  adj: "TOUGE"
}, {
  adj: "NITRO"
}, {
  adj: "DRIFT"
}, {
  adj: "JDM"
}];

let title2 = [{
  name: "RACER"
}, {
  name: "RACING"
}, {
  name: "DRIVER"
}, {
  name: "DRIVING"
}, {
  name: "MASTER"
}];

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

  bungee = loadFont('font/Bungee-Regular.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  noLoop();
  textFont(bungee);
  button1 = createButton('NEW GAME');
  button1.size(320, 100);
  button1.position(125, 790);
  button1.style('font-size', '50px');
  button1.style('opacity', '0');
  button1.mousePressed(drawBackground);
  button2 = createButton('LOAD GAME');
  button2.size(320, 100);
  button2.position(565, 790);
  button2.style('font-size', '50px');
  button2.style('opacity', '0');
  button2.mousePressed(drawError);
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

  drawTitle();
  drawFakeButtons();
}

  function drawTitle() {
    randomTitle1 = int(random(title1.length));
    randomTitle2 = int(random(title2.length));
    push();
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(3);
    textSize(width / 11);
    textAlign(CENTER);
    text(title1[randomTitle1].adj + ' ' + title2[randomTitle2].name, 500, 120);
    pop();
    push();
    stroke(255)
    strokeWeight(2);
    fill(25);
    textSize(width / 50);
    textAlign(CENTER);
    text('POWERED BY JAVASCRIPT', 500, 150)
    pop();
  }

  function drawBackground() {
    let randomBg = int(random(bg.length));
    image(bg[randomBg], 500, 500)

    image(wheelbase, 500, 500);

    let randomWheels = int(random(wheels.length));
    image(wheels[randomWheels], 500, 500)

    let randomCar = int(random(cars.length));
    image(cars[randomCar], 500, 500);


    drawFakeButtons();
    drawTitle();
  }

  function drawFakeButtons() {
    push();
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(width / 20);
    textAlign(CENTER);
    text('NEW GAME', 285, 860)
    pop();

    push();
    stroke(0);
    strokeWeight(2);
    fill(140);
    textSize(width / 20);
    textAlign(CENTER);
    text('LOAD GAME', 725, 860);
    pop();
  }

  function drawError() {
    push();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(255, 0, 0);
    textSize(width / 52);
    textAlign(CENTER);
    text('NO SAVES FOUND', 725, 790);
    pop();
  }
