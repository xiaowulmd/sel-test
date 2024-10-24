

function setup() {
  createCanvas(480, 480);

}


function draw() {
  var c1 = color('#0df24b');
  var c2 = color(24, 154, 231);
  var c3 = color(mouseX, 100, mouseY);
  
  background(mouseX, mouseY, 100);
//for loop for my lines
  for (var i = 0; i < 480; i+= 20) {
    stroke(c3);
    line (mouseX, mouseY, 0, 260 + i);
    line (mouseX, mouseY, 480, 260 +i);
  }
  
//no fill for the triangles
  noFill();
//for loop for triangles
  for (var i = 0; i < 480; i += 40) {
    triangle (96 + i, 0, 144 +i, 60 + i, 0, 60);
  }
  
//fill shapes  
  fill(c1);
//arc circle
  arc(240, 140, 80, 80, 0 + mouseX/100,  PI + HALF_PI + mouseY/100);
//body
  fill(c2);
  quad (200, 180, 280, 180, 300, 480, 180, 480);
  

  //text (frameCount, 360, 80);
  textSize (24); 
  if ( frameCount >= 100) {
    ellipse (40, 40, 50, 50);
  }
  
  text(mouseX, 360, 100);
  text(mouseY, 360, 120);

}
