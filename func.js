//DRY - Dont Repeat Yourself
//a function is a reusable block of code or programming statement designed to perfome a certain task.
//functions can be declared using two methods...function keyword and the arrow function method

//function keyword 
//parameters they are like arguments in a function

function sayName(name){
    return `My name is ${name}`
}

console.log(sayName("klaus"))

console.log(sayName("George"))

console.log(sayName("Patricia"));


//arrow function method
const callName = () => {
    return "call my name"
}

// console.log(callName())

//lets create a function thats adds two numbers without a parameter
const addTwoNums = (x,y)=>{
    let sum = x + y;
    return sum
}

console.log(addTwoNums(5,3))

function printFullName(firstName, lastName){
   
    let fullName = firstName + " " + lastName
    return fullName
}

console.log(printFullName("klaus", "kllldlkskdshj"))

function checkScores(team1, team2, score){
    return `the teams playing are ${team1} and ${team2} and the score is ${score}`
}

console.log(checkScores("arsenal", "Barcelona", "2-2"))

//write a function that multiplies two numbers

function addTwoNumbers(num1, num2){
    return num1.toUpperCase()
}

console.log(addTwoNumbers(2,9))

function whatIAteForBreakfast(food){
    return `i ate ${food} for breakfast`
}

console.log(whatIAteForBreakfast("tea and bread"))



const checkLiveScore = ()=>{
    return "the scofe is ok"
}


//declare a function using the function key that returns your fullname
//write a function that returns the square of a number
//write a function using the arrow function that converts a string to uppercase

let food = 'rice and nbeans'

let bigGood = food.toUpperCase()

console.log(bigGood)
