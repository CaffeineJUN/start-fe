const red_btn = document.querySelector('.add-red')
const add_btn = document.querySelector('.add-btn')
const del_btn = document.querySelector('.delete-btn')
const text_btn = document.querySelector('.text-btn')
const reset_btn = document.querySelector('.reset-btn')
const toggle_btn = document.querySelector('.toggle-btn')
const image_btn = document.querySelector('.image-btn')

// Q1
function addRed() {
    const box = document.querySelectorAll('body > .box')

    box.forEach(element => element.classList.add('red'))
}

// Q2
function addBox() {
    const div = document.createElement('div')

    div.classList.add('box')
    document.body.appendChild(div)
}

// Q3
function delBox() {
    const box = document.querySelectorAll('body > .box')

    box[box.length - 1].remove()
}

// Q4
function addText() {
    const text = document.querySelector('.txt')
    const box = document.querySelectorAll('body > .box')

    box.forEach(element => {
        if (element.textContent) return
        element.append(text.value)
    })
}

// Q5
function delAllBox() {
    const box = document.querySelectorAll('body > .box')

    box.forEach(element => element.remove())
}

// Q6
function hiddenBtn() {
    const box = document.querySelectorAll('body > .box')

    box.forEach(element => {
        element.style.visibility === 'hidden' ? (element.style.visibility = 'visible') : (element.style.visibility = 'hidden')
    })
}

// Q7
function addImg() {
    const box = document.querySelectorAll('body > .box')
    if (box.length === 0) addBox()

    box.forEach(element => {
        const exist = element.querySelector('img')
        if (exist) return

        const img = document.createElement('img')
        img.setAttribute('src', './star.png')
        img.setAttribute('width', '20px')

        element.appendChild(img)
    })
}

// Q8
function init() {
    red_btn.addEventListener('click', addRed)
    add_btn.addEventListener('click', addBox)
    del_btn.addEventListener('click', delBox)
    text_btn.addEventListener('click', addText)
    reset_btn.addEventListener('click', delAllBox)
    toggle_btn.addEventListener('click', hiddenBtn)
    image_btn.addEventListener('click', addImg)
}

init()
