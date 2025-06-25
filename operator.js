//comparison
console.log(3 > 2)

console.log(2 < 3)

console.log(2 >= 2)

console.log(3 <= 2)

console.log(3 == 2) //flase because 3 is not equal to 2
console.log(3 != 2)//true because 3 is not equal to 2

console.log(3 == '3') //true because we are comparing only the value//doubles only compare value, triple compare both value and type
console.log(3 === '3')///false 3 is not the same as '3' one is a number one is a string


let savedPin = 1234

let inputPin = '123'

if(inputPin.length < 4){
    console.log("pin is too short")
}

console.log(savedPin === inputPin)

