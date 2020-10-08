class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0,
          'density':1.2,
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(RADIUS);
      strokeWeight(4)
      stroke("yellow")
      fill("red");
      image(this.image,0, 0, this.r);
      pop();
    }
  };
  