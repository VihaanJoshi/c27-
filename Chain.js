class Chain {
constructor(a1,b2)
{
  var options = {
    bodyA:a1,
    bodyB:b2,
    stiffness:0.04,
    length:100
  }
  this.chain=Constraint.create(options); 
  World.add(world,this.chain);
}

display(){
var pos1, pos2
pos1= this.chain.bodyA.position;
pos2= this.chain.bodyB.position;
strokeWeight(5);
line (pos1.x, pos1.y, pos2.x, pos2.y);
}
}