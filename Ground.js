class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,position.x,position.y,60,20);

    }
  };
















