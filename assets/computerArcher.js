class ComputerArcher{
    constructor(x,y,width,height,angle){
       
       this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});

        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.image = loadImage("assets/palyerArcher.png")
        World.add(world,this.body);
        
    }
    display(){
      
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}