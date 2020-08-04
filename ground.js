class ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:0.7,
          density:1.0
      }
      this.body =Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill(255);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
};