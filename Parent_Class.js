class Parent_Class{
    constructor(x,y,width,height,angle){
        var test = {restitution : 0.8,
        density : 1,
        friction : 1
        };
        this.body = Bodies.rectangle(x,y,width,height,test);
        this.img = loadImage("base.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        

        

    }

display(){

var position = this.body.position
var angle = this.body.angle

    push ();
    
    translate (position.x, position.y);
    rotate (angle);
    imageMode(CENTER);
    image(this.img,0,0,this.width,this.height);
    
    pop ();


}

}