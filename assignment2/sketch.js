let palette, startX, startY, endX, endY;
let x,y;
let chosenColor;
let drawing = false;

function setup() {
  createCanvas(800, 400);
  
  chosenColor = color('white');
  
//   startX = 800;
//   startY = 400;
//   endX = 800;
//   endY = 400;
  
  x=800;
  y=400;
  
  palette = [
    new color_palette(5,5,color('red')),
    new color_palette(5,30,color('orange')),
    new color_palette(5,55,color('yellow')),
    new color_palette(5,80,color('green')),
    new color_palette(5,105,color('cyan')),
    new color_palette(5,130,color('blue')),
    new color_palette(5,155,color('magenta')),
    new color_palette(5,180,color('brown')),
    new color_palette(5,205,color('white')),
    new color_palette(5,230,color('black')),
  ]
}

function draw(){
  //background(160);
  
  for (let i=0; i < palette.length; i++)
    {
      palette[i].draw();
    }
  
  fill(chosenColor);
  //circle(600,100,50);
  // strokeWeight(10);
  // line(startX,startY,endX,endY);
  // circle(startX,startY,10);
  // circle(endX,endY,10);
  if (!(x <=40 && y <=260))
    square(x,y,20);
  
}


function mousePressed()
{
  let paletteClicked = false;
  for (let i=0; i < palette.length; i++)
    {
      if (palette[i].clicked(mouseX,mouseY))
        {
          chosenColor = palette[i].fill;
          paletteClicked = true;
        }
    }
  
  if (!paletteClicked) 
  {
    drawing = true;
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased()
{
  drawing = false;
  // endX = mouseX;
  // endY = mouseY;
}

function mouseDragged()
{
  if (drawing)
  {
    x += mouseX - pmouseX;
    y += mouseY - pmouseY;
  }
}

class color_palette
{
  constructor (x,y,fill)
  {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
  
  draw()
  {
    fill(this.fill);
    noStroke();
    square(this.x,this.y,20);
  }
  
  clicked(x,y)
  {
    return (x >= this.x && x <= this.x + 20) && (y >= this.y && y <= this.y + 20);
  }
}

