function getFetch(url, callback) {
    const headers = {
        Authorization: 'KakaoAK db9346a3b12fe76ef73a6e07d041312c',
    }

    fetch(url, {headers})
        .then(response => response.json())
        .then(data => callback(data))
}

// const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=#pageNum`
const $docs = document.querySelector('#docs')
const $query = document.querySelector('[name="query"]')
const $searchForm = document.querySelector('#searchForm')
const $veiwMoreBtn = document.querySelector('#veiwMoreBtn')
let pageNum = 1

function search(page) {
    const query = $query.value

    // const searchUrl = url.replace('#query', query)
    const searchUrl = `https://dapi.kakao.com/v2/search/web?query=${query}&page=${page}`

    getFetch(searchUrl, data => {
        const {documents} = data
        const docs = documents.map(document => {
            return document.contents
        })

        $docs.innerHTML += docs.join('<hr/>')
    })
}

function init() {
    if ($docs.innerHTML === '') {
        $veiwMoreBtn.style.visibility = 'hidden'
    }

    $searchForm.addEventListener('submit', e => {
        e.preventDefault()
        $docs.innerHTML = ''
        pageNum = 1
        search(pageNum)
        $veiwMoreBtn.style.visibility = 'visible'
    })

    $veiwMoreBtn.addEventListener('click', e => {
        e.preventDefault()
        $docs.innerHTML += `<hr/>`
        pageNum += 1
        search(pageNum)
    })
}

init()
