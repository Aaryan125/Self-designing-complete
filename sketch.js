var plane, planeImg;
var bgImg;
var asteroid, asteroidImg;
var bullet, bulletImg;
var score = 0;

function preload() {
  planeImg = loadImage("spaceship.png");
  bgImg = loadImage("bg.jpg");
  asteroid1Img = loadImage("asteroid1.png");
  asteroid2Img = loadImage("asteroid2.png");
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(800, 500);
  plane = createSprite(60, 450, 20, 20);
  plane.addImage(planeImg);
  plane.scale = 0.5;

  bulletGroup = new Group();
  asteroidGroup = new Group();
}

function draw() {
  background(bgImg);

  plane.y = mouseY;

  if (keyDown("space")) {
    createBullet();
  }
  if (bulletGroup.isTouching(asteroidGroup)) {
    asteroidGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 1;
  }
  //spawnObstacles();

  if(frameCount % 100 === 0){
    asteroidG();
  }
  drawSprites();
  textSize(25);
  text("Score : "+score,670,30);
}

function asteroidG() {
  var asteroid = createSprite(800, Math.round(random(370, 20)), 10, 10);
  asteroid.addImage(asteroid1Img);
  asteroid.velocityX = -3;
  asteroid.lifetime = 267;
  asteroid.scale = 0.5;
  asteroidGroup.add(asteroid)

  /*if(frameCount % 60 === 0){
    asteroid = createSprite(800, 465, 10, 30);
    asteroid.velocityX = -3;
    asteroid.scale = 0.25;
    asteroid.y = Math.round(random(100, 500));
    
    var rand = Math.round(random(1, 2));

    switch(rand){
      case 1 : asteroid.addImage(asteroid1Img);
              break;

      case 2 : asteroid.addImage(asteroid2Img);
              break;
    }

    asteroid.lifetime = 266;
}*/
}

function createBullet() {
  bullet = createSprite(60, 450, 60, 10);
  bullet.addImage(bulletImg);
  bullet.y = plane.y;
  bullet.scale = 0.25;
  bullet.velocityX = 4;
  bullet.lifetime = 200;
  bulletGroup.add(bullet)
}


