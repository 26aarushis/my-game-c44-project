var rabbit, rabbitRightImg, rabbitLeftImg;
var bg, backgroundImg;
var platform, platform1Img, platform2Img, platform3Img, platform4Img, platform5Img;
var platformsGroup;

function preload() {
  rabbitRightImg = loadImage("/assets/bunny_right.png");
  rabbitLeftImg = loadImage("/assets/bunny_left.png");
  backgroundImg = loadImage("/assets/cloud_bg.png");
  platform1Img = loadImage("/assets/platform1.png");
  platform2Img = loadImage("/assets/platform2.png");
  platform3Img = loadImage("/assets/platform3.png");
  platform4Img = loadImage("/assets/platform4.png");
  platform5Img = loadImage("/assets/platform5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight-5);

  bg = createSprite(width/2, height/2);
  bg.addImage(backgroundImg);
  bg.scale = 2;

  rabbit = createSprite(width/2, height-42);
  rabbit.addImage("right",rabbitRightImg);
  rabbit.addImage("left",rabbitLeftImg);
  rabbit.scale = 2.3;

  platformsGroup = createGroup();
}

function draw() {
  background(0);

  bg.velocityY = 2;
  if(bg.y >= height) {
    bg.y = height/2;
  }

  if(keyDown("up") && rabbit.y<height-10 && rabbit.y>-10) {
    rabbit.velocityY = -10;
  }

  rabbit.velocityY = rabbit.velocityY+0.8;

  rabbit.debug= true;

  if(keyDown("left") && rabbit.x>100) {
    rabbit.x -= 7;
    rabbit.changeImage("left");
  }

  if(keyDown("right") && rabbit.x<width-100) {
    rabbit.x += 7;
    rabbit.changeImage("right");
  }

  if(rabbit.isTouching(platformsGroup)) {
    rabbit.velocityY = 0;
  }

  drawSprites();

  spawnPlatforms();
}

function spawnPlatforms() {
  if(frameCount%30 === 0){
    platform = createSprite(random(250, width-250), -20);
    platform.velocityY = 2;
    platform.lifetime = 510;
    platform.addImage(platform1Img);
    platform.scale = 1.5;
   
    ran  = Math.round(random(1,5));
    switch(ran){
        case 1: platform.addImage(platform1Img);
              
                break;
        case 2: platform.addImage(platform2Img);
               break;
        case 3: platform.addImage(platform3Img);
               break;
        case 4: platform.addImage(platform4Img);
               break;
        case 5: platform.addImage(platform5Img);
               break;
        default:  

    
    }
    
    platformsGroup.add(platform);
    /*if(ran === 1) {
        obstacle.addImage(obstacleImage1);
    }
    else if(ran === 2) */
  
  }
}
