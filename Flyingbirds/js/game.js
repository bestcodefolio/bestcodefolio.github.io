var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//Адаптация игры под экран пользователя
function redrawScene(){
    ctx.fillRect(0, 0, cvs.width, cvs.height)
}
function screen(){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    redrawScene();
}

//Выбор птицы
var values = localStorage.getItem('bird');
var pathBird = JSON.parse(values);

//Выбор карты
valueBG = localStorage.getItem('background');
var pathBG = JSON.parse(valueBG);

//Создание графики
var bird = new Image();
var bg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = pathBird['path'];//"../img/bird3.png";
console.log(pathBird['path']);

bg.src = pathBG['path'];//"../img/background1.png";
console.log(pathBG['path']);

pipeUp.src = "../img/pipeUp.png";
pipeBottom.src = "../img/pipeBottom.png";

bird.width /= 10;
bird.height /= 10;

bg.width = cvs.width;
bg.height = cvs.height;

// Звуковые файлы
var score_audio = new Audio();
score_audio.src = "../audio/score.mp3";

//Расстояние между блоками-препятствиями
var gap = 100;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);
document.addEventListener("click", moveUp);

//Подъем объекта вверх
function moveUp() {
    yPos -= 25;
}

// Создание блоков
var pipe = [];

pipe[0] = {
    x : cvs.width - 900,
    y : -300
}
pipe[1] = {
    x : cvs.width - 600,
    y : 0 - 1 * Math.floor(Math.random() * 500)
}

pipe[2] = {
    x : cvs.width - 300,
    y : 0 - 1 * Math.floor(Math.random() * 500)
}

//Начальное количество очков
var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 150;
//Высота падения объекта
var grav = 1.5;

function draw() {
    //Отрисовка фона
    ctx.drawImage(bg, 0, 0, cvs.width,  cvs.height);

    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        
        pipe[i].x--;
        
        //Добавление новых препятствий
        if(pipe[i].x == 500) {
            pipe.push({
                x : cvs.width,
                y : 0 - 1 * Math.floor(Math.random() * 500)//Math.floor((Math.random() * 2 - 0.3) * pipeUp.height) - pipeUp.height 
            });
        }

        // Отслеживание прикосновений
        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) 
            || yPos + bird.height >= cvs.height) {
            location.reload(); // Перезагрузка страницы
        }
        //Запуск аудио с звуком увеличения очков
        if(pipe[i].x == 0) {
            score++;
            score_audio.play();
        }
    }
    ctx.drawImage(bird, xPos, yPos, bird.height*1.2, bird.width*0.7);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 100);

    requestAnimationFrame(draw);
}

window.onload = draw();