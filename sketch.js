var myBg
var colorList = ['#283A85','#0E256B','#061238'];

function preload() {
  myBg = loadImage('assets/som.png');

}
function setup() {
  createCanvas(800,600);
    frameRate(1)
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  var newMax = 10;
  volume = map(volume,0,1,0,newMax);
  
  background(colorList);
  
  push();  
  

  translate(width/2,height/2);
  var size = map(volume,0,1,width/5,width/2);
  imageMode(CENTER)
  image (myBg,10,10,400+size,300+size);
  
  pop(); 
 
 for(var x=0 ; x < width ; x+=25){
 for(var y=0 ; y < height ; y+=25){
 noStroke()
 var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));
 

}
}

 }