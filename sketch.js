var WIDTH = window.innerWidth - 100;
var HEIGHT = window.innerHeight - 100;
var FPS = 60;
var MILISECOND = FPS / 1000;
var BACKGROUND = 255;
var FOREGROUND = 10;

var TEST_SIZE = 180;

var FIXATION_TIME = 24; //100 * MILISECOND;
var MASK_TIME_1 = FIXATION_TIME + 3; //50 * MILISECOND;
var PRIMER_TIME = MASK_TIME_1 + 2; //32 * MILISECOND;
var MASK_TIME_2 = PRIMER_TIME + 3; //50 * MILISECOND;

var alias = "";
var age = "";
var answers = [];

var _primers = 
[
    ["aktywować", "0", "0"],
    ["elektryczność", "0", "0"],
    ["energia", "0", "0"],
    ["geniusz", "0", "0"],
    ["huśtać ", "0", "0"],
    ["nagradzać", "0", "0"],
    ["popularność", "0", "0"],
    ["popularny", "0", "0"],
    ["porywający", "0", "0"],
    ["przystojniak", "0", "0"],
    ["ruchliwość", "0", "0"],
    ["śmiały", "0", "0"],
    ["świętować", "0", "0"],
    ["tańczenie", "0", "0"],
    ["uratowanie", "0", "0"],
    ["witalność", "0", "0"],
    ["wiwatować", "0", "0"],
    ["zabawa", "0", "0"],
    ["zadowolony", "0", "0"],
    ["złoto", "0", "0"],
    ["frytki", "0", "1"],
    ["godło", "0", "1"],
    ["korzyść", "0", "1"],
    ["lepszy", "0", "1"],
    ["lot", "0", "1"],
    ["moralny", "0", "1"],
    ["poduszka", "0", "1"],
    ["potomstwo", "0", "1"],
    ["profesor", "0", "1"],
    ["rozchmurzyć się", "0", "1"],
    ["rzeka", "0", "1"],
    ["scena", "0", "1"],
    ["skarb", "0", "1"],
    ["spojrzenie", "0", "1"],
    ["sprawiedliwy", "0", "1"],
    ["toast", "0", "1"],
    ["uprzejmość", "0", "1"],
    ["wrażliwy", "0", "1"],
    ["wykąpać", "0", "1"],
    ["zwiedzać", "0", "1"],
    ["bajka", "0", "2"],
    ["dąb", "0", "2"],
    ["działka", "0", "2"],
    ["herbata", "0", "2"],
    ["kolacja", "0", "2"],
    ["koniczyna", "0", "2"],
    ["kraj", "0", "2"],
    ["książka", "0", "2"],
    ["lody", "0", "2"],
    ["łąka", "0", "2"],
    ["oczy", "0", "2"],
    ["przysługa", "0", "2"],
    ["rozluźniony", "0", "2"],
    ["sandał", "0", "2"],
    ["ser", "0", "2"],
    ["śnić", "0", "2"],
    ["troskliwy", "0", "2"],
    ["wybrzeże", "0", "2"],
    ["wytchnienie", "0", "2"],
    ["zupa", "0", "2"],
    ["bunkier", "1", "0"],
    ["doping", "1", "0"],
    ["ekscentryczny", "1", "0"],
    ["ekstrawertyk", "1", "0"],
    ["koks", "1", "0"],
    ["licytować", "1", "0"],
    ["nagły", "1", "0"],
    ["namawiać", "1", "0"],
    ["pościg", "1", "0"],
    ["promieniować", "1", "0"],
    ["rumienić się", "1", "0"],
    ["spieszyć", "1", "0"],
    ["szybko", "1", "0"],
    ["śmieszność", "1", "0"],
    ["władca", "1", "0"],
    ["władczy", "1", "0"],
    ["zagorzały", "1", "0"],
    ["zawzięty", "1", "0"],
    ["zuchwały", "1", "0"],
    ["żołnierz", "1", "0"],
    ["bandżo", "1", "1"],
    ["barokowy", "1", "1"],
    ["beznadziejność", "1", "1"],
    ["diesel", "1", "1"],
    ["kopiować", "1", "1"],
    ["krater", "1", "1"],
    ["krucyfiks", "1", "1"],
    ["mrzonka", "1", "1"],
    ["objawić", "1", "1"],
    ["obowiązek", "1", "1"],
    ["ofiarność", "1", "1"],
    ["partia", "1", "1"],
    ["posag", "1", "1"],
    ["pracować", "1", "1"],
    ["prawny", "1", "1"],
    ["przenicować", "1", "1"],
    ["rozpocząć", "1", "1"],
    ["singiel", "1", "1"],
    ["udo", "1", "1"],
    ["wezwać", "1", "1"],
    ["bandaż", "1", "2"],
    ["beżowy", "1", "2"],
    ["dziedziniec", "1", "2"],
    ["futerko", "1", "2"],
    ["historia", "1", "2"],
    ["klamka", "1", "2"],
    ["małomówny", "1", "2"],
    ["mata", "1", "2"],
    ["owies", "1", "2"],
    ["pobożny", "1", "2"],
    ["psalm", "1", "2"],
    ["rosa", "1", "2"],
    ["ścierka", "1", "2"],
    ["ton", "1", "2"],
    ["ucho", "1", "2"],
    ["wystawa", "1", "2"],
    ["zamyślony", "1", "2"],
    ["zastały", "1", "2"],
    ["zbierać", "1", "2"],
    ["ziemia", "1", "2"],
    ["apodyktyczny", "2", "0"],
    ["cela", "2", "0"],
    ["cyklon", "2", "0"],
    ["horror", "2", "0"],
    ["kopnąć", "2", "0"],
    ["krwisty", "2", "0"],
    ["najeźdźca", "2", "0"],
    ["nielubić", "2", "0"],
    ["obolałość", "2", "0"],
    ["opłakiwać", "2", "0"],
    ["pomyłka", "2", "0"],
    ["powódź", "2", "0"],
    ["prostacki", "2", "0"],
    ["przemyt", "2", "0"],
    ["skąpstwo", "2", "0"],
    ["strzykawka", "2", "0"],
    ["uwięzienie", "2", "0"],
    ["zirytowany", "2", "0"],
    ["złamane", "2", "0"],
    ["zniewalać", "2", "0"],
    ["bagatelizować", "2", "1"],
    ["bagno", "2", "1"],
    ["czekać", "2", "1"],
    ["jarzmo", "2", "1"],
    ["naiwniak", "2", "1"],
    ["nieatrakcyjny", "2", "1"],
    ["opuszczony", "2", "1"],
    ["ospa", "2", "1"],
    ["ości", "2", "1"],
    ["pierdnięcie", "2", "1"],
    ["ponury", "2", "1"],
    ["spławić", "2", "1"],
    ["szczur", "2", "1"],
    ["szkoda", "2", "1"],
    ["szturchanie", "2", "1"],
    ["tłuszcz", "2", "1"],
    ["uschły", "2", "1"],
    ["uszczypnięcie", "2", "1"],
    ["zapominalski", "2", "1"],
    ["zesztywniały", "2", "1"],
    ["apatyczny", "2", "2"],
    ["bezbronny", "2", "2"],
    ["jałowy", "2", "2"],
    ["klapa", "2", "2"],
    ["marazm", "2", "2"],
    ["nieważny", "2", "2"],
    ["ochrypły", "2", "2"],
    ["pasywność", "2", "2"],
    ["pchła", "2", "2"],
    ["sam", "2", "2"],
    ["skorek", "2", "2"],
    ["słabeusz", "2", "2"],
    ["śmietniczka", "2", "2"],
    ["wycofany", "2", "2"],
    ["wygasły", "2", "2"],
    ["zmęczenie", "2", "2"],
    ["znośny", "2", "2"],
    ["znudzony", "2", "2"],
    ["zobaczyć", "2", "2"],
    ["zostać", "2", "2"]
];

var _targets =
[
    "agencja",
    "akt",
    "anchois",
    "bilans",
    "bogobojny",
    "brąz",
    "buzdygan",
    "byk",
    "chwycić",
    "ciągnąć",
    "ciężarówka",
    "czerwonawy",
    "członek",
    "depozyt",
    "dziecinny",
    "dzierżyć",
    "fabryka",
    "farbować",
    "frędzle",
    "gasić",
    "gaśnica",
    "glina",
    "głosić",
    "goryl",
    "granica",
    "guru",
    "gwizdać",
    "hak",
    "hamulec",
    "heblować",
    "hipnotyzować",
    "hydrant",
    "inny",
    "jaszczurka",
    "jądro",
    "kabura",
    "karma",
    "kichać",
    "kil",
    "klapnąć",
    "klin",
    "konwencjonalny",
    "kopalnia",
    "kosztować",
    "krewki",
    "kręcić",
    "krogulec",
    "krzepnąć",
    "lanca",
    "lasso",
    "lek",
    "lekarz",
    "liberalny",
    "lis",
    "łowiectwo",
    "łowny",
    "majtki",
    "marszałek",
    "masywny",
    "mieszać",
    "migać",
    "młot",
    "myśliwiec",
    "nadchodzić",
    "nadmuchać",
    "nafta",
    "nagwintować",
    "narząd",
    "nasienie",
    "nawyk",
    "nerw",
    "nieformalny",
    "nieść",
    "nietoperz",
    "nieugięty",
    "nożyczki",
    "obóz",
    "obręcz",
    "obrócić",
    "obudzić",
    "ocenić",
    "ochra",
    "odbijać",
    "oddział",
    "odpływ",
    "odprawiać",
    "odrębny",
    "ogłaszanie",
    "olbrzym",
    "orbitowanie",
    "oszczep",
    "plemię",
    "pocierać",
    "podbródek",
    "poker",
    "pokrywać",
    "połknąć",
    "pompa",
    "poprawiać",
    "powiać",
    "powiązany",
    "powinien",
    "powinność",
    "powód",
    "pozostawać",
    "prawnik",
    "programowanie",
    "pryskać",
    "przekorny",
    "przemysł",
    "przenikliwy",
    "przerębel",
    "przestrzegać",
    "prześledzić",
    "przeważający",
    "psyche",
    "pszczoły",
    "pukać",
    "purpurowy",
    "pytanie",
    "rafinowany",
    "rekrutować",
    "rotować",
    "rozciągać",
    "rozszczepić",
    "różnić się",
    "samowolny",
    "skłonny",
    "skrucha",
    "skruszony",
    "służyć",
    "spadek",
    "sprawdzać",
    "spryskać",
    "stragan",
    "stukać",
    "ślizgać",
    "śnieżyć",
    "średni",
    "tankowiec",
    "tłumaczyć",
    "toaleta",
    "transgresja",
    "trąba",
    "ubijać",
    "udowadnianie",
    "udrożnić",
    "ukośny",
    "uniknąć",
    "upchać",
    "usprawiedliwiać",
    "uszczelniać",
    "wabić",
    "ważyć",
    "wciągnąć",
    "wilgotny",
    "wkręcać",
    "wkręt",
    "wole",
    "wolt",
    "wrzucić",
    "wstawić",
    "wyciąg",
    "wygłaszać",
    "wymaganie",
    "wynajem",
    "wytrawiać",
    "wywiesić",
    "wyżłobić",
    "zagiąć",
    "załadować",
    "zamieszać",
    "zarezerwowany",
    "zaszachować",
    "zawiązać",
    "zdziwienie",
    "zgłosić",
    "zjazd",
    "złożyć",
    "zmielić"
];


var s;
var timer;
var testProgress;

var fixation_point;
var glyph;
var mask;

var primers = [];
var targets = [];

let fontFreeSans;
var acceptingInput = false;

function setup() {
    
    fontFreeSans = loadFont('FreeSans.otf');

    shuffle(_primers, true);
    shuffle(_targets, true);

    createCanvas(WIDTH, HEIGHT);
    testProgress = 0;

    for (i = 0; i < TEST_SIZE; i++) {
        answers.push("0\n");
        primers.push(new Primer(_primers[i][0]));
        targets.push(new Target(_targets[i]));
    }

    frameRate(500);
    timer = new Timer();

    s = fixation_point = new FixationPoint();
    mask = new Primer("xxxxxxxxxxx");

    var inpAlias = createInput("alias");
    inpAlias.position(WIDTH / 2 - 100, HEIGHT / 2 + 100);
    inpAlias.size(200, 25);

    var inpAge = createInput("age");
    inpAge.position(WIDTH / 2 - 100, HEIGHT / 2 + 130);
    inpAge.size(200, 25);

    var button = createButton("Start");
    button.position(WIDTH / 2 - 50, HEIGHT - 100);
    button.size(100, 50);
    button.mousePressed(function () {
        alias = inpAlias.value();
        age = inpAge.value();
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
    this.waiting = false;
    this.tick = function () {
        if (!this.stopped) {
            if (this.time < FIXATION_TIME) {
                s = fixation_point;
            }
            else if (this.time < MASK_TIME_1) {
                s = mask;
            }
            else if (this.time < PRIMER_TIME) {
                s = primers[testProgress];
            }
            else if (this.time < MASK_TIME_2) {
                s = mask;
            }
            else {
                s = targets[testProgress];
                ShowButtons();
                acceptingInput = true;
                this.stop();
            }
        }

        this.time++;
    }
    this.run = function () {
        this.time = 0;
        this.stopped = false;
    }
    this.stop = function () {
        this.stopped = true;
    }
    this.reset = function () {
        this.time = 0;
        this.stopped = false;
    }
    this.getTime = function () {
        return (this.time - MASK_TIME_2) * MILISECOND;
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

function keyPressed() {
    if (acceptingInput && key >= '1' && key <= '5') {
        answerPressedFun(key - '0')();
    }
}

function answerPressedFun(i) {
    return function () {
        acceptingInput = false;
        answers[testProgress] = String(_targets[testProgress]) + "," + String(_primers[testProgress]) + "," + String(i) + "," + String(timer.getTime()) + "\r";
        testProgress++;
        if (testProgress < TEST_SIZE) {
            timer.reset();
        }
        else {
            save(answers, alias + "_" + age, "txt");
        }
        removeElements();
    };
}

function Primer(word) {
    this.word = word;
    this.show = function () {
        fill(FOREGROUND);
        stroke(FOREGROUND);

        textFont(fontFreeSans);
        textSize(50);
        textAlign(CENTER, CENTER);
        text(this.word, WIDTH / 2, HEIGHT / 2);
    }
}

function Target(word) {
    this.word = word;
    this.show = function () {
        fill(FOREGROUND);
        stroke(FOREGROUND);

        textFont(fontFreeSans);
        textSize(50);
        textAlign(CENTER, CENTER);
        text(this.word, WIDTH / 2, HEIGHT / 2);

        textSize(20);
        textAlign(CENTER, CENTER);
        text("negatywne", WIDTH / 2 - 210, HEIGHT - 175);
        text("pozytywne", WIDTH / 2 + 190, HEIGHT - 175);
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