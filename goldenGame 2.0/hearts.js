class Hearts {
    constructor(x,y){
      var options= {
          restitution: 0.5,
          density: 0.5,
          friction: 0.2,
          isStatic: true
      }
     this.body = Bodies.circle(x,y, 15,options);
     this.radius = 15 ; 
     this.image = loadImage("images/heart lives3.jpg");
     World.add(world,this.body);

    }
    
 
  display()
  {
   //var angle = this.body.angle;
   push();
   translate(this.body.position.x,this.body.position.y);
   //rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,40,40);
   pop();
   
  }
}