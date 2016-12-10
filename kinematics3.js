var X, Y, Xi, Yi, dt, t,Vxi, Vyi, Ax, Ay, Vx, Vy, w, h,TICK = 0;
var moving;

function setup() {
  createCanvas(600,600);
  fill(0);
  Xi = random(500);
  Yi = random(500);
  t = 0;
  dt = 0.05; 
  Vxi = random(100);
  Vyi = random(100);
  Ax = 0;
  Ay = 80;
  moving = false;
  X = Xi;
  Y = Yi;
  Vy = Vyi;
  Vx = Vxi;
  w = (X + Y)/10;
  h = (X + Y)/10;
}

function draw() {
  
  
  
  //X = Xi + Vxi*t + 0.5*Ax*t*t; 
  //Y = Yi + Vyi*t + 0.5*Ay*t*t;
  
  
  
 
  
  
  
//  if(moving){
    background(0);  
    t = t+ dt;  
    X = X + Vx * dt;
    Y = Y + Vy * dt;
    Vx = Vx + (Ax * dt * dt); 
    Vy = Vy + (Ay * dt * dt);
    TICK++;
    if(TICK%10==0){
      w = random(10,60);
      h = random(10,60);
    }
    fill(random(150,200),random(150,200),random(50,255));
  ellipse(X, Y, w, h);
//  }
  
  if((Y >= 600 - h/2 && Vy > 0)|| (Y <= h/2)&& Vy < 0){
    Vy = Vy * -1;
    background(100);
  }
  
  if((X >= 600 - w/2 && Vx >0)|| (X <= w/2 && Vx < 0)){
    Vx = Vx * -1;
    background(100);
  }
  
  
   fill(255);
  text ("Xi = " + Xi + " X = " + X + " m", 10, 20);
  text ("Yi = " + Yi + " Y = " + Y + " m", 10, 40);
  text ("t = " + t +" s", 10, 60);
  text ("Ax = " + Ax + " Ay = " + Ay, 10, 80);
  text ("Vxi = " + Vxi + " Vyi = " + Vyi, 10, 100);
  text ("Vx = " + Vx + " Vy = " + Vy, 10, 120);
  text ("w = " + w + " h = " + h, 10, 140);
  
}

function mouseClicked(){
  
  if(!moving){
   noLoop();
 }else{
   loop();
 }
 moving = !moving;
}