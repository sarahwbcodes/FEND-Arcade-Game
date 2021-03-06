// Enemies our player must avoid
var Enemy =
function(x, y){
    //x and y coordinates
    this.x= x;
    this.y= y;
    //speed, maximum speed for an enemy is 450
    this.speed = (Math.ceil(Math.random()*450)+1);
    //sprite
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed*dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x>505){
      this.x=0;
      this.speed= (Math.ceil(Math.random()*450)+1);
      //(Math.floor(Math.random()*100)+200);
    }
    //check collision
    if(player.x<this.x+101 &&
      player.x+101>this.x &&
      player.y<this.y+83 &&
      player.y+83>this.y){
      player.reset();
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(){
this.sprite = 'images/char-boy.png';
//starting coordinates
this.x=200;
this.y=400;
};
// This class requires an update(), render() and
// a handleInput() method.
//reset
Player.prototype.reset= function(x,y){
//back to initial spot or starting coordinates
  this.x=200;
  this.y=400;
};
//update
Player.prototype.update= function(){
  if (this.y<0 || this.x<0){
    this.reset();
  }
};
//render
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//handleInput
Player.prototype.handleInput=function(keyPress){
if(keyPress=='a' && this.x > 0){
  this.x-=101;
}
if (keyPress=='d' && this.x < 305){
  this.x+=101;
}
if (keyPress=='w' && this.y > 0){
  this.y-=83;
}
if (keyPress=='s' && this.y < 225){
  this.y+=83;
}
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies=[
  new Enemy(0,50),
  new Enemy(0,90),
  new Enemy(0,150),
  new Enemy(0,200),
];

var player = new Player(200,400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'a',
        38: 'w',
        39: 'd',
        40: 's'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
