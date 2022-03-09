//sports cars
let cars = [{
  name: "Scion FR-S",
}, {
  name: "Mazda RX-7"
}, {
  name: "Mazda Miata"
}, {
  name: "Toyota Supra"
}, {
  name: "Toyota MR-2"
}, {
  name: "Nissan GT-R"
}, {
  name: "Nissan 300ZX"
}, {
  name: "Honda NSX"
}, {
  name: "Honda S2000"
}, {
  name: "Mitsubishi Lancer Evolution"
}, {
  name: "Mitsubishi Eclipse"
}, {
  name: "Subaru Impreza WRX STI"
}, {
  name: "Subaru BRZ"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

}

function mousePressed() {
  background(220);
  randomIndex = int(random(cars.length));
  console.log(cars[randomIndex].name);
  text(cars[randomIndex].name, 200, 200);
  cars.splice(randomIndex, 1);

}
