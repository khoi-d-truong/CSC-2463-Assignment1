function setup()
{
  createCanvas(300,300);
    colorMode(HSB,360,100,100);
}

function draw() 
{
  background(255);
  noStroke();
  

  //red
  fill(360,70,100,.5);
  circle(150,100,150);
  
  //blue
  fill(240,70,100,.5);
  circle(100,200,150);
  
  //green
  fill(120,70,100,.5);
  circle(200,200,150);
}


