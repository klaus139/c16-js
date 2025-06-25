//statements used to make decisions based on certain conditions
//syntax
// if(condition){
//     //do something
// }else{
//     //do somethng else
// }

let num = -3;



if(num > 0){
    console.log(`${num} is a positive number`)
}else if(num === 0){
    console.log("number is zero")
}else{
    console.log(`${num} is a negative number`)
}



let isRaining = false;

if(isRaining){
    console.log("it is raining outside please get an umbrella")
}else{
    console.log("it is a sunny day, enjoy the weather")
}

let password = 12345678;
if(password.length < 6){
    console.log("please ensure password is above 6 digits")
}else{
    console.log("Password entered successfully")
}




//weather app
let weather;

if(weather === 'rainy'){
    console.log("it is raining outside please get a raincoat or umbrella")
}else if(weather === 'cloudy'){
    console.log("It might be cold outside, you need a jacket")
}else if(weather === 'sunny'){
    console.log("go out freely but dont get sun burnt")
}else{
    console.log("enjoy the weather")
}


//comparison operators
console.log(3 > 2)
console.log(2 < 3)

console.log(3 >= 2)























