var WIDTH = window.innerWidth - 100;
var HEIGHT = window.innerHeight - 100;
var FPS = 50;
var MILISECOND = FPS / 1000;
var BACKGROUND = 255;
var FOREGROUND = 10;

var TEST_SIZE = 42;

var glyph_line = [];

var glyphs_1 = [
    new Glyph([false, false, false, true, true, false, true, false, false, false, false, true, false, false, true, false, true, true, false, true, false, false, false, false, false, true, false]),

    new Glyph([true, false, false, true, false, false, true, true, false, false, false, false, false, true, true, true, false, false, true, false, false, false, true, true, true, true, true]),

    new Glyph([false, true, false, true, true, true, true, false, false, false, false, false, false, false, false, true, false, true, true, false, false, true, true, false, false, false, false]),

    new Glyph([false, true, false, false, true, false, true, true, true, true, false, false, true, true, false, false, false, false, true, true, false, false, false, true, false, false, false]),

    new Glyph([false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, true, false, true, false, true, true, true, true, false, false, true, true]),

    new Glyph([true, true, true, false, false, true, true, true, true, true, false, true, false, false, true, false, false, true, false, false, true, true, false, false, false, true, true]),

    new Glyph([true, false, false, false, true, true, true, false, true, true, true, true, true, true, false, false, false, true, true, true, false, false, true, false, false, true, true]),

    new Glyph([true, true, false, true, false, false, false, false, true, false, true, true, true, false, true, false, false, true, true, true, true, false, false, false, false, false, true]),

    new Glyph([true, false, true, true, true, true, true, false, false, false, true, true, false, true, true, false, false, false, false, true, true, true, false, true, false, false, true]),

    new Glyph([false, false, false, false, true, true, true, true, false, false, true, false, false, false, false, false, true, true, true, true, true, true, false, false, true, true, true]),

    new Glyph([true, false, false, false, false, true, true, false, true, false, true, false, false, false, false, false, false, true, false, true, false, true, true, true, false, true, false]),

    new Glyph([false, true, true, true, false, true, false, false, false, true, false, false, true, true, true, true, true, false, false, true, true, false, false, true, true, false, false]),

    new Glyph([true, false, false, true, false, false, false, false, false, true, true, false, true, false, true, false, true, false, false, false, true, false, false, true, false, true, false]),

    new Glyph([true, false, false, false, false, true, false, true, false, true, true, false, false, true, true, true, true, false, true, false, true, false, true, false, false, true, false]),

    new Glyph([true, false, false, true, false, true, false, false, false, true, true, false, true, false, true, true, true, false, false, false, false, true, false, true, true, false, true]),

    new Glyph([false, false, true, true, false, false, false, false, true, false, false, false, true, false, false, true, false, false, true, true, false, false, false, true, false, true, true]),

    new Glyph([false, false, false, false, false, true, false, true, false, true, true, false, true, false, false, true, true, false, false, true, true, true, true, true, false, false, true]),

    new Glyph([false, false, false, false, false, false, false, false, false, true, false, true, false, true, false, false, true, false, true, false, false, true, false, true, false, true, false]),

    new Glyph([true, true, true, false, true, false, true, true, false, true, true, true, true, false, true, true, true, false, false, true, false, true, true, false, false, true, true]),

    new Glyph([false, false, true, true, false, false, true, false, true, false, true, false, false, true, false, true, false, false, false, true, true, true, false, false, false, false, false]),

    new Glyph([true, true, false, true, true, false, true, true, false, true, false, false, true, true, true, false, true, true, true, false, false, true, true, false, false, false, false]),

    new Glyph([true, true, true, false, false, false, false, false, true, false, true, false, false, true, true, false, true, true, true, true, true, true, false, false, true, true, false]),

    new Glyph([false, false, true, true, true, false, true, false, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, true, false, false]),

    new Glyph([true, true, false, false, true, true, true, false, false, true, false, false, false, true, true, true, true, false, false, true, false, true, false, true, true, true, false]),

    new Glyph([true, false, false, false, false, false, false, true, false, false, true, false, false, true, false, false, false, true, false, true, false, false, false, true, false, true, false]),

    new Glyph([true, false, true, false, false, false, false, false, false, true, false, false, true, false, true, true, false, false, false, true, true, true, true, true, false, true, true]),

    new Glyph([true, true, false, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true, false, false, true, true, true, true, true]),

    new Glyph([false, true, true, false, true, false, false, false, true, false, false, false, false, true, true, true, true, true, true, false, true, false, false, true, false, false, false]),

    new Glyph([false, false, true, true, true, false, false, false, false, false, false, true, true, true, true, true, true, false, true, false, false, false, true, false, false, false, true]),

    new Glyph([true, false, false, false, true, true, true, true, false, false, false, true, true, true, true, false, false, false, false, true, true, false, true, false, true, true, false]),

    new Glyph([true, true, true, true, false, false, false, false, false, true, false, false, true, false, false, false, false, true, false, true, true, false, false, false, false, true, true]),

    new Glyph([true, false, false, false, true, false, true, false, false, false, false, true, true, false, true, true, true, false, false, true, false, true, true, false, true, true, false]),

    new Glyph([true, true, false, true, true, false, false, false, false, true, true, true, true, false, true, true, false, true, true, false, true, true, true, false, false, false, true]),

    new Glyph([true, true, true, true, true, false, true, true, true, false, true, true, false, false, false, true, false, true, true, false, true, false, true, false, false, true, true]),

    new Glyph([false, false, false, false, true, true, true, true, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, true, true, false, true]),

    new Glyph([true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, true, true, false, false, false, true, true, true, true, false, true, true]),

    new Glyph([true, true, true, false, false, true, true, false, true, false, true, false, false, true, false, false, true, false, false, false, true, false, true, false, false, false, false]),

    new Glyph([true, false, false, true, true, false, false, true, true, true, true, true, true, false, false, false, true, true, false, false, true, true, true, false, false, true, false]),

    new Glyph([true, false, true, false, false, true, true, true, true, false, true, true, true, false, false, false, true, false, false, true, false, true, false, false, true, true, true]),

    new Glyph([false, true, false, false, true, false, false, false, false, true, true, false, false, true, false, true, true, true, true, true, false, false, true, false, false, true, true]),

    new Glyph([false, true, true, true, true, true, false, false, false, false, true, true, true, true, false, true, true, true, false, true, true, false, true, true, true, true, true]),

    new Glyph([false, false, false, true, false, true, false, true, false, true, true, true, false, true, false, true, false, true, false, true, true, false, false, true, false, true, true]),
];
var glyphs_2 = [
    new Glyph([false, true, false, true, false, true, true, true, true, false, false, false, true, true, false, true, false, false, true, true, true, true, false, false, true, true, true]),

    new Glyph([true, false, false, true, false, true, false, false, true, false, false, false, false, false, true, true, false, true, true, true, false, true, true, false, false, true, true]),

    new Glyph([false, true, true, false, false, true, true, true, true, true, false, true, false, false, true, true, false, true, false, true, true, true, false, true, true, false, false]),

    new Glyph([true, true, false, false, true, true, true, false, true, false, false, true, false, true, false, false, true, true, false, true, true, true, false, false, false, true, false]),

    new Glyph([true, true, false, true, false, true, false, true, true, true, false, true, false, false, false, true, false, false, true, false, false, false, true, true, false, false, true]),

    new Glyph([true, false, false, true, false, true, false, true, true, true, true, false, false, false, true, true, false, false, false, true, true, false, false, true, true, true, true]),

    new Glyph([true, true, true, false, true, false, true, true, false, true, false, true, true, false, true, false, false, true, false, false, false, true, false, false, false, false, false]),

    new Glyph([false, true, false, false, false, false, false, true, true, false, true, true, false, false, true, true, false, true, true, true, false, false, false, false, true, false, false]),

    new Glyph([false, true, false, false, true, false, true, false, true, true, true, true, false, true, true, true, true, true, true, true, false, true, false, true, true, true, true]),

    new Glyph([false, true, true, true, false, true, true, true, true, true, false, true, false, false, false, false, true, true, false, true, false, true, true, false, true, true, false]),

    new Glyph([false, false, false, false, true, false, true, false, true, true, false, false, false, true, false, true, true, true, true, false, true, false, false, true, false, false, true]),

    new Glyph([false, false, false, true, false, true, false, true, false, false, true, true, true, true, false, false, false, false, true, false, false, false, true, true, false, false, true]),

    new Glyph([false, true, false, false, false, false, true, true, true, false, true, false, true, false, false, false, false, true, false, true, false, false, true, false, true, false, true]),

    new Glyph([false, false, false, false, true, true, true, false, true, true, false, false, false, false, true, false, true, false, false, true, false, false, false, true, false, false, true]),

    new Glyph([false, true, true, false, true, false, true, true, true, true, false, true, false, true, false, false, false, false, true, false, false, true, false, true, true, false, false]),

    new Glyph([false, true, false, true, false, false, false, false, true, true, false, false, false, true, false, false, false, false, false, true, true, true, true, true, true, true, true]),

    new Glyph([false, false, false, true, true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, true, false, true, false, false, true, false, true]),

    new Glyph([false, true, false, false, true, false, true, false, true, false, true, false, true, false, false, false, true, false, true, true, true, true, true, false, true, false, false]),

    new Glyph([true, false, false, true, false, false, true, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false, false, true, true, false, true]),

    new Glyph([false, false, true, false, true, true, true, false, true, false, false, false, false, true, true, false, false, false, true, true, false, true, false, true, false, false, false]),

    new Glyph([false, false, false, true, true, false, false, true, true, true, false, true, true, true, false, true, false, false, false, true, false, true, true, false, true, false, false]),

    new Glyph([true, false, true, false, false, true, false, false, true, false, true, true, true, true, true, false, false, false, true, true, true, true, false, true, true, false, false]),

    new Glyph([true, false, false, false, false, true, true, false, false, true, false, false, true, true, true, false, false, false, true, true, false, true, false, true, true, true, false]),

    new Glyph([true, false, false, true, true, false, true, true, true, true, false, false, false, false, true, false, false, true, true, true, false, true, false, false, false, false, false]),

    new Glyph([true, true, true, true, false, false, false, true, false, false, false, true, true, true, true, true, false, true, true, true, true, false, false, true, true, true, true]),

    new Glyph([true, true, true, true, false, true, true, false, true, true, false, true, true, false, true, true, true, true, true, true, true, true, false, false, false, true, false]),

    new Glyph([true, false, false, true, true, true, true, false, true, false, false, true, false, true, true, false, true, true, false, false, false, true, true, true, false, false, false]),

    new Glyph([true, false, true, true, false, true, false, true, false, false, false, false, false, true, true, false, true, true, true, false, true, false, false, false, false, true, false]),

    new Glyph([false, false, true, false, false, false, true, false, false, true, false, false, true, true, true, true, false, false, true, false, true, true, true, false, true, true, false]),

    new Glyph([true, true, false, true, true, false, false, false, true, true, true, false, false, false, true, false, false, true, true, true, true, true, false, false, false, false, true]),

    new Glyph([true, false, true, true, false, true, false, true, false, false, true, true, true, false, false, true, false, false, false, false, false, true, true, false, true, true, true]),

    new Glyph([true, true, true, true, true, true, false, true, true, false, false, true, false, false, true, true, true, false, false, true, false, true, false, true, true, false, false]),

    new Glyph([false, true, true, false, true, false, false, false, false, true, true, false, true, false, true, false, false, false, true, true, false, true, false, false, true, true, true]),

    new Glyph([true, true, false, false, true, false, false, true, true, true, false, true, true, false, true, true, true, false, true, true, false, true, false, false, false, true, true]),

    new Glyph([false, false, true, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, false, true, true, true, true, false, true, false, true]),

    new Glyph([true, true, true, true, true, false, true, true, true, false, true, false, true, true, true, true, true, false, false, false, true, false, true, false, false, true, true]),

    new Glyph([true, true, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true, true, false, true, false, false, true, true, false, true, false]),

    new Glyph([false, true, false, true, false, false, false, true, true, true, false, true, true, false, true, true, true, true, true, false, true, false, true, true, true, true, false]),

    new Glyph([false, false, false, true, false, true, true, true, false, true, true, false, true, true, true, true, false, false, false, true, true, false, true, true, false, true, false]),

    new Glyph([false, false, false, true, false, false, true, true, false, true, true, false, true, false, false, false, true, true, true, false, false, false, false, true, false, false, false]),

    new Glyph([false, false, false, false, true, false, true, false, true, false, true, false, false, false, false, false, true, false, true, true, true, true, false, true, false, true, false]),

    new Glyph([true, false, false, false, true, true, false, false, false, true, true, true, false, false, true, false, false, false, false, false, true, false, false, true, false, true, false])
];
var primers = [];

var glyphs = [];

var alias = "";
var answers = [];

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

    for (i = 0; i < TEST_SIZE; i++) {
        primers.push(new Primer(i % 3 - 1));

    }

    for (i = 0; i < 2 * TEST_SIZE; i++) {
        answers.push("0\n");
    }


    frameRate(FPS);
    timer = new Timer();

    s = fixation_point = new FixationPoint();
    glyph = new Glyph();
    mask = new Mask();

    var inp = createInput('alias');
    inp.position(WIDTH / 2 - 100, HEIGHT / 2 + 100);
    inp.size(200, 25);

    var button1 = createButton(1);
    button1.position(WIDTH / 2 - 225, HEIGHT - 100);
    button1.size(50, 50);
    button1.mousePressed(function () {
        alias = inp.value();
        answers.push(String(alias + '\r\n'));
        answers.push(String('1'));
        glyphs = glyphs_1.concat(glyphs_2);
        removeElements();
        timer.run();
    });

    var button2 = createButton(2);
    button2.position(WIDTH / 2 + 175, HEIGHT - 100);
    button2.size(50, 50);
    button2.mousePressed(function () {
        alias = inp.value();
        answers.push(String(alias + '\r\n'));
        answers.push(String('2'));
        glyphs = glyphs_2.concat(glyphs_1);
        removeElements();
        timer.run();
    });
}

function draw() {
    background(BACKGROUND);
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
            if (this.time < FPS * 2 - 1) {
                s = fixation_point;
            }
            else if (i_glyph < TEST_SIZE && this.time < FPS * 2) {
                s = primers[i_glyph];
            }
            else if (this.time < FPS * 2 + 1) {
                s = mask;
            }
            else if (this.time < FPS * 4) {
                s = glyphs[i_glyph];
            }
            else {
                s = fixation_point;
                ShowButtons()
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
        this.stopped = false;
    }
}

function ShowButtons() {
    var buttons = [];

    for (i = 1; i <= 5; i++) {
        buttons.push(createButton(i))
        buttons[i - 1].position(WIDTH / 2 - 325 + 100 * i, HEIGHT - 100);
        buttons[i - 1].size(50, 50);
        buttons[i - 1].mousePressed(answerPressedFun(i));
    }
}

function answerPressedFun(i) {
    return function () {
        answers[i_glyph] = String(i) + '\r\n';
        i_glyph++;
        if (i_glyph < 2 * TEST_SIZE) {
            timer.reset();
        }
        else {
            save(answers, alias, 'txt');
        }
        removeElements();

    };
}

function Glyph(arr = []) {
    if (arr.length == 0) {
        this.arr = [];
        for (i = 0; i < glyph_line.length; i++) {
            this.arr[i] = Math.random() > 0.5;
        }
    }
    else
    {
        this.arr = arr;
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
        noFill();
        stroke(FOREGROUND);

        ellipse(WIDTH / 2, HEIGHT / 2, 400);
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
