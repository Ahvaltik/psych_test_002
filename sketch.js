var WIDTH = 800;
var HEIGHT = 600;
var FPS = 50;
var MILISECOND = FPS / 1000;
var BACKGROUND = 255;
var FOREGROUND = 10;

var glyph_line = [];

var glyphs_1 = [];
var glyphs_2 = [];
var primers = [];

var glyphs;

var s;
var timer;
var i_glyph;

var fixation_point;
var glyph;
var mask;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    i_glyph = 0;

    for (i = 0; i < 3; i++) {
        glyph_line.push([WIDTH / 2 - 200 + i * 200, HEIGHT / 2 - 200, WIDTH / 2 - 200 + i * 200, HEIGHT / 2 + 200]);
    }
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            glyph_line.push([WIDTH / 2 - 100 + i * 200, HEIGHT / 2 - 100 + j * 100, WIDTH / 2 - 100 + i * 200 + 100, HEIGHT / 2 - 100 + j * 100 + 100]);
            glyph_line.push([WIDTH / 2 - 100 + i * 200, HEIGHT / 2 - 100 + j * 100, WIDTH / 2 - 100 + i * 200 - 100, HEIGHT / 2 - 100 + j * 100 + 100]);
            glyph_line.push([WIDTH / 2 - 100 + i * 200, HEIGHT / 2 - 100 + j * 100, WIDTH / 2 - 100 + i * 200 + 100, HEIGHT / 2 - 100 + j * 100 - 100]);
            glyph_line.push([WIDTH / 2 - 100 + i * 200, HEIGHT / 2 - 100 + j * 100, WIDTH / 2 - 100 + i * 200 - 100, HEIGHT / 2 - 100 + j * 100 - 100]);
        }
    }

    for (i = 0; i < 42; i++) {
        primers.push(new Primer(i%3-1));
    }
    

    frameRate(FPS);
    //s = new Primer(-1);
    timer = new Timer();
    timer.run();
    s = fixation_point = new FixationPoint();
    glyph = new Glyph();
    mask = new Mask();
}

function draw() {
    background(BACKGROUND);

    // var fps = frameRate();
    // noFill();
    // stroke(FOREGROUND);
    // text("FPS: " + fps.toFixed(2), 10, height - 10);

    //s.update();
    timer.tick();
    s.show();
}

//Timer
function Timer() {
    this.stopped = true;
    this.time = 0;
    this.tick = function () {
        if (!this.stopped) {
            // body of a function
            if (this.time < FPS * 3) {
                s = fixation_point;
            }
            else if (i_glyph < 42 && this.time < FPS * 3 + 1) {
                s = primers[i_glyph];
            }
            else if (this.time < FPS * 3 + 2) {
                s = mask;
            }
            else if (this.time < FPS * 6) {
                s = glyph;
            }
            else{
                s = fixation_point;
                this.stop();
            }
            
            this.time++;
        }
    }
    this.run = function () {
        this.stopped = false;
    }
    this.stop = function () {
        this.stopped = true;
    }
    this.reset = function () {
        this.time = 0;
    }
}

function Glyph(arr = []) {
    if (arr.length == 0) {
        this.arr = [];
        for (i = 0; i < glyph_line.length; i++) {
            this.arr[i] = Math.random() > 0.5;
        }
    }

    this.show = function () {
        noFill();
        stroke(FOREGROUND);
        for (i = 0; i < glyph_line.length; i++) {
            if (this.arr[i]) {
                line(glyph_line[i][0], glyph_line[i][1], glyph_line[i][2], glyph_line[i][3]);
            }
        }
    }
}

function Primer(smile = 1) {
    this.smile = smile;
    this.show = function () {
        noFill();
        stroke(FOREGROUND);

        ellipse(WIDTH / 2, HEIGHT / 2, 400);
        if (this.smile != 0) {
            //eyes
            ellipse(WIDTH / 2 - 100, HEIGHT / 2 - 100, 50);
            ellipse(WIDTH / 2 + 100, HEIGHT / 2 - 100, 50);
            if (this.smile > 0) {
                arc(WIDTH / 2, HEIGHT / 2 - 75, 300, 200, QUARTER_PI, PI - QUARTER_PI);
            }
            else {
                arc(WIDTH / 2, HEIGHT / 2 + 125, 300, 200, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
            }
        }
    }
}

function Mask() {
    this.show = function () {
        //fill(FOREGROUND)
        noFill();
        stroke(FOREGROUND);

        ellipse(WIDTH / 2, HEIGHT / 2, 400);
        //fill(FOREGROUND);
        for (i = 3; i < glyph_line.length; i++) {
            ellipse((glyph_line[i][0] + glyph_line[i][2]) / 2 - 25, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 50);
            arc(WIDTH / 2, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 300, 200, QUARTER_PI, PI - QUARTER_PI);
            arc(WIDTH / 2, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 300, 200, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
        }

        for (i = 3; i < glyph_line.length; i++) {
            arc(WIDTH / 2, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 300, 200, QUARTER_PI, PI - QUARTER_PI);
            arc(WIDTH / 2, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 300, 200, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
        }
    }
}

function FixationPoint() {
    this.show = function () {
        noFill();
        stroke(FOREGROUND);

        line(WIDTH / 2 + 25, HEIGHT / 2, WIDTH / 2 - 25, HEIGHT / 2);
        line(WIDTH / 2, HEIGHT / 2 + 25, WIDTH / 2, HEIGHT / 2 - 25);
    }
}
