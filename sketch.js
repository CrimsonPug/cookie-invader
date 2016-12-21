var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600,400);
    ship = new Ship();
    for (var i = 0; i<8; i++){
        flowers [i] = new Flower(i*80+80, 60);
    }
    //drop = new Drop(width/2,height/2);
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i<flowers.length; i++){
        flowers[i].show() ;
    } 
    for (var i = 0; i<drops.length; i++){
        drops[i].show();
        drops[i].move();
        for (var j = 0; j<flowers.length; j++){
            if (drops[i].hits(flowers[j])){
                // console.log('BOOOM!')
                flowers.splice(j,1);
                drops[i].evaporate();
            }
        } 
    }
    for (var i = 0; i<drops.length; i++){
        if (drops[i].toDelete){
            drops.splice(i,1);
        }
    }
}

function keyPressed(){
    if (key === ' '){
        var drop = new Drop(ship.x,height);
        drops.push(drop); 
    }
    if (keyCode === RIGHT_ARROW){
        ship.move(5);
    }else if (keyCode === LEFT_ARROW){
        ship.move(-5);
    }
}