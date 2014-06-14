/// <reference path="inheritancejs.js" />
/// <reference path="Objects/gameObject.js" />
/// <reference path="hero.js" />
/// <reference path="oval.js" />
/// <reference path="triangle.js" />
/// <reference path="skeleton.js" />
/// <reference path="skeletonToRight.js"/>
/// <reference path="triangleToRight.js"/>
/// <reference path="ovalToRight.js"/>

function Game() {
    var self = this,
        animation,
        canvas = $("#canvas")[0],
        ctx = canvas.getContext('2d'),
        mainLoop,
        enemyFishSpeed = 1;

    //TODO:implement for random number of objects
    var enemies = generateEnemyObjs(100);
    appendDivstoDom(enemies);
    setCanvas(enemies);

    mainLoop = function () {

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawEnemies(enemies);

        updateEnemiesPosition(enemies);

        ctx.restore();
        animation = requestAnimationFrame(mainLoop);

    };
    mainLoop();

    function generateEnemyObjs(enemiesCount) {

        var enemiesArr = [];
        var xPos = window.innerWidth;

        for (var i = 0; i < enemiesCount; i++) {
            var currentEnemy = new EnemyFish();

            var currentYPos = randomGenerator(10, window.innerHeight - 10);
            var currWidth = randomGenerator(10, 50);
            var currHeight = randomGenerator(10, 50);

            currentEnemy.init(xPos, currentYPos, currWidth, currHeight);
            enemiesArr.push(currentEnemy);
        }


        return enemiesArr;
    }

    function appendDivstoDom(enemiesArr) {

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < enemiesArr.length; i++) {
            var currDiv = document.createElement('div');
            currDiv.id = i;
            fragment.appendChild(currDiv);
        }
        document.body.appendChild(fragment);
    }

    function updateEnemiesPosition(enemiesArr) {

        for (var i = 0; i < enemiesArr.length; i++) {
            enemiesArr[i].x -= enemyFishSpeed;
        }
    }
    //TODO: Implement random type objects
            //Calculate better positioning of elements and adequte object size
    function setCanvas(enemiesArr) {

        //i as a string is used as an id for the canvas
        for (var i = 0; i < enemiesArr.length; i++) {
            var randomObjType = randomGenerator(1, 3);

            switch (randomObjType) {
                case 1:
                    enemiesArr[i].canvas = drawSkeleton(enemiesArr[i].width, enemiesArr[i].height, i.toString());
                    break;
                case 2:
                    enemiesArr[i].canvas = drawTriangle(enemiesArr[i].width,
                        enemiesArr[i].height, enemiesArr[i].x, enemiesArr[i].y, i.toString());
                    break;
                case 3:
                    enemiesArr[i].canvas = drawOval(enemiesArr[i].width, enemiesArr[i].height, i.toString());
                    break;
                default:
                    break;
            }

        }
    }
    function drawEnemies(enemiesArr) {
        for (var i = 0; i < enemiesArr.length; i++) {
            var currDiv = document.getElementById(i);

            currDiv.style.top = enemiesArr[i].y + 'px';
            currDiv.style.left = enemiesArr[i].x + 'px';
        }
    }

    //Will be used lately

    //function generateBonus() {
    //    var yPos = 0;
    //    var xPos = randomGenerator(10, window.innerWidth - 10);
    //    var bonus = new Bonus();
    //    bonus.init(xPos, yPos, 30, 30);

    //    return bonus;
    //}
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

