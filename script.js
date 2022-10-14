// creative coding w3 dance party
//Liqian Zhang
let lightR;
let lightG;
let lightB;
let lightColor = [];
let discoBall = [];
let discoSquare = [];
let discoSquare1 = [];

function setup() {
  createCanvas(600, 600)
//dancer ball
  for(let i = 0; i < 200; i ++){
    let x = random(255);
    let y = random(300);
    let r = random(0, 15);
    discoBall[i] = new Discoball(x, y, r)}
//floor reflection square
  for(let z = 0; z < 1000; z++){
    let sqx = random(400, 600);
    let sqy = random(400, 600);
    let w = random(100);
    let h = cos(random(30));
    discoSquare[z] = new Discosquare(sqx, sqy, w, h);
  }
//dancer square
  for(let q = 0; q < 100; q++){
    let x1 = random(300, 600);
    let y1 = random(0, 400);
    let w1 = 50;
    let h1 = 50;
    discoSquare1[q] = new Discosquare1(x1, y1, w1, h1);
  }
}

function draw() {
  background(0);

  // drawingContext function as light behind the dance stage
  // reference: Easiest Glow Effect in p5.js - by Kazuki Umeda
  // https://www.youtube.com/watch?v=iIWH3IUYHzM&t=260s&ab_channel=KazukiUmeda
  let offsetX = map(5, 0, width, 1, -20);
  let offsetY = map(5, 0, height, 1, -20);
  drawingContext.shadowOffsetX = offsetX;
  drawingContext.shadowOffsetY = offsetY;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(random(150), random(150), random(150));

  discoFloor()
  createTiles();
  createFlashtiles();
  createDjtable();
  createDjset();
 
  //dancer square
  for(let q = 0; q < 30; q++){
    discoSquare1[q].sq1dance();
    discoSquare1[q].sq1display();
    discoSquare1[q].sq1color();
  }

  //dancer ball
  for(let i = 0; i < 200; i ++){
    discoBall[i].dance();
    discoBall[i].display();
    discoBall[i].color();
  }

  //floor reflection square
  for(let z = 0; z < 100; z ++){
    discoSquare[z].move();
    discoSquare[z].show();
    discoSquare[z].paint();
  }
  
  discoLight();
}










