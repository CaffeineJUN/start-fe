var board = document.getElementById('board')
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        const span = document.createElement('span')
        if (i % 2 === 0) {
            j % 2 === 0 ? span.classList.add('black') : span.classList.add('white')
        } else {
            j % 2 === 0 ? span.classList.add('white') : span.classList.add('black')
        }
        board.appendChild(span)
    }
}

board.addEventListener('click', e => {
    const exist = document.querySelector('.clicked')
    if (exist) {
        exist.classList.remove('clicked')
    }

    e.target.classList.add('clicked')
})
