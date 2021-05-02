class Log extends Parent_Class{
    constructor(x,y,height,angle){
       super(x,y,20,height,angle)
       this.img = loadImage("wood2.png");

       Matter.Body.setAngle(this.body,angle);
}

}