
function setup()
{
  createCanvas(750,400);
  angleMode(DEGREES);
  
}

function draw()
{
  background(0);
  //pacman
  fill('yellow');
  arc(200,200,300,300,225,135, PIE);
  
  //ghost
  fill('red');
  noStroke();
  rect(400,150,300,200);
  arc(550,150,300,230,180,0)
  
  //eyes  
  fill('white');
  circle(480,180,100);
  circle(620,180,100);
  fill('blue');
  circle(480,180,75);
  circle(620,180,75);
}

