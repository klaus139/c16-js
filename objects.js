//objects are a type of data they are denoted a key - value pair
//OOP - Object Oriented Programming - tailored towards working with objects - JAVA, C#, Javascript

const person = {
    firstName:"Kelly",
    lastName:"Markes"
}

const userData = {
    name:"klaus dev",
    userName:"klaus112234",
    email:"klausjjj@gmail.com",
    bio:"i am a dev and im here to have fun",
    age:21
}

//DOT[.] annotation is used to get individual values inside an object

const userName = userData.email;
//console.log(userName)

const introText = `welcome ${userData.userName} back to the application`
//console.log(introText)

//console.log(userData)

//arrays are datatypes in sequence



const hobbies = ["cooking", "playing games", "watching football", "coding"] //array a list of data in a sequence
const data = [1, "yws", true, {}]
//console.log(data)
const skills = ['HTML', 'CSS', 'JavaScript', 'Python']

const index3 = skills[3]//p y t h o n
const index1 = index3[1]//y
//console.log(index1)

//console.log(skills[3][1])//in js we start counting from zero


const myBio = {
    name:"George",
    age:22,
    isMarried:false,
    hasGraduated:false,
    courseOfStudy:"Computer science",
    email:'gegor@gmail.com',
    userName:"gerii11",
    address:{
        street:"wellingon street",
        number:12,
        city:"lagos",
        state:"lagos",
        area:{
            zone1:"mainland",
            zone2:"island"
        }
    },
    skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'Node Js'
    ]

}

const myCourseOfStudy = myBio.courseOfStudy;
const myStreetName = myBio.address.area.zone1;

const introCourse = `hi, my name is ${myBio.name} and i am studying ${myCourseOfStudy}`
//console.log(introCourse)

// [] //array

// {} //object
const dataSet1 = [
    1,2,3,4,5, "yes", "no", "bye", {
    id:1,
    name:"iasdjdjdk"
},
]

const dataSet = [
    {
        _id:'12322',
        userName:"alex",
        email:"alex11@gmail.com",
        password:'1234344',
        createdAt:'08/01/2025 9.30am'
        
    },
     {
        _id:'1232222',
        userName:"fred",
        email:"afeed@gmail.com",
        password:'',
        createdAt:'08/01/2025 9.30am'
        
    },
     {
        _id:'12322982',
        userName:"mark",
        email:"mark11@gmail.com",
        password:'passwordmark',
        createdAt:'08/01/2025 9.30am'
        
    },
     {
        _id:'1232209082',
        userName:"joy",
        email:"joy11@gmail.com",
        password:'passwordjoy',
        createdAt:'08/01/2025 9.30am'
        
    },
     {
        _id:'12324442',
        userName:"mattew",
        email:"mattwe11@gmail.com",
        password:'1oasswordmattt',
        createdAt:'08/01/2025 9.30am'
        
    },
]
const firstData = dataSet[2]
console.log(firstData.password)



//Excercise1

//create an empty object called dog
//print the object in the console
//add name, legs, color, age and bark properties to the dog object
//add an object of vetinary histiry to the dog object
//add an array of favorite snacks to the object
//log out in a sentence the dog name and its favorite snack