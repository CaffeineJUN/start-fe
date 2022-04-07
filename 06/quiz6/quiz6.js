const printBtn = document.querySelector('#btn')

function GuGuDan() {
    const result = document.querySelector('#result')
    const ul = document.createElement('ul')

    result.innerHTML = ''
    result.appendChild(ul)

    const num = document.querySelector('#num').value

    if (!Number(num)) {
        alert('숫자 입력')
        return false
    }

    for (i = 1; i < 10; i++) {
        const li = document.createElement('li')
        li.innerHTML = `${num} x ${i} = ${num * i}`
        li.style.listStyle = 'none'
        ul.appendChild(li)
    }
}

printBtn.addEventListener('click', GuGuDan)
