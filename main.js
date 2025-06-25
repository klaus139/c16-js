//string is any data inside a quote '',"", ``

const myFavoriteMovie = "Harry Potter"

let myFavoriteMeal = "Rice and stew"
console.log("my previous favorite meal is ", myFavoriteMeal)

myFavoriteMeal = "Tea and bread"

//let allows you to change the data while const doesnt allow you change data
 console.log("my new favorite meal is ", myFavoriteMeal)
 console.log(myFavoriteMovie)

const userName = "Harry"

const welcomeMessage = `Hello ${userName} welcome to the app`

console.log(welcomeMessage)


const firstName = "johnson"

const lastName = "Olatunji"

const middleName = "daniels"

const fullName = firstName + " " + middleName + " " + lastName

const realFullName = `${firstName} ${middleName} ${lastName}`

const bio = `Hi, my name is ${realFullName} and i live in
Lagos, Nigeria. I am a developer and my favorite movie is ${myFavoriteMovie}`

console.log(bio)



const petName = "Bingo"

const myPetTrio = `i have a dog and its name is ${petName}` // we call this back-ticks or template literals ``
console.log(myPetTrio)

const a = "10"

const b = 2

const c = a / b //loopholes of javascript


//string manipulation 

const myword = "Mathematicallly uplifted"

const mywork = "backend dev"

const email = "yayayaya@gmail.com"

//casing uppercase and lowercase

console.log(myword.length)//to show th length

console.log(myword.toUpperCase())//to convert to uppercase

console.log(myword.toLowerCase())

//character At this has to do with index 0 123456789
console.log(myword[4])

console.log(myword.charAt(0))// this helps you find an item using the index

console.log(myword.indexOf('p'))//this helps you fiund the index of an item using the letter or word

console.log(myword.slice(5, 9))

console.log(email.includes('@'))

