// ------------------------------
// 🔹 Basic Types
// ------------------------------

// Prefer primitive types: string, number, boolean (NOT String, Number, Boolean)
let username: string = "JohnDoe";
let userAge: number = 30;
let isAdmin: boolean = true;
let number: bigint = BigInt(100)

// Array types
let userScores: number[] = [85, 90, 78];

// Tuple: fixed-length & fixed-type array
let userRoles: [string, number] = ["admin", 1];

// Object type annotation
let person: {
  name: string;
  age: number;
} = {
  name: "Jane Doe",
  age: 25,
};

// ------------------------------
// 🔹 Function with Typed Parameters & Return Type
// ------------------------------

/**
 * Greets a user by name
 */
function greetUser(name: string): string {
  return `Hello, ${name}!`;
}

// ------------------------------
// 🔹 never Type Example
// ------------------------------

/**
 * A function that never returns (throws an error)
 */
function throwError(message: string): never {
  throw new Error(message);
}

// ------------------------------
// 🔹 Type Alias and Interface
// ------------------------------

// Union type alias
type UserID = string | number;

// Interface for a user
interface User {
  id: UserID;
  name: string;
  age: number;
}

/**
 * Important Difference:
 * - type: cannot be merged or reopened, but supports union/intersection.
 * - interface: can be merged and extended multiple times.
 */

// ------------------------------
// 🔹 Interface Merging Example
// ------------------------------

interface Car {
  name: string;
}

// Merged with previous Car interface
interface Car {
  model: number;
}

// Interface extending another interface
interface Bike extends Car {
  year: number;
}

let myCar: Car = {
  name: "Toyota",
  model: 2021,
};

let myBike: Bike = {
  name: "Yamaha",
  model: 2020,
  year: 2021,
};

// ------------------------------
// 🔹 Discriminated Union + Type Guard
// ------------------------------

type Fish = { type: "fish"; swim: () => void };
type Bird = { type: "bird"; fly: () => void };

/**
 * Custom type guard to check if the given pet is a Fish
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return pet.type === "fish";
}

let pet: Fish | Bird = { type: "fish", swim() { } };

if (isFish(pet)) {
  // TypeScript now knows `pet` is Fish
  pet.swim();
}

// ------------------------------
// 🔹 Union Types with Narrowing
// ------------------------------

/**
 * Accepts either a string or array of strings
 * and handles each appropriately.
 */
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
