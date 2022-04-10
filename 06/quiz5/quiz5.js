const boxAll = document.querySelectorAll('.box')
const box = document.querySelector('.box')
const box1 = document.querySelector('.box.box1')

function dragAndDrop(e) {
    const dragBox = e.currentTarget

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

function mousedown(element) {
    element.addEventListener('mousedown', dragAndDrop)
}

function init() {
    // boxAll.forEach(e => mousedown(e))
    mousedown(box)
    mousedown(box1)
}

init()
