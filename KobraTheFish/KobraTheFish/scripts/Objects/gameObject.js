
GameObject = Class.extend({
    init: function (x, y, width, height, name) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.canvas = $("#canvas")[0];
        this.ctx = this.canvas.getContext('2d');
    },
    getPosition: function () {
        var that = this;
        return {
            x: that.x,
            y: that.y,
        };
    },
    getSize: function () {
        var that = this;
        return {
            width: that.width,
            height: that.height,
        };
    }
});

Fish = GameObject.extend({
    init: function (x, y, width, height, name) {
        this._super(x, y, width, height, name);
        this.size = 1;

    },

    drawFish: function(parameters) { //asd
        
    },
    
});
// TO DO:
MainFish = Fish.extend({

});
// TO DO:
EnemyFish = Fish.extend({

});
// TO DO:
Bonus = GameObject.extend({
    
});