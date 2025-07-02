const arr = ['fog','dog','man']//arrays are sequence of data but arrays are also objects

console.log(typeof arr)

//create a an array using a string
const js = "javascript";

const convertedString = js.split('')

let companies = 'facebook, google, microsoft, apple, amazon, github, oracle, bolt, uber, sling, slack' //11
const convertedCompanies = companies.split(',')

const firstCompany = convertedCompanies[1]
let lastCompany =  convertedCompanies.length -1; //11 //index of 10 this returns a number which is the index of the last item
lastCompany = convertedCompanies[lastCompany]//we are using that number as an argument of index to get the alast company

console.log(lastCompany)

let txt = "I write javascript and i want to build LLM using python as well"
const convertedTxt = txt.split(' ')

//you are given a text of games, write an algirithn to return the last games in the list of games in a list of items fetch the last item on the list.

const games = 'super-mario, mortal-kombat, fifa, god-of-war, harry-potter, mario-kart, assassins-creed, xena-warrior'
//write psuedocode
//list your steps
//log out your result
const convertedGame = games.split(',')//this retuens an arrays
console.log(convertedGame)

let lastGame = convertedGame.length -1;
lastGame = convertedGame[lastGame]
let result = lastGame 
if(result === lastGame){
    console.log('correct')
}else{
    console.log('incoorect')
}




//console.log(convertedTxt)