// 0~380 Math.random() * 381
const box = document.querySelector('.box')
const bug = document.querySelector('#bug')
const point = document.querySelector('#point')
const life = document.querySelector('#life')

function gameStart() {
    const randomPos = () => {
        bug.style.top = Math.random() * 381 + 'px'
        bug.style.left = Math.random() * 381 + 'px'
    }
    const interval = setInterval(randomPos, 2000)

    function score(e) {
        e.target !== e.currentTarget ? point.innerHTML++ : life.innerHTML--

        if (life.innerHTML === '0') {
            alert('gameover')
            point.innerHTML = 0
            life.innerHTML = 10

            clearInterval(interval)
            const interval = setInterval(randomPos, 2000)
        }
    }

    box.addEventListener('click', score)
}

function init() {
    gameStart()
}

init()
