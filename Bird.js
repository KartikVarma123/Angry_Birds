class Bird extends Parent_Class{
    constructor(x,y){
       super(x,y,50,50);
       this.img = loadImage("bird.png");

}

display(){

    super.display();

    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    
}

}