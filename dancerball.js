// dancer ball on top left
// reference: Creative Coding W3 class demo
class Discoball {
    constructor(x, y, r){
      this.x = x;
      this.y = y;
      this.r = r;
    }
    dance(){
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
    }
    display(){
      noStroke();
      ellipse(this.x, this.y, this.r * 2);
    }
    color(){
      let discoballr = this.x + random(0, 100);
      let discoballg = this.y * random(255);
      let discoballb = this.r + random(255);
      fill(discoballr, discoballg, discoballb, 60);
    }
  }