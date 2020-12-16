class Ground
{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic:true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.image = loadImage("images/background/groundG.png");
        World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.w,this.h);
    //rectMode(CENTER);
    //rect(pos.x,pos.y,this.w,this.h);
    }














}