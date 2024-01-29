function setup()
{
  createCanvas(500,500);

}

function draw()
{
  background('rgb(0,0,128)');
  fill('rgb(0,100,0)');
  stroke('white');
  strokeWeight(5);
  circle(250,250,300);
  
  fill('red');
  beginShape();
    vertex(250,100);
    vertex(294,189);
  
    vertex(392,204);
    vertex(321,273);
  
    vertex(338,371);
    vertex(250,325);
  
    vertex(162,371);
    vertex(179,273);
  
    vertex(108,204);
    vertex(206,189);
  
    vertex(250,100);
  
  endShape();
}