const box = document.querySelector('#box')

function dragAndDrop(e) {
    const dragBox = e.currentTarget

    dragBox.style.position = 'absolute'
    document.body.append(dragBox)

    let posX = e.clientX - dragBox.getBoundingClientRect().left
    let posY = e.clientY - dragBox.getBoundingClientRect().top

    function boxMove(e) {
        dragBox.style.left = e.pageX - posX + 'px'
        dragBox.style.top = e.pageY - posY + 'px'
    }

    boxMove(e)

    document.addEventListener('mousemove', boxMove)

    dragBox.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', boxMove)
    })
}

function init() {
    box.addEventListener('mousedown', dragAndDrop)
}

init()
