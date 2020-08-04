class box {
    constructor(x, y, width, height) {
      var options = {
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
      //console.log(this.body.speed);
      if(this.body.speed < 3){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill(255);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
      else{
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(100,this.Visiblity);
        pop();
      }
     }
   
     score(){
       if (this.Visiblity < 0 && this.Visiblity > -1005){
         score=score+1;
       }
     }
   
   
   
};