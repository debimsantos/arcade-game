// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.random() * speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {
    if (this.x < 505) {
        this.x += this.speed * dt;
    } else {
        this.x = -80;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-catgirl.png';
};

// This class requires an update(), render() and
//  canvas.width = 505; canvas.height = 606;
Player.prototype.update = function() {
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
      alert('Congratulations! You beat the bugs')
    }


//    detectCollision();    TODO
//    checkWin(); TODO

};

// a handleInput() method.
Player.prototype.handleInput = function(keys) {
    if (keys == 'right') {
        player.x += 50;
    }

    if (keys == 'left') {
        player.x -= 50;
    }

    if (keys == 'up') {
        player.y -= 80;
    }

    if (keys == 'down') {
        player.y += 80;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy (-20, 65, 300),
    new Enemy (-120, 65, 100),
    new Enemy (-50, 145, 250),
    new Enemy (-120, 145, 300),
    new Enemy (-40, 230, 100),
    new Enemy (-80, 230, 100),

];
// Place the player object in a variable called player
var player = new Player(200, 400);

//Player wins if y = 0 TODO
// bug size: 101 x 171



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
