// Generics
// The Generics works with vairety of types rather than single one.
function identity<Type>(arg: Type):Type {
    return arg;
}

// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number, string etc.), so that we can use that information later. Now we can call identity with any type we want.

let output = identity<string>('Khalid'); // Here output type is string

type MyGeneric<TData> = {
    data: TData;
}

type Example1 = MyGeneric<{firstName:string, lastName:string}>
type Example2 = MyGeneric<number>

const myGeneric: MyGeneric<string> = {
    data: 'Khalid'
}


// Create the function with type helper
// mapped over the top and pass the type to them
const fetchUser = <TData>(url :string):Promise<TData> => {
    return fetch(url).then(res => res.json())
}

fetchUser<Example1>('https://jsonplaceholder.typicode.com/users/1').then(user => console.log(user))

// TIP 3
// You can pass these types parameter to 
// other parts of JS, like Set and Map

const s = new Set<string>()
s.add('Khalid')

// TIP 4
// You don't always have to pass the type to generic

const addIdToObject = <T>(obj: T): T & { id :string} => {
    return {
        ...obj,
        id: Math.random().toString(36)
    }
}

addIdToObject({name: 'Khalid'})

// TIP 5
// extends means only certains you can pass
type GetPromiseReturnType<T extends (...args: any)=> any> = Awaited<ReturnType<T>>

type Result = GetPromiseReturnType<
    () => Promise<{name: string}>
>
