function Missiles(x,y){
    this.x = x;
    this.y = y;
    this.r = 8;

    this.show = function(){
        noStroke();
        fill(200,0, 80);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    this.move = function (){
        this.y = this.y + 3;
    }
}