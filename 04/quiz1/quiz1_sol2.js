var todayPhoto = [
    {
        url: 'http://media.daum.net/photo/2841',
        img: 'http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg',
        title: '&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마',
        id: '20120516082207657',
    },
    {
        url: 'http://media.daum.net/entertain/photo/gallery/?gid=100320',
        img: 'http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg',
        title: '&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸',
        id: '20120516091011626',
    },
    {
        url: 'http://media.daum.net/photo/4010',
        img: 'http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg',
        title: '[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;',
        id: '20120516092605081',
    },
    {
        url: 'http://sports.media.daum.net/general/gallery/gagsports/index.html',
        img: 'http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg',
        title: '&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방',
        id: '20120516100608409',
    },
    {
        url: 'http://sports.media.daum.net/general/gallery/0516ufc/index.html',
        img: 'http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg',
        title: '양동이의 하이킥에 타바레스 &#39;주춤&#39;',
        id: '20120516093313331',
    },
    {
        url: 'http://media.daum.net/entertain/photo/gallery/?gid=100539',
        img: 'http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg',
        title: '이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;',
        id: '20120516093918544',
    },
    {
        url: 'http://media.daum.net/photo/3899',
        img: 'http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg',
        title: '생후 6개월에 프랑스로 입양됐던 아이가..',
        id: '20120516030614331',
    },
    {
        url: 'http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html',
        img: 'http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg',
        title: '&#39;교생&#39; 김연아, 스승의날에도 인기폭발',
        id: '20120516092003892',
    },
]

var wrap = document.getElementById('wrap')
const img_div = document.createElement('div')
const btn_div = document.createElement('div')
const left_btn = document.createElement('button')
const span = document.createElement('span')
const right_btn = document.createElement('button')

let count = 1
left_btn.innerHTML = '<'
span.innerHTML = ` ${count} /  ${todayPhoto.length - 2}`
right_btn.innerHTML = '>'

wrap.appendChild(img_div)
wrap.appendChild(btn_div)

btn_div.appendChild(left_btn)
btn_div.appendChild(span)
btn_div.appendChild(right_btn)

function showImg(count) {
    span.innerHTML = ` ${count} /  ${todayPhoto.length - 2}`
    count === 1 ? (left_btn.style.visibility = 'hidden') : (left_btn.style.visibility = 'visible')
    count === todayPhoto.length - 2 ? (right_btn.style.visibility = 'hidden') : (right_btn.style.visibility = 'visible')

    img_div.innerHTML = ''
    const result = todayPhoto.filter((e, index) => index >= count - 1 && index <= count + 1)

    result.forEach(e => {
        img_div.innerHTML += `<img src="${e.img}"> `
    })
}

showImg(count)

left_btn.addEventListener('click', e => {
    count--
    showImg(count)
})

right_btn.addEventListener('click', e => {
    count++
    showImg(count)
})
