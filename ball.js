class ball{
    constructor(x,y){

 var options = {
     isStactic:false,
     'restitution':0.3,
     'friction':0.5,
     'density':1.2
 }
  this.body = Bodies.circle(x,y,20);
   this.radius = 20
  
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
 
  ellipseMode(RADIUS);
  fill("red");
  ellipse(pos.x, pos.y, this.radius);
  
}
};
    
