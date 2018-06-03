var s;
function setup() {
    createCanvas(600, 600);
    s = new UnknownSymbol();
}

function draw() {
    background(51);
    //s.update();
    s.show();
}

function UnknownSymbol() {
    this.line = [];
    for (i = 0; i < 3; i++) {
        this.line.push([100 + i * 200, 100, 100 + i * 200, 500]);
    }
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            this.line.push([200 + i * 200, 200 + j * 100, 200 + i * 200 + 100, 200 + j * 100 + 100]);
            this.line.push([200 + i * 200, 200 + j * 100, 200 + i * 200 - 100, 200 + j * 100 + 100]);
            this.line.push([200 + i * 200, 200 + j * 100, 200 + i * 200 + 100, 200 + j * 100 - 100]);
            this.line.push([200 + i * 200, 200 + j * 100, 200 + i * 200 - 100, 200 + j * 100 - 100]);
        }
    }

    this.arr = [];
    for (i = 0; i < this.line.length; i++) {
        this.arr[i] = Math.random() > 0.5;
    }

    this.show = function () {
        noFill();
        stroke(255);
        for (i = 0; i < this.line.length; i++) {
            if (this.arr[i]) {
                line(this.line[i][0], this.line[i][1], this.line[i][2], this.line[i][3]);
            }
        }
    }
}