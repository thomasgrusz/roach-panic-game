/*
 *
 *   Define Enemy class and corresponding prototype methods
 *
 */
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    enemyInit(this);
};

/* Update the x,y coordinates of an enemy and check for
 * collision with player
 */
Enemy.prototype.update = function(dt) {

    /* Check if enemy leaves the window and if yes, start again at
     * random y-axis and random speed
     */
    if (this.x < enemyXMax) {
        this.x = this.x + (this.speed * dt);
    } else {
        enemyInit(this);
    }

    /* Check if enemy and player collide, if yes place player to
     * origin and reset all enemies
     */
    collisionEnemyDetect(this);
    if (collisionFlag === true) {
        player.update();
        allEnemies.forEach(function(enemy) {
            enemyInit(enemy);
        });
        collisionFlag = false;
    }
};

/* Render an enemy
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



/*
 *
 *   Define Player class and corresponding prototype methods
 *
 */
var Player = function() {
    this.x = playerXOrigin;
    this.y = playerYOrigin;
    this.speed = 20;
    this.sprite = 'images/char-boy.png';
};

/* Update player
 */
Player.prototype.update = function() {
    if (collisionFlag === true) {
        player.x = playerXOrigin;
        player.y = playerYOrigin;
    }
};

/* Render player
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  // eslint-disable-line
};

/* Handle player input from keyboard
 */
Player.prototype.handleInput = function(direction) {
    if (direction === 'left' && this.x > playerLeftBorder) {
        this.x = this.x - playerXStep;
    } else if (direction === 'right' && this.x < playerRightBorder) {
        this.x = this.x + playerXStep;
    } else if (direction === 'down' && this.y < playerLowerBorder) {
        this.y = this.y + playerYStep;
    } else if (direction === 'up' && this.y > playerUpperBorder) {
        this.y = this.y - playerYStep;
        if (this.y < waterBorder) {
            this.x = playerXOrigin;
            this.y = playerYOrigin;
        }
    } else if (direction === 'space') {
        pauseFlag = !pauseFlag;
    }
};



/*
 *
 *   Helper Methods
 *
 */

/* Initialize an enemy (x,y,speed)
 */
function enemyInit(enemy) {
    enemy.x = enemyXOrigin;
    enemy.y = enemyYCoords[random_number(0, 2)];
    enemy.speed = random_number(enemyMinSpeed, enemyMaxSpeed);
}

/* Detect collision between enemy and player
 */
function collisionEnemyDetect(enemy) {
    for (var j = 0; j<= 2; j++) {
        if (enemy.y === enemyYCoords[j] && player.y === playerYCollisionCcoords[j]) {
            if (enemy.x > player.x) {
                if (enemy.x < (player.x + charWidth)) {
                    collisionFlag = true;
                }
            }
            if (player.x > enemy.x) {
                if (player.x < (enemy.x + charWidth)) {
                    collisionFlag = true;
                }
            }
        }
    }
}


/* Create random numbers between 'lower' and 'upper'
 */
function random_number(lower, upper) {
    upper += 1;
    return lower + Math.floor((Math.random() * upper));
}



/*
 *
 *   Define all global controll variables
 *
 */
var collisionFlag = false;
var pauseFlag = false;

var enemyNumber = 3;
var enemyXOrigin = -100;
var enemyXMax = 505;
var enemyMinSpeed = 100;
var enemyMaxSpeed = 400;
var allEnemies = [];

var enemyYCoords = [60, 143, 226];

var playerXOrigin = 201;
var playerYOrigin = 404;
var playerXStep = 100;
var playerYStep = 83;
var playerLeftBorder = 1;
var playerRightBorder = 401;
var playerUpperBorder = -11;
var playerLowerBorder = 404;

var playerYCollisionCcoords = [72, 155, 238];

var waterBorder = 72;
var charWidth = 70;



/*
 *   Instantiate objects by
 *   - placing all enemies into an array called 'allEnemies' and
 *   - placeing player object into a variable called 'player'
 */
for (var i = 1; i <= enemyNumber; i++) {
    allEnemies.push(new Enemy());
}
var player = new Player;



/*
 *
 *  Listen for key strokes and send keys to Player.handleInput() method.
 *
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});