import avg from './avg.js'
import random from './random.js'

const avg1 = avg(1, 2, 3)
const avg2 = avg(1, 2, 3, 5, 6)
const avg3 = avg(1, 'a', 3)
const avg4 = avg([1, 2, 3])

console.log(avg1)
console.log(avg2)
console.log(avg3)
console.log(avg4)

const num1 = random(1, 5)
const num2 = random(5)
const num3 = random(1, 'a')

console.log(num1)
console.log(num2)
console.log(num3)
