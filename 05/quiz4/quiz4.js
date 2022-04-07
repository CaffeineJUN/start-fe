const box = document.querySelector('#box')

function dragAndDrop(e) {
    const dragBox = e.currentTarget

    let shiftX = e.clientX - dragBox.getBoundingClientRect().left
    let shiftY = e.clientY - dragBox.getBoundingClientRect().top

    dragBox.style.position = 'absolute'
    document.body.append(dragBox)

    boxMove(e)

    function boxMove(e) {
        dragBox.style.left = e.pageX - shiftX + 'px'
        dragBox.style.top = e.pageY - shiftY + 'px'
    }

    document.addEventListener('mousemove', boxMove)

    dragBox.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', boxMove)
        dragBox.onmouseup = null
    })
}

function init() {
    box.addEventListener('mousedown', dragAndDrop)
}

init()
