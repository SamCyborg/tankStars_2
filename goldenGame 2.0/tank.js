class Tank {
    constructor(x,y,width,height){
      var options= {
          restitution: 0.5,
          density: 0.5,
          friction: 0.2,
          isStatic: true
      }
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("images/TankBody/TBody_Abrams.png");
     World.add(world,this.body);

    }
    
 
  display()
  {
   var angle = this.body.angle;
   push();
   translate(this.body.position.x,this.body.position.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,150,150);
   if(keyIsDown(LEFT_ARROW))
    {
     //Body.rotate(this.body,-30);
     this.body.position.x -= 7;
    }
    if(keyIsDown(RIGHT_ARROW))
    {
     //Body.rotate(this.body, 30); 
     this.body.position.x += 7;
    }
   pop();
  }
}