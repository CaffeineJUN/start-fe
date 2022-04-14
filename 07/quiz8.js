const box = document.querySelector('#box')
const btn = document.querySelector('#btn')
box.innerHTML = 0

function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function printRandomNum() {
    const minNum = Number(document.querySelector('#min').value)
    const maxNum = Number(document.querySelector('#max').value)

    let boxNum = Number(box.innerHTML)
    let rNum = randomNum(minNum, maxNum)
    console.log(rNum)

    const interval = setInterval(() => {
        btn.disabled = true

        if (boxNum === rNum) {
            btn.disabled = false
            clearInterval(interval)
        }

        box.innerHTML = boxNum
        boxNum >= rNum ? boxNum-- : boxNum++
    }, 50)
}

btn.addEventListener('click', printRandomNum)
