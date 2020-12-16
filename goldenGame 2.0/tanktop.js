
class Tanktop {

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
     this.image = loadImage("images/TankTops/Ttop_Abrams.png");
     World.add(world,this.body);

    }
    
 
  display()
  {
   var pos = this.body.position;
   var angle = this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,150,150);

   if(keyIsDown(LEFT_ARROW)){
     this.body.position.x -= 7;
    }
    if(keyIsDown(RIGHT_ARROW)){
     //Body.rotate(this.body, 15); 
     this.body.position.x += 7;
    }

    if(keyIsDown(70)){
    Body.rotate(this.body,15);
    }
    
    pop();
  }
}