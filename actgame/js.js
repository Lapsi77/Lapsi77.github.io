let gamearea = document.getElementById("gameboard")
let container = document.getElementById("gamearea")
let deathScreen = document.getElementById("deathScreen")
let krop = document.getElementById("krop")
let header = document.getElementById("header")
let header2 = document.getElementById("header2")
let restartButton = document.getElementById("restartButton")
document.body.addEventListener("keydown", function (e) {
    keys[e.key] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.key] = false;
});
gameboard.width = 1000;
gameboard.height = 750;

let loop = true
let w = 400
let d = 500
let speed = 3
let playermodel
let keys = []
let enemy
let enemyd = 50
let enemyw = 700
let enemySpeed = 0.5
let point
let score = 0
let pointw = Math.round(Math.random() * 900)
let pointd = Math.round(Math.random() * 650)
let startTime = new Date().getTime()
requestAnimationFrame(gameloop)


function player(){
    playermodel = gamearea.getContext("2d");
    playermodel.beginPath();
    playermodel.strokeStyle = "white";
    playermodel.arc(d, w, 20, 0, 2 * Math.PI);
    playermodel.stroke();
}



function move(){
if (keys["w"]) {
     w += -speed
}
    
if (keys["s"]) {
    w += speed
}
if (keys["d"]) {
    d += speed
}
if (keys["a"]) {
    d += -speed
}}



function borders(){
if(w > 760){
w = 0
score--
enemySpeed += -0.1
speed += -0.2
}
if(d > 1010){
d = 0
score--
enemySpeed += -0.1
speed += -0.2
}
if(w < -10){
w = 750
score--
enemySpeed += -0.1
speed += -0.2
}
if(d < -10){
d = 1000
score--
enemySpeed += -0.1
speed += -0.2
}}





function createEnemy(){
    enemy = gamearea.getContext("2d");
    enemy.beginPath();
    enemy.strokeStyle = "red";
    enemy.arc(enemyd, enemyw, 30, 0, 2 * Math.PI);
    enemy.stroke();
}

function moveenemy(){
if(enemyw>w){
    enemyw = enemyw - enemySpeed
}
if(enemyw<w){
    enemyw = enemyw + enemySpeed
}
if(enemyd>d){
    enemyd = enemyd - enemySpeed
}
if(enemyd<d){
    enemyd = enemyd + enemySpeed
}}



function createPoint(){
if(d < (pointw+27) && d > (pointw-27) && w > (pointd-27) && w < (pointd+27)){
    pointd = Math.round(Math.random() * 600)
    pointw = Math.round(Math.random() * 900)
    score++
    enemySpeed += 0.1
    speed += 0.2
}

point = gamearea.getContext("2d");
point.beginPath();
point.strokeStyle = "gold";
point.fillStyle = "gold";
point.arc(pointw, pointd, 10, 0, 2 * Math.PI);
point.fill();
point.stroke();
}







  function circleOverlap(x1, y1, radius1, x2, y2, radius2) {
x1 = d
x2 = enemyd
y1 = w
y2 = enemyw
radius1 = 20
radius2 = 10
    const dx = x1 - x2;
    const dy = y1 - y2;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (radius1 + radius2);
  }

  
function death(){
if(circleOverlap() == true ){
    gamearea.style.display = "none";
    deathScreen.style.display = "flex";
    loop = false
}}

restartButton.addEventListener("click", restart)
function restart(){
location.reload()
loop = true
}





function gameloop(){
if(loop){requestAnimationFrame(gameloop)}

gameboard = gamearea.getContext("2d")
gameboard.clearRect(0, 0, 1000, 750);
move()
player()
moveenemy()
createEnemy()
createPoint()
death()
borders()
header2.innerText = "Score: " + score
header.innerHTML = "Speed: " + (speed).toFixed(1) + `<br>` + `<br>` +
"Enemy speed: " + (enemySpeed).toFixed(1) + `<br>` + `<br>` +
"Time: " + Math.round((new Date().getTime() - startTime)/1000)
}