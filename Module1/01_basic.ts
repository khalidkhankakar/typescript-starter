// Basic Types 
let usersame:String = "JohnDoe";
let userage:Number = 30;
let isAdmin:Boolean = true;

let userScores:Array<Number> = [85, 90, 78];
let userRoles:[String, Number] = ['admin', 1];

let person: {
    name:String,
    age:Number
} = {
    name: "Jane Doe",
    age: 25
}

// Function with typed parameters and return type
function greetUser(name:String):String{
    return `Hello, ${name}!`;
}

// never: 
function throwError(message: string): never {
    throw new Error(message);
}

// Type Alias and Type Interface


type UserID = String | Number;
interface User {
    id: UserID;
    name: String;
    age: Number;
}


// type: can't be merged and can't be reopened to add new properties, but can create unions
// interface: can be merged and extends multiple times


interface Car {
    name:String;

}
interface Car {
    model:Number;
}

interface Bike extends Car {
    year:Number;
}

let myCar: Car = {
    name: "Toyota",
    model: 2021
}

let myBike: Bike = {
    name: "Yamaha",
    model: 2020,
    year: 2021
}

type Fish = { type: "fish"; swim: () => void };
type Bird = { type: "bird"; fly: () => void };


function isFish(pet: Fish | Bird): pet is Fish {
  return pet.type === "fish";
}

let pet: Fish | Bird = { type: "fish", swim() {} };

if (isFish(pet)) {
  pet.swim(); // OK
}

function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler " + x);
    }
}