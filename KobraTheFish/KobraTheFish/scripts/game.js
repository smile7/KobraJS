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

