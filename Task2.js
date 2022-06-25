var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 0;
var y = 60;
var z = 120;
var xB = Math.random()*innerWidth;
var yB = Math.random()*innerHeight;
var Bdy = 4;
var Bdx = 4;
var radius = 30;
var xR = Math.random()*innerWidth;
var yR = Math.random()*innerHeight;
var l = (Math.random()+10)*30;
var b = 10;
var Rdy = 4;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function drawSpike()
{
for(var i = 0; i<1000; i++)
{
    c.beginPath();
    c.fillStyle = 'red';
    c.moveTo(x,0);
    c.lineTo(y,60);
    c.lineTo(z,0);
    c.fill();    
    c.stroke();
    x += 120;
    y += 120;
    z += 120;
}
}
function drawBall(){
    c.beginPath();
    c.fillStyle = 'blue';
    c.arc(xB, yB, radius, 0, Math.PI*2, false);
    c.fill();
    c.stroke();
}
function drawPaddle(){
    c.beginPath();
    c.fillstyle = 'violet';
    c.rect(xR, yR, l, b);
    c.fill();
    c.stroke();
}
function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawSpike();
    animate();
}
draw();


