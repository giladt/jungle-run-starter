class Player {
  constructor() {
    // set the height, the initial location + the jump controls for the player
    this.width = height / 4;
    this.height = 1.2 * this.width;
    this.x = 0;
    this.y = height - this.height;
    this.image = {};
    this.gravity = 0.2;
    this.velocity = 0;
  }
  drawPlayer() {
    // draw the player + jump logic with velocity
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y >= height - this.height) {
      this.y = height - this.height;
    }

    image(this.image, this.x, this.y, this.height, this.width);
    if(keyCode === 32){
      this.jump();
    }
  }

  // add a jump function
  jump(){
    if(this.y === height - this.height){
      if(keyIsPressed){
        this.velocity = -10;
      }
    }
  }
}
