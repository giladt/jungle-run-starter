class Game {
  constructor() {
    // define the empty array for the coins here
  }

  preloadGame() {
    // load in images/gifs here
    this.backgroundImages = [
      {
        src: loadImage('./assets/background/plx-1.png'),
        x: 0,
        speed: 0
      },
      {
        src: loadImage('./assets/background/plx-2.png'),
        x: 0,
        speed: 1
      },
      {
        src: loadImage('./assets/background/plx-3.png'),
        x: 0,
        speed: 2
      },
      {
        src: loadImage('./assets/background/plx-4.png'),
        x: 0,
        speed: 3
      },
      {
        src: loadImage('./assets/background/plx-5.png'),
        x: 0,
        speed: 4
      },
    ];
    this.playerImage = loadImage('./assets/player/bb8.gif');
    this.coinImages = [
      loadImage('./assets/coins/tile000.png'), 
      loadImage('./assets/coins/tile001.png'), 
      loadImage('./assets/coins/tile002.png'), 
      loadImage('./assets/coins/tile003.png'), 
      loadImage('./assets/coins/tile004.png'), 
    ];
  }

  setupGame() {
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    frameRate(60);
    this.background = new Background();
    this.background.images = this.backgroundImages;
    
    this.player = new Player();
    this.player.image = this.playerImage;

    this.obstacle = new Obstacle();
    this.obstacle.images = this.coinImages;

    this.obstacles = [];

  }
  drawGame() {
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
    this.background.drawBackground();
    this.player.drawPlayer();
    if(frameCount % 60 === 0){
      this.obstacles.push(new Obstacle(this.coinImages));
      if(this.obstacles.length > 20) this.obstacles.shift();
    }

    this.obstacles.forEach(obstacle => {
      obstacle.drawObstacle();
    });

    this.obstacles = this.obstacles.filter(obstacle=>{
      return !obstacle.collision(this.player);
    });
  }
}
