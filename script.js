let currentColor = 'black'

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let drawing = false;
let mouseX = 0;
let mouseY = 0;
document.getElementById("tamanho").value = 0;

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent)});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

// DESIGNAR A COR UTILIZADA
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
//MUDAR A CLASS PARA O BOTÃO SELECIONADO
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active')
};

function mouseDownEvent(e) {
    drawing = true
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
};

function mouseMoveEvent(e) {
    if(drawing) {
        draw(e.pageX, e.pageY);
    }
};

function mouseUpEvent(e) {
    drawing = false
};

function draw(x, y) {
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    ctx.beginPath();
    let tamanhoLetra = document.getElementById("tamanho").value;
    ctx.lineWidth = tamanhoLetra;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY)
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function aumentaTamanhoDiminui(valor) {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    document.getElementById("tamanho").value = tamanho + valor;
    
}
