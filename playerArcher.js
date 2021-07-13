class PlayerArcher{
    constructor(x,y,width,height,angle){
       
       this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});

        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle= angle;
        this.image = loadImage("assets/playerArcher.png")
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,-PI/2)
    }
    display(){
        var angle=this.body.angle
        var pos = this.body.position
        if(keyIsDown(UP_ARROW) &&  this.angle > 1.2){
            this.angle +=0.02;
            Matter.Body.setAngle(this.body,angle)
        }
        if(keyIsDown(DOWN_ARROW) && this.angle <-1.45) {
            this.angle -= 0.02;
            Matter.Body.setAngle(this.body,angle)
          }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}