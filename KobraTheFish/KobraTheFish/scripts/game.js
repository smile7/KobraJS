/// <reference path="inheritancejs.js" />
/// <reference path="Objects/gameObject.js" />

function Game() {
    var self = this,
        animation,
        canvas = $("#canvas")[0],
        ctx = canvas.getContext('2d'),
        mainLoop,
        enemyFishSpeed = 1;
    
    mainLoop = function () {

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.restore();
        animation = requestAnimationFrame(mainLoop);
    };
    mainLoop();

    function generateEnemyObjs() {
        
    }
    function randomGenerator(min, max) {

        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return randomNum;
    };
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

