var WIDTH = 800;
var HEIGHT = 600;
var FPS = 60;

glyph_line = [];
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

var s;
function setup() {
    createCanvas(WIDTH, HEIGHT);
    //s = new Glyph();
    //s = new FixationPoint();
    //s = new Mask();
    frameRate(FPS);
    s = new Primer(1);
}

function draw() {
    background(51);
    //s.update();
    s.show();
}

//Timer
function Timer() {

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
        stroke(255);
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
        stroke(255);

        ellipse(WIDTH / 2, HEIGHT / 2, 500);
        if(this.smile != 0)
        {
            //eyes
            ellipse(WIDTH / 2 - 100, HEIGHT / 2 - 100, 50);
            ellipse(WIDTH / 2 + 100, HEIGHT / 2 - 100, 50);
            if(this.smile > 0)
            {
                arc(WIDTH / 2, HEIGHT / 2 - 75, 300, 200, QUARTER_PI, PI - QUARTER_PI);
            }
            else
            {
                arc(WIDTH / 2, HEIGHT / 2 + 125, 300, 200, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
            }
        }
    }
}

function Mask() {
    this.show = function () {
        fill(255)
        stroke(255);
        for (i = 0; i < glyph_line.length; i++) {
            rect((glyph_line[i][0] + glyph_line[i][2]) / 2 - 25, (glyph_line[i][1] + glyph_line[i][3]) / 2 - 25, 50, 50, 10);
        }
    }
}

function FixationPoint() {
    this.show = function () {
        noFill();
        stroke(255);

        line(WIDTH / 2 + 25, HEIGHT / 2, WIDTH / 2 - 25, HEIGHT / 2);
        line(WIDTH / 2, HEIGHT / 2 + 25, WIDTH / 2, HEIGHT / 2 - 25);
    }
}