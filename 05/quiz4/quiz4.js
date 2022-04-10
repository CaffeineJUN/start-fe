const box = document.querySelector('#box')

function dragAndDrop(e) {
    const dragBox = e.currentTarget

    let posX = e.clientX - dragBox.getBoundingClientRect().left
    let posY = e.clientY - dragBox.getBoundingClientRect().top

    function boxMove(e) {
        dragBox.style.left = e.clientX - posX + 'px'
        dragBox.style.top = e.clientY - posY + 'px'
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
