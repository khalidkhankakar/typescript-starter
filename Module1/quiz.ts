// What is difference b/w any and unknown
// any:	Turns off TypeScript completely → you can do anything with it.
// unknown:	More safe. You must check the type before using it
let a: any = 10;
// a.toUpperCase(); // allowed, NO ERROR (dangerous)

let b: unknown = "hello";
// b.toUpperCase(); // ❌ Error — must check before using


// 2) What does never mean?
// never is a type for functions that never return:
// functions that always throw errors
// infinite loops
function crash(): never {
    throw new Error('Boom!')
}

// 3) Make a tuple for: username (string) and age (number)
const user: [string, number] = ['Khalid', 21]

// 4) Write an interface for product: {id: number, title: string, price: number}
interface Product {
    id: number,
    title: string,
    price: number
}

// 5) Write a function that takes 2 numbers and returns their multiplication.
function multiplication(a: number, b: number): number {
    return a * b;
}