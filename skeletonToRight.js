function drawSkeleton (CONST_WIDTH, CONST_HEIGHT) {
    //CONST_WIDTH = 200;
    //CONST_HEIGHT = 100;
    var stage = new Kinetic.Stage({
            container: 'container',
            width: CONST_WIDTH,
            height: CONST_HEIGHT,
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

    var head = new Kinetic.Line({
        points: [CONST_WIDTH, CONST_HEIGHT * 0.7, CONST_WIDTH * 0.8, CONST_HEIGHT - 2, CONST_WIDTH * 0.8, 2, CONST_WIDTH, CONST_HEIGHT * 0.7],
        stroke: 'green',
        strokeWidth: 3,
        tension: 0.1
    });

    var mouth = new Kinetic.Line({
        points: [CONST_WIDTH - 2, CONST_HEIGHT * 0.7, CONST_WIDTH * 0.89, CONST_HEIGHT * 0.7, CONST_WIDTH * 0.87, CONST_HEIGHT * 0.68],
        stroke: 'green',
        strokeWidth: 3,
        tension: 3
    });

    var eye = new Kinetic.Circle({
        x: CONST_WIDTH * 0.92,
        y: CONST_HEIGHT * 0.5,
        radius: CONST_HEIGHT * 0.13,
        stroke: 'green',
        fill: 'yellow'
    });

    var pupil = new Kinetic.Circle({
        x: CONST_WIDTH * 0.95,
        y: CONST_HEIGHT * 0.51,
        radius: CONST_HEIGHT * 0.05,
        stroke: 'green',
        fill: 'black'
    });

    var bodyBone1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.65, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.73, CONST_HEIGHT * 0.85, CONST_WIDTH * 0.65, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.73, CONST_HEIGHT * 0.15],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen'
    });

    var bodyBone2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.50, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.58, CONST_HEIGHT * 0.85, CONST_WIDTH * 0.5, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.58, CONST_HEIGHT * 0.15],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen'
    });

    var bodyBone3 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.35, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.43, CONST_HEIGHT * 0.85, CONST_WIDTH * 0.35, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.43, CONST_HEIGHT * 0.15],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen'
    });

    var bodyBone4 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.28, CONST_HEIGHT * 0.85, CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.28, CONST_HEIGHT * 0.15],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen'
    });

    var body1 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.79, CONST_HEIGHT * 0.75, CONST_WIDTH * 0.65, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.79, CONST_HEIGHT * 0.25],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen',
        closed: true
    });

    var body2 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.65, CONST_HEIGHT * 0.75, CONST_WIDTH * 0.5, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.65, CONST_HEIGHT * 0.25],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen',
        closed: true
    });

    var body3 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.5, CONST_HEIGHT * 0.75, CONST_WIDTH * 0.35, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.5, CONST_HEIGHT * 0.25],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen',
        closed: true
    });

    var body4 = new Kinetic.Line({
        points: [CONST_WIDTH * 0.35, CONST_HEIGHT * 0.75, CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.35, CONST_HEIGHT * 0.25],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen',
        closed: true
    });

    var tail  = new Kinetic.Line({
        points: [CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, 2, CONST_HEIGHT * 0.1, 2, CONST_HEIGHT * 0.9],
        stroke: 'green',
        strokeWidth: 2,
        fill: 'yellowgreen',
        closed: true
    });

    var tailBone1  = new Kinetic.Line({
        points: [CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.04, CONST_HEIGHT * 0.36],
        stroke: 'green',
        strokeWidth: 2
    });

    var tailBone2  = new Kinetic.Line({
        points: [CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.04, CONST_HEIGHT * 0.50],
        stroke: 'green',
        strokeWidth: 2
    });

    var tailBone3  = new Kinetic.Line({
        points: [CONST_WIDTH * 0.2, CONST_HEIGHT * 0.5, CONST_WIDTH * 0.04, CONST_HEIGHT * 0.64],
        stroke: 'green',
        strokeWidth: 2
    });

    layer.add(tail);
    layer.add(tailBone1);
    layer.add(tailBone2);
    layer.add(tailBone3);
    layer.add(bodyBone4);
    layer.add(bodyBone3);
    layer.add(bodyBone2);
    layer.add(bodyBone1);
    layer.add(body4);
    layer.add(body3);
    layer.add(body2);
    layer.add(body1);
    layer.add(head);
    layer.add(mouth);
    layer.add(eye);
    layer.add(pupil);
    // border:
    //layer.add(rect);
    return stage.add(layer);
}

// HEIGHT MUST BE EXACTLY 2 TIMES SHORTER THAT THE WIDTH!
var width = 200,
    height = 100;
drawSkeleton(width, height);

