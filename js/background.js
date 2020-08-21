class Background {
  constructor() {
    // define the image array here
    this.images = null;
  }

  drawBackground() {
    // define the draw logic  for the moving background here
    clear();
    this.images.forEach(pic => {
      pic.x -= pic.speed;
      if (pic.x > width) pic.x=0;
      if (pic.x < 0) pic.x= width;
      image(pic.src, pic.x      ,0,width,height);
      image(pic.src, pic.x - width,0,width,height);
    });
  }
}
