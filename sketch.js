var ship;
var missiles = [];
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600,400);
    ship = new Ship();

    for (var i = 0; i<7; i++){
        flowers[i] = new Flower(i*80+80, 60);
        // setInterval(()=>{
            missiles[i] = new Missiles(flowers[i].x, flowers[i].y)
        
        // },1000)    
    }

    // setInterval(()=>{
    //     for (var i=0; i<7; i++){
    //         missiles[i] = new Missiles(i*80+80, 60);
    //     }
    // console.log('cookie')
    // },3000);
    
    //drop = new Drop(width/2,height/2);
}

function draw() {
    background(51);
    ship.show();
    ship.move();
    var edge = false;


    for (var i=0; i < missiles.length;i++){
        missiles[i].show();
        missiles[i].move();
    }

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width || flowers[i].x < 0) {
            edge=true
        }
    }
    if (edge){
        for (var i = 0; i<flowers.length; i++){
            flowers[i].shiftDown();
            //  console.log(width,flowers[i].x)       
        }
    } 
    for (var i = 0; i<drops.length; i++){
        drops[i].show();
        drops[i].move();
        //checking for bullet hits the cookie
        for (var j = 0; j<flowers.length; j++){
            if (drops[i].hits(flowers[j])){
                //getting rid of the cookie
                flowers.splice(j,1);
                //execute evaporate function from drop.js
                drops[i].evaporate();
            }
        } 
    }
    //getting rid of the bullet
    for (var i = drops.length-1; i>= 0; i--){
        if (drops[i].toDelete){
            drops.splice(i,1);
        }
    }
}

function keyReleased(){
    ship.setDir(0);
}

function keyPressed(){
    if (key === ' '){
        var drop = new Drop(ship.x,height);
        drops.push(drop); 
    }
    if (keyCode === RIGHT_ARROW){
        ship.setDir(1);
    }else if (keyCode === LEFT_ARROW){
        ship.setDir(-1);
    }
}