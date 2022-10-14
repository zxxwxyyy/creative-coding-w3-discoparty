//discolight
function discoLight(){
  fill(random(255), random(0, 100), random(255), 66);
  noStroke();
  let triX = map(sin(frameCount / 5), -1, 1, 200, 400);
  arc(triX, 500, 199, 95, 0, PI, OPEN);
  triangle(triX + 100, 500, triX - 100, 500, 100, 0);
  translate(300, 0);
  triangle(triX - 400, 500, triX - 200, 500, 200, 0);
}
