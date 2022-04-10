// 0~380 Math.random() * 381
const box = document.querySelector('.box')
const bug = document.querySelector('#bug')
const point = document.querySelector('#point')
const life = document.querySelector('#life')
bug.style.visibility = 'hidden'

function gameStart() {
    bug.style.visibility = 'visible'

    const interval = setInterval(() => {
        bug.style.top = Math.random() * 381 + 'px'
        bug.style.left = Math.random() * 381 + 'px'
    }, 1000)

    function score(e) {
        e.target !== e.currentTarget ? point.innerHTML++ : life.innerHTML--
        if (life.innerHTML === '0') {
            alert('gameover')
            point.innerHTML = 0
            life.innerHTML = 10
        }
    }

    box.addEventListener('click', score)
}

function init() {
    gameStart()
}

init()
