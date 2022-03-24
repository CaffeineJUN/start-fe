/*
const element = document.getElementById('wrap');

console.log(element);

const element1 = document.querySelector('.item');

console.log(element1);
const elements =  document.querySelectorAll('div');

console.log(elements);

const div = document.createElement('div');
div.style.border="1px solid red";
div.innerHTML = "hello";

document.body.appendChild(div);


document.querySelector('#wrap').innerHTML = 1111;

window.onload = function (){
    console.log('hello onload')
}

window.addEventListener('load', function(){
    alert("load1");
});

window.addEventListener('load', function(){
    alert("load2");
});

*/

var clickCount = 0
function popup(event) {
    console.log(++clickCount)
    console.log(arguments, this, event, event.type, event.currentTarget)
}
document.body.addEventListener('click', popup)

document.body.addEventListener('click', function () {
    console.log('click')
})

var link = document.querySelector('a')
link.addEventListener('click', function (event) {
    window.open('www.daum.net')
    event.preventDefault()
})
