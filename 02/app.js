/*
2주차 실습

*/
var name = 'hj hello'
console.log(name)

var isMan1 = true
var isMan2 = 'true'

console.log(isMan1)
console.log(isMan2)

function log(str){
    console.log(str)
}

log('hello')

// 객체
var img = {}
img.width = 1
img.height = 2
console.log(img)

// 배열
let arr = [1,2]
arr.push(1)
arr.push(13)
console.log(arr)

// 연산자
console.log(1+1)
console.log(name + 10)

let me = {
    age: 11,
    name: 'hj',
    isMan: true,
    sayHello: function(){
        console.log('method hello')
    }
}

me.sayHello()


