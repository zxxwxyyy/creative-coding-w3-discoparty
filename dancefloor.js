// discofloor
function discoFloor(){
    push()
    strokeWeight(5);
    stroke(25);
    fill(20);
    beginShape();
    vertex(0, 600);
    vertex(150, 400);
    vertex(600, 400);
    vertex(600, 600);
    vertex(0, 600);
    endShape(CLOSE);
    pop()
  }

  function createFlashtiles(){
    //flash tiles
    let triX = map(cos(frameCount / 5), -1, 1, 50, 255);
    push()
    if(triX > 200){
      fill(random(255), random(10), random(255), 100)
    }
    else{
      fill(30)
   }
    //left 2 tile;
    beginShape();
    vertex(110, 450);
    vertex(280, 450);
    vertex(250, 500);
    vertex(70, 500);
    vertex(110, 450);
    endShape(CLOSE);
    // left 4 tile;
    beginShape();
    vertex(30, 550);
    vertex(220, 550);
    vertex(190, 600);
    vertex(-10, 600);
    vertex(30, 550);
    endShape(CLOSE);
   // mid 1 tile
    if(triX > 200){
      fill(random(10), random(255), random(255), 100)
    }
    else{
      fill(30)
    }
    beginShape();
    vertex(310, 400);
    vertex(460, 400);
    vertex(435, 450);
    vertex(280, 450);
    vertex(310, 400);
    endShape(CLOSE);
  
    // mid 3 tile
    beginShape();
    vertex(250, 500);
    vertex(410, 500);
    vertex(385, 550);
    vertex(220, 550);
    vertex(250, 500);
    endShape(CLOSE);
  
    //right 2 tile
    if(triX > 200){
      fill(random(255), random(255), random(10), 100)
    }
    else{
      fill(30)
    }
    beginShape();
    vertex(435, 450);
    vertex(600, 450);
    vertex(600, 500);
    vertex(410, 500);
    vertex(435, 450);
    endShape(CLOSE);
    // right 4
    beginShape();
    vertex(385, 550);
    vertex(600, 550);
    vertex(600, 600);
    vertex(360, 600);
    vertex(385, 550);
    endShape(CLOSE);
  
    pop();
}

// floor tile no color change
function createTiles(){
  //left 1
  push()
  stroke(25);
  fill(40);
  beginShape();
  vertex(150, 400);
  vertex(310, 400);
  vertex(280, 450);
  vertex(110, 450);
  vertex(150, 400);
  endShape(CLOSE);
  //left 3
  beginShape();
  vertex(70, 500);
  vertex(250, 500);
  vertex(220, 550);
  vertex(30, 550);
  vertex(70, 500);
  endShape(CLOSE);
  // mid 2
  beginShape();
  vertex(280, 450);
  vertex(435, 450);
  vertex(410, 500);
  vertex(250, 500);
  vertex(280, 450);
  endShape(CLOSE);
  //mid 4
  beginShape();
  vertex(220, 550);
  vertex(385, 550);
  vertex(360, 600);
  vertex(190, 600);
  vertex(220, 550);
  endShape(CLOSE);
  //right 1
  beginShape();
  vertex(300, 400);
  vertex(600, 400);
  vertex(600, 450);
  vertex(280, 450);
  vertex(300, 400);
  endShape(CLOSE);
  //right 3
  beginShape();
  vertex(410, 500);
  vertex(600, 500);
  vertex(600, 550);
  vertex(385, 550);
  vertex(410, 500);
  endShape(CLOSE);
  pop()
}