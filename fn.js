// var focus = document.querySelector('.focus');

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var slide = document.querySelector('.slide');
var dot = document.querySelectorAll('.dot');

var index = 0;
var time;

function position() {
    slide.style.left = (index * - 100) + "%"
}

function add() {
    if (index >= dot.length - 1) {
        index = 0
    } else {
        index++;
    }
}

function desc() {
    if (index < 1) {
        index = dot.length - 1
    } else {
        index--;
    }
}

function timer() {
    time = setInterval(() => {
        index++;
        desc();
        add();
        position();
    }, 3000)
}

prev.addEventListener('click', () => {
    desc();
    position();
    clearInterval(time);
    timer();
})

next.addEventListener('click', () => {
    add();
    position();
    clearInterval(time);
    timer();
})

for (var i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', () => {
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}

timer() 

var sticky = document.querySelector ('.sticky');

window.addEventListener('mousemove', function(){
    sticky.style.display = "block";
})

