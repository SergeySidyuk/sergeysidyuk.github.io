$(document).ready(function () {
    let GAME_STEP_DELAY = 10;

    let currentGameStep = 0;

    function getGameStepTime() {
        let dateNow = new Date();
        return `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.${dateNow.getMilliseconds()}`;
    }

    function Ball(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.diametr = options.diametr;
        this.color = options.color;
        this.x = options.x;
        this.y = options.y;
        this.directionX = options.startDirectionX || 1;
        this.directionY = 1;


        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
              display: inline-block;
              position: absolute;
              border-radius: 50%;
              left: ${this.x}px;
              top: ${this.y}px;
              width: ${this.diametr}px;
              height: ${this.diametr}px;
              background: ${this.color}`;
            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {
            this.x = this.x + this.directionX;
            this.y = this.y + this.directionY;
        };

        this.renderView = function () {
            this.div.style.left = this.x + 'px';
            this.div.style.top = this.y + 'px';
        };

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.invertDirectionX = function () {
            this.directionX = this.directionX * -1;
        };

        this.invertDirectionY = function () {
            this.directionY = this.directionY * -1;
        };

    }

    function Wall(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
              position: absolute;
              left: ${this.x}px;
              top: ${this.y}px;
              width: ${this.width}px;
              height: ${this.height}px;
              background: green;
              `;
            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {};

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }

    function Racket(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = Math.min(options.width, 100);
        this.height = Math.min(options.height, 100);
        this.width = Math.max(this.width, 10);
        this.height = Math.max(this.height, 10);

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
              position: absolute;
              left: ${this.x}px;
              top: ${this.y}px;
              width: ${this.width}px;
              height: ${this.height}px;
              background: red;
              `;

            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {
            this.div.style.left = this.x + 'px';
        };

        this.doMove = function (event) {
            this.x = event.x;
        };

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }
    let score = null;
    function Pin(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
              position: absolute;
              left: ${this.x}px;
              top: ${this.y}px;
              width: ${this.width}px;
              height: ${this.height}px;
              background: ${this.color}
              `;
              document.documentElement.append(result);
              return result;
          };
          this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {};

        this.live = function () {
            this.renderState();
            this.renderView();
        };
        this.remove = function() {
            this.div.remove();
            return score++
        }
    }
    let objects = [];

    objects.push(
        new Ball({
            diametr: 30,
            color: "orange",
            x: 200,
            y: 200,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: document.documentElement.clientWidth,
            height: 10,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );

    objects.push(
        new Wall({
            x: document.documentElement.clientWidth - 10,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );
    
    objects.push(
        new Pin({
            x: 20,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 85,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 150,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 215,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 280,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 345,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 410,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 475,
            y: 20,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 20,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 85,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 150,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 215,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 280,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 345,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 410,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    
    objects.push(
        new Pin({
            x: 475,
            y: 50,
            width: 60,
            height: 20,
            color: "purple",
        })
    );
    

    let r = new Racket({
        x: 0,
        y: document.documentElement.clientHeight - 40,
        width: 90,
        height: 20,
    });
    document.documentElement.onmousemove = r.doMove.bind(r);
    objects.push(r);

    function checkCollision(objectA, objectB) {
        if (objectA !== objectB) {
            let ball = null;
            let wall = null;
            let racket = null;
            let pin = null;
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectA instanceof Wall) {
                wall = objectA;
            }
            if (objectB instanceof Ball) {
                ball = objectB;
            } else if (objectB instanceof Wall) {
                wall = objectB;
            }

            if (objectA instanceof Racket) {
                racket = objectA;
            } else if (objectB instanceof Racket) {
                racket = objectB;
            }
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectA instanceof Pin) {
                pin = objectA;
            }
            if (objectB instanceof Ball) {
                ball = objectB;
            } else if (objectB instanceof Pin) {
                pin = objectB;
            }

            if (ball && wall) {
                if (
                    (ball.x + ball.diametr === wall.x ||
                        ball.x === wall.x + wall.width) &&
                    ball.y > wall.y &&
                    ball.y < wall.y + wall.height
                ) {
                    ball.invertDirectionX();
                }

                if (
                    ball.x > wall.x &&
                    ball.x < wall.x + wall.width &&
                    ball.y === wall.y + wall.height
                ) {
                    ball.invertDirectionY();
                }
            }

            if (ball && racket) {
                if (
                    ball.x >= racket.x &&
                    ball.x <= racket.x + racket.width &&
                    ball.y + ball.diametr === racket.y
                ) {
                    ball.invertDirectionY();
                }
            }

            if (ball && pin) {
                if ( ball.x > pin.x &&
                    ball.x < pin.x + pin.width &&
                    ball.y === pin.y + pin.height
                    // (ball.x + ball.diametr === pin.x ||
                    //     ball.x === pin.x + pin.width) &&
                    // ball.y > pin.y &&
                    // ball.y < pin.y + pin.height
                ) {
                    ball.invertDirectionY();
                    pin.remove();
                    GAME_STEP_DELAY--
                }
            }
        }
    }

    function isGameOver() {
        let balls = objects.filter((item) => item instanceof Ball);
        let racket = objects.find((item) => item instanceof Racket);
        return !!balls.find((ball) => ball.y > racket.y);
    }

    function doGameStep() {
        let currentGameStepTime = getGameStepTime();

        //console.log('doGameStep', currentGameStep, currentGameStepTime);

        for (let i = 0; i < objects.length; i++) {
            objects[i].live();
        }

        for (let i = 0; i < objects.length; i++) {
            let objectA = objects[i];
            for (let j = i + 1; j < objects.length; j++) {
                let objectB = objects[j];
                checkCollision(objectA, objectB);
            }
        }

        let gameOver = isGameOver();

        currentGameStep++;
        if (currentGameStep < 100000 && !gameOver) {
            setTimeout(doGameStep, GAME_STEP_DELAY);
        } else {
            alert(`Игра закончена, ваш счет : ${score}`);
        }
    }

    setTimeout(doGameStep, GAME_STEP_DELAY);
});
