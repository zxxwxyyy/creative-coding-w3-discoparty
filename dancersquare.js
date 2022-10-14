// Square dancer on right top side
// reference: Creative Coding W3 class demo 
class Discosquare1 {
    constructor(x1, y1, w1, h1){
      this.x1 = x1;
      this.y1 = y1;
      this.w1 = w1;
      this.h1 = h1;
    }
    sq1dance(){
      this.x1 = this.x1 + random(-3, 3);
      this.y1 = this.y1 + random(-3, 3);
      this.w1 = 30;
      this.h1 = random(50);
    }
    sq1display(){
      noStroke();
      rect(this.x1, this.y1, this.w1, this.h1);
    }
    sq1color(){
      let discosq1r = this.x1 + random(0, 100);
      let discosq1g = this.y1 * random(255);
      let discosq1b = this.w1 + random(255);
      fill(discosq1r, discosq1g, discosq1b, 60);
    }
  }
  