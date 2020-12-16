class Laser{
  constructor(x,y)
  {
    //this.angle = angle;
    this.pos = createVector(x,y);
    this.vel = createVector(5,-4);
    this.acc = createVector(0,0);
  }
  applyForce(force)
  {
    this.acc.add(force);
  } 
  update()
  {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(5);
  }

  /* render()
  {
    push();
    stroke("red");
    strokeWeight(8);
    point(this.pos.x,this.pos.y);
    pop();
  } */
  show()
  {
    point(this.pos.x,this.pos.y);
  }
}