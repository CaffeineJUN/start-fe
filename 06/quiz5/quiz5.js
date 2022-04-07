const box = document.querySelectorAll('.box')

function dragAndDrop(e) {
    const dragBox = e.currentTarget

    dragBox.style.position = 'absolute'
    document.body.append(dragBox)

    let shiftX = e.clientX - dragBox.getBoundingClientRect().left
    let shiftY = e.clientY - dragBox.getBoundingClientRect().top

    function boxMove(e) {
        dragBox.style.left = e.pageX - shiftX + 'px'
        dragBox.style.top = e.pageY - shiftY + 'px'
    }

    boxMove(e)

    document.addEventListener('mousemove', boxMove)

    dragBox.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', boxMove)
        dragBox.onmouseup = null
    })
}

function init() {
    box.forEach(e => e.addEventListener('mousedown', dragAndDrop))
}

init()