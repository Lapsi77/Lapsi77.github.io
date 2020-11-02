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
gameboard.width = 800;
gameboard.height = 600;

let loop = true
let y = 400
let x = 500
let speed = 3
let playermodel
let keys = []
let enemy
let enemyX = 50
let enemyY = 700
let enemySpeed = 0.5
let point
let score = 0
let pointY = Math.round(Math.random() * 900)
let pointX = Math.round(Math.random() * 650)
let startTime = new Date().getTime()
requestAnimationFrame(gameloop)


function player(){
    playermodel = gamearea.getContext("2d");
    playermodel.beginPath();
    playermodel.strokeStyle = "white";
    playermodel.arc(x, y, 20, 0, 2 * Math.PI);
    playermodel.stroke();
}



function move(){
if (keys["w"]) {
     y += -speed
}
    
if (keys["s"]) {
    y += speed
}
if (keys["d"]) {
    x += speed
}
if (keys["a"]) {
    x += -speed
}}


function borders(){
if(y > 760){
y = 0
score--
enemySpeed += -0.1
speed += -0.2
}
if(x > 1010){
x = 0
score--
enemySpeed += -0.1
speed += -0.2
}
if(y < -10){
y = 750
score--
enemySpeed += -0.1
speed += -0.2
}
if(x < -10){
x = 1000
score--
enemySpeed += -0.1
speed += -0.2
}}





function createEnemy(){
    enemy = gamearea.getContext("2d");
    enemy.beginPath();
    enemy.strokeStyle = "red";
    enemy.arc(enemyX, enemyY, 30, 0, 2 * Math.PI);
    enemy.stroke();
}

function moveenemy(){
if(enemyY>y){
    enemyY = enemyY - enemySpeed
}
if(enemyY<y){
    enemyY = enemyY + enemySpeed
}
if(enemyX>x){
    enemyX = enemyX - enemySpeed
}
if(enemyX<x){
    enemyX = enemyX + enemySpeed
}}



function createPoint(){
if(y < (pointY+27) && y > (pointY-27) && x > (pointX-27) && x < (pointX+27)){
    pointY = Math.round(Math.random() * 700)
    pointX = Math.round(Math.random() * 900)
    score++
    enemySpeed += 0.1
    speed += 0.2
}

point = gamearea.getContext("2d");
point.beginPath();
point.strokeStyle = "gold";
point.fillStyle = "gold";
point.arc(pointX, pointY, 10, 0, 2 * Math.PI);
point.fill();
point.stroke();
}







  function circleOverlap(x1, y1, radius1, x2, y2, radius2) {
x1 = x
x2 = enemyX
y1 = y
y2 = enemyY
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