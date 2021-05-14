class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity - 255;
      World.add(world, this.body);
    }
    display(){
     console.log(this.body.speeed);
     if(this.body.speed < 3){
       super.display();
     }
     else{
       World.remove(world.this.body);
       push();
       tint(255,this.Visiblity);
       image(this.image.this.body.position.x.this.body.position.y,50,50);
       pop();
     
     }
    }
}