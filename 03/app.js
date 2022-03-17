// console.log('03')

// var isMan = true

// if(isMan){
//     console.log('test')
// }

// 객체는 참조 타입
var a = {x:1}
var b = a
b.x= 2/* 둘다 x:2로 변경 */

console.log(a,b)

// var count = [10,20,30,40,50,60,70,100]; 배열 count 요소들의 평균값 구하는 코드를 작성하세요 *
var count = [10,20,30,40,50,60,70,100]
var result = 0
count.forEach((e) => result += e)
console.log(`result :${result/count.length}`)    

// 구구단을 출력하는 코드를 for구문을 사용하여 작성하세요 
    // for (let i = 1; i < 10; i++) {
    //     for ( let j = 1; j<10; j++){
    //         console.log(`${i} * ${j} = ${i*j}`)
    //     }   
    // }

// 위에서 만든 구구단코드를 함수로 작성하세요 *

// function multiplication() {
//     for (let i = 1; i < 10; i++) {
//         for ( let j = 1; j<10; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }   
//     }
// }

// multiplication()

// 메소드가 포함된 객체를 생성하세요 *
var person = {
    name: 'jun',
    age: '27',
    gender: function(e){
        console.log(e)
        return (e === 1 ? console.log('male') : console.log('female'))
    }
}

person.gender(2)


//  window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요.
// let addNum = prompt('숫자를 두개 입력')
// const num1 = Number(addNum.split(' ')[0])
// const num2 = Number(addNum.split(' ')[1])
// console.log(num1 + num2)





