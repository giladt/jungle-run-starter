class Obstacle {
  constructor(imgs) {
    // define the images,size and x/y values in the constructor
    this.x = width;
    this.y = (Math.random() * height) / 3 + height * 0.15;
    this.width = 50;
    this.height = this.width;
    this.images = imgs;
    this.imageCount = 0;
  }

  //   define the collision function
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    return ( dist(obstacleX, obstacleY, playerX, playerY) < playerInfo.width * 0.75);
  }

  drawObstacle() {
    // draw the coins
    this.x -= 4;
    this.imageCount += (frameCount % 10 === 0) ? 1 : 0;
    if(this.imageCount > 4) this.imageCount = 0;

    image(this.images[this.imageCount], this.x,this.y, this.width, this.height);

  }
}
