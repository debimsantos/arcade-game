class Entities {
    constructor(x, y, speed, sprite) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = sprite;
    }
    // Draw the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

let collided = false;

// Enemies our player must avoid
class Enemy extends Entities {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(x, y, speed, sprite){
        super(x, y);
        this.speed = Math.random() * speed;

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        }

    update(dt){
      // Update the enemy's position, required method for game
      // Parameter: dt, a time delta between ticks
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      if (this.x < 505) {
          this.x += this.speed * dt;
      } else {
          this.x = -80;
      }
    }
};

// Now write your own player class
class Player extends Entities{
    constructor(x, y, sprite){
        super (x, y);
        this.sprite = 'images/char-catgirl.png';
      }
    // This class requires an update(), render() and
    // canvas.width = 505; canvas.height = 606;
    // This keeps player inside the canvas
    update(){
        if (this.x > 400) {
          this.x = 400;
        }
        if (this.y > 400) {
          this.y = 400;
        }
        if (this.x < 0) {
          this.x = 0;
        }
        if (this.y < 0) {
          this.y = 0;
        }
      }

    // Key press for left, right, up, down movement
    handleInput(keys) {

        if (keys == 'right') {
          this.x += 50; //player moves right
        }
        else if (keys == 'left') {
          this.x -= 50; //player moves left
        }
        else if (keys == 'up') {
          this.y -= 80; //player moves up

          if (player.y < 5) {  //player reaches water, player wins
            setTimeout(function() {
            alert('Congratulations! You beat the bugs.')
            window.location.reload(true);
            }, 500);
          }
        }
        else if (keys == 'down') {
          this.y += 80; //player moves down
        }
      }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [
    new Enemy (-20, 65, 300),
    new Enemy (-120, 65, 100),
    new Enemy (-50, 145, 250),
    new Enemy (-120, 145, 300),
    new Enemy (-40, 230, 300),
    new Enemy (-80, 230, 100),
];
// Place the player object in a variable called player
let player = new Player(200, 410);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
