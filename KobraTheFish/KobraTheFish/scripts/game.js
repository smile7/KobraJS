/// <reference path="inheritancejs.js" />
/// <reference path="Objects/gameObject.js" />

function Game() {
    var self = this,
        animation,
        canvas = $("#canvas")[0],
        ctx = canvas.getContext('2d'),
        mainLoop,
        enemyFishSpeed = 1;
    var enemies = generateEnemyObjs();
    mainLoop = function () {

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        updateEnemiesPosition(enemies);
        //TODO:Implement drawing the enemies
        //drawEnemies(enemies);

        ctx.restore();
        animation = requestAnimationFrame(mainLoop);

    };
    mainLoop();

    function generateEnemyObjs() {
        var enemiesArr = [];
        var xPos = window.innerWidth;
        
        //creates 10 enemy fish
        //TODO:create different number of enemies
        for (var i = 0; i < 10; i++) {
            var currentEnemy = new EnemyFish();

            var currentYPos = randomGenerator(10, window.innerHeight - 10);
            var currWidth = randomGenerator(10, 50);
            var currHeight = randomGenerator(10, 50);
            
            currentEnemy.init(xPos, currentYPos, currWidth, currHeight);
            enemiesArr.push(currentEnemy);
        }

        return enemiesArr;
    }

    function updateEnemiesPosition(enemies) {

        for (var i = 0; i < enemies.length; i++) {
            enemies[i].x -= enemyFishSpeed;
        }
    }

    function drawEnemies(enemies) {

        for (var i = 0; i < enemies.length; i++) {
            enemies[i].canvas.clearRect(0, 0, enemies[i].canvas.width, enemies[i].canvas.height);

            enemies[i].drawFish();
        }
    }

    function randomGenerator(min, max) {

        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return randomNum;
    }

    function checkRequestAnimationFrame() {
        if (!window.requestAnimationFrame) {

            window.requestAnimationFrame = (function () {

                return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

                    window.setTimeout(callback, 1000 / 60);

                };

            })();

        }
    };
}

