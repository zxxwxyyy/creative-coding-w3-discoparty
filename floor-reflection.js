// floor light reflection
// reference: Creative Coding W3 class demo.
class Discosquare {
    constructor(sqx, sqy, w, h){
      this.sqx = sqx;
      this.sqy = sqy;
      this.w = w;
      this.h = h;
    }
    move(){
      this.sqx = random(10, 600);
      this.sqy = random(400, 600);
    }
    show(){
      noStroke();
      rect(this.sqx, this.sqy, random(20), random(60));
    }
    paint(){
      let discosqr = random(150);
      let discosqg = random(150);
      let discosqb = random(150);
      fill(discosqr, discosqg, discosqb, random(15));
    }
  }