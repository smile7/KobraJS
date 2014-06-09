//setTimeout(function () { }, 1500);

var paper = Raphael('svg-container', 1024, 768);
var images = [
    'url(../scripts/images/15.png)',
    'url(../scripts/images/14.png)',
    'url(../scripts/images/13.png)',
    'url(../scripts/images/12.png)',
    'url(../scripts/images/11.png)',
    'url(../scripts/images/10.png)',
    'url(../scripts/images/9.png)',
    'url(../scripts/images/8.png)',
    'url(../scripts/images/7.png)',
    'url(../scripts/images/6.png)',
    'url(../scripts/images/5.png)',
    'url(../scripts/images/4.png)',
    'url(../scripts/images/3.png)',
    'url(../scripts/images/2.png)',
    'url(../scripts/images/Sea-Water-final.png)'
];

paper.rect(0, 0, 1024, 768).attr({ fill: 'blue' });

var img = paper.rect(0, 0, 1024, 768)
    .attr({ fill: images[11],stroke:'blue' })
    .animate({
        x: -100,
        y:-100,
        //fill: images[Math.floor(Math.random() * 14)],
        callback: function () {
            img.animate({
                x: 0,
                y:0
                //fill: images[Math.floor(Math.random() * 14)]
            }, 5000);
        }
    }, 5000);



//var image = paper.image(http://localhost:2847/images/15.png, 0, 0, 1024, 768);
//    .attr({
//        x: 150,
//        fill: 'yellow',
//        stroke: 'purple',
//        'stroke-width': 5,
//    })
//    .rotate(25, 150, 200)
//    .animate({
//        x: 450,
//        fill: 'purple',
//        width: 50,
//        callback: function () {
//            rect.animate({
//                x: 40,
//                fill: 'yellow'
//            }, 1000);
//        }
//    }, 1000);