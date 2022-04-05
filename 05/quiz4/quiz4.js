const box = document.querySelector('#box')

box.ondragstart = function () {
    return false
}

function dragAndDrop(e) {
    let shiftX = e.clientX - box.getBoundingClientRect().left
    let shiftY = e.clientY - box.getBoundingClientRect().top

    box.style.position = 'absolute'
    box.style.zIndex = 1000
    document.body.append(box)

    move(e.pageX, e.pageY)

    function move(pageX, pageY) {
        box.style.left = pageX - shiftX + 'px'
        box.style.top = pageY - shiftY + 'px'
    }

    function onMouseMove(e) {
        move(e.pageX, e.pageY)
    }

    document.addEventListener('mousemove', onMouseMove)

    box.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove)
        box.onmouseup = null
    })
}

function init() {
    box.addEventListener('mousedown', dragAndDrop)
}

init()
