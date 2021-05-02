class Chain{
    constructor(body1,body2){
        var Option = {
            bodyA : body1,
            bodyB : body2,
            length : 10,
            stiffness : 0.05 
          }
            this.chain = Constraint.create(Option)
          
            World.add(world,this.chain);
          
    }

    display(){

        strokeWeight(3);
line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}