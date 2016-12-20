var ship;
var flowers = [];

function setup() {
    createCanvas(600,400);
    ship = new Ship();
    for (var i = 0; i<8; i++){
        flowers [i] = new Flower(i*80+80, 60);
    }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i<flowers.length; i++){
        flowers[i].show() ;
    } 
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        ship.move(5);
    }else if (keyCode === LEFT_ARROW){
        ship.move(-5);
    }
}