function drawTriangle (CONST_WIDTH, CONST_HEIGHT, x, y) {
    var stage = new Kinetic.Stage({
            container: 'container',
            width: CONST_WIDTH,
            height: CONST_HEIGHT
        }),
        layer = new Kinetic.Layer();

    // border
    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: CONST_WIDTH,
        height: CONST_HEIGHT,
        stroke: '#000'
    });

    var body1 = new Kinetic.Line({
        points: [CONST_WIDTH - 2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.95, CONST_HEIGHT * 0.4],
        stroke: 'black'
    });

    var body2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.95, CONST_HEIGHT * 0.4, CONST_WIDTH * 0.86, CONST_HEIGHT * 0.3, CONST_WIDTH * 0.85, CONST_HEIGHT * 0.2],
        stroke: 'black',
        tension: 1
    });

    var body3 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.85, CONST_HEIGHT * 0.2, CONST_WIDTH * 0.65, CONST_HEIGHT * 0.15, CONST_WIDTH * 0.25, CONST_HEIGHT * 0.45],
        stroke: 'black',
        tension: 1
    });

    var tail1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.25, CONST_HEIGHT * 0.45, 2, CONST_HEIGHT * 0.3],
        stroke: 'black'
    });

    var tail2 = new Kinetic.Line({
        points: [2, CONST_HEIGHT * 0.32, CONST_WIDTH * 0.05, CONST_HEIGHT * 0.4, 2, CONST_HEIGHT * 0.45],
        stroke: 'black',
        tension: 1
    });

    var tail3 = new Kinetic.Line({
        points: [2, CONST_HEIGHT * 0.45, CONST_WIDTH * 0.05, CONST_HEIGHT * 0.53, 2, CONST_HEIGHT * 0.58],
        stroke: 'black',
        tension: 1
    });

    var tail4 = new Kinetic.Line({
        points: [2, CONST_HEIGHT * 0.58, CONST_WIDTH * 0.05, CONST_HEIGHT * 0.64, 2, CONST_HEIGHT * 0.69],
        stroke: 'black',
        tension: 1
    });

    var tail5 = new Kinetic.Line({
        points: [2, CONST_HEIGHT * 0.71, CONST_WIDTH * 0.25, CONST_HEIGHT * 0.55],
        stroke: 'black'
    });

    var body4 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.25, CONST_HEIGHT * 0.55, CONST_WIDTH * 0.4, CONST_HEIGHT * 0.7, CONST_WIDTH * 0.6, CONST_HEIGHT * 0.74],
        stroke: 'black',
        tension: 1
    });

    var body5 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.6, CONST_HEIGHT * 0.74, CONST_WIDTH * 0.8, CONST_HEIGHT * 0.7, CONST_WIDTH * 0.92, CONST_HEIGHT * 0.6],
        stroke: 'black',
        tension: 1
    });

    var mouth1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.92, CONST_HEIGHT * 0.6, CONST_WIDTH * 0.82, CONST_HEIGHT * 0.54, CONST_WIDTH - 2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.97, CONST_HEIGHT * 0.54, CONST_WIDTH * 0.85, CONST_HEIGHT * 0.55],
        stroke: 'black'
    });

    var eye = new Kinetic.Circle({
        x: CONST_WIDTH * 0.8,
        y: CONST_HEIGHT * 0.3,
        radius: CONST_WIDTH * 0.05,
        stroke: 'darkblue'
    });

    var pupil = new Kinetic.Circle({
        x: CONST_WIDTH * 0.81,
        y: CONST_HEIGHT * 0.3,
        radius: CONST_WIDTH * 0.02,
        fill: 'black'
    });

    var eyelid1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.85, CONST_HEIGHT * 0.28, CONST_WIDTH * 0.75, CONST_HEIGHT * 0.28],
        stroke: 'blue'
    });

    var eyelid2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.83, CONST_HEIGHT * 0.27, CONST_WIDTH * 0.77, CONST_HEIGHT * 0.27],
        stroke: 'darkblue'
    });

    var eyelash1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.83, CONST_HEIGHT * 0.27, CONST_WIDTH * 0.76, CONST_HEIGHT * 0.23],
        stroke: 'red'
    });

    var eyelash2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.81, CONST_HEIGHT * 0.29, CONST_WIDTH * 0.74, CONST_HEIGHT * 0.25],
        stroke: 'red'
    });

    var beard1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.92, CONST_HEIGHT * 0.63, CONST_WIDTH * 0.84, CONST_HEIGHT * 0.9],
        strokeWidth: 3,
        stroke: 'gray'
    });

    var beard2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.9, CONST_HEIGHT * 0.63, CONST_WIDTH * 0.84, CONST_HEIGHT * 0.9],
        strokeWidth: 3,
        stroke: 'gray'
    });

    var beard3 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.88, CONST_HEIGHT * 0.62, CONST_WIDTH * 0.84, CONST_HEIGHT * 0.92],
        strokeWidth: 3,
        stroke: 'gray'
    });

    var finUp = new Kinetic.Line({
        points: [CONST_WIDTH * 0.8, CONST_HEIGHT * 0.13, CONST_WIDTH * 0.4, CONST_HEIGHT * 0.05, CONST_WIDTH * 0.65, CONST_HEIGHT * 0.16, CONST_WIDTH * 0.3, CONST_HEIGHT * 0.07, CONST_WIDTH * 0.55, CONST_HEIGHT * 0.19],
        fill: 'blue',
        stroke: '#36179E',
        closed: true
    });

    var text = new Kinetic.Text({
        x: CONST_WIDTH * 0.47,
        y: CONST_HEIGHT * 0.24,
        text: 'I',
        fill: 'red',
        fontSize: 22,
        fontFamily: 'Monotype Corsiva'
    });

    var text2 = new Kinetic.Text({
        x: CONST_WIDTH * 0.3,
        y: CONST_HEIGHT * 0.4,
        text: 'KILL',
        fill: 'red',
        fontSize: 22,
        fontFamily: 'Monotype Corsiva'
    });

    var text3 = new Kinetic.Text({
        x: CONST_WIDTH * 0.38,
        y: CONST_HEIGHT * 0.56,
        text: 'U',
        fill: 'red',
        fontSize: 22,
        fontFamily: 'Monotype Corsiva'
    });



    layer.add(text3);
    layer.add(text2);
    layer.add(text);
    layer.add(finUp);
    layer.add(eyelash2);
    layer.add(eyelash1);
    layer.add(pupil);
    layer.add(eye);
    layer.add(eyelid2);
    layer.add(eyelid1);
    layer.add(mouth1);
    layer.add(body5);
    layer.add(body4);
    layer.add(tail5);
    layer.add(tail4);
    layer.add(tail3);
    layer.add(tail2);
    layer.add(tail1);
    layer.add(body3);
    layer.add(body2);
    layer.add(body1);
    layer.add(beard3);
    layer.add(beard2);
    layer.add(beard1);
    //layer.add(rect);
    return stage.add(layer);
}


// HEIGHT MUST BE EXACTLY AS LONG AS THE WIDTH
var width = 130,
    height = 130;
drawTriangle(width, height, 100, 100);