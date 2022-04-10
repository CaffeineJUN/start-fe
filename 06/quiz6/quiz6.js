const printBtn = document.querySelector('#btn')

function GuGuDan() {
    const result = document.querySelector('#result')
    const ul = document.createElement('ul')

    result.innerHTML = ''
    result.appendChild(ul)

    const num = document.querySelector('#num').value

    if (isNaN(parseInt(num))) {
        alert('숫자를 입력하세요')
        return
    }

    for (i = 1; i < 10; i++) {
        const li = document.createElement('li')

        const textNode = document.createTextNode(`${num} x ${i} = ${num * i}`)
        li.appendChild(textNode)

        li.style.listStyle = 'none'
        ul.appendChild(li)
    }
}

function printGuGuDan(element) {
    element.addEventListener('click', GuGuDan)
}

printGuGuDan(printBtn)
