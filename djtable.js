// djset
// reference: W2 clock assignment
// W2 assignment reference: Coding Train: Clock with p5.js
// https://www.youtube.com/watch?v=E4RyStef-gY&t=1010s&ab_channel=TheCodingTrain
function createDjset(){
    push();
    noStroke();
    let Djset = map(sin(frameCount / 5), -1, 1, 50, 255);
    push()
    if(Djset > 200){
      fill(255, 53, 184, 100)
    }
    else{
      fill(70)
    }
    ellipse(335, 350, 50, 20)
    pop();
    push();
    let Djset1 = map(sin(frameCount / 5), -1, 1, 50, 255);
    if(Djset1 > 200){
      fill(15, 255, 87, 100)
    }
    else{
      fill(70)
    }
    ellipse(400, 350, 50, 20)
    pop();
  
    push();
    strokeWeight(5)
    stroke(0, random(255), random(200));
    let djSet = map(frameCount, 0, 60, 0, 360);
    arc(335, 350, 50, 20, 0, cos(djSet));
    arc(400, 350, 50, 20, 0, sin(djSet));
    pop();
  }
  
  function createDjtable(){
      // dj table
      push();
      fill(70);
      rectMode(CENTER);
      rect(355, 400, 150, 70);
      fill(50);
      beginShape();
      vertex(280, 366);
      vertex(305, 335);
      vertex(455, 335);
      vertex(455, 410);
      vertex(430, 435);
      vertex(430, 365);
      vertex(280, 365);
      endShape(CLOSE);
      pop();
  }
  