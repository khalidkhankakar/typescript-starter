// 🔹 1. UNION TYPES
let value: string | number;

value = "I AM UNION"
value = 10

function handleChange(value: string | number): string | number {
    if (typeof value == 'string') {
        return value += '@gmail.com'
    }
    return value *= 10
}

console.log(handleChange('khalidkakar'))

type Role = 'USER' | 'ADMIN' | 'SUPER ADMIN'


// Disciminating Unions

type NetworkLoadingState = {
    state: "Loading"
}

type NetworkFailedState = {
    state: "Failed",
    code: number
}

type NetworkSuccessState = {
    state: 'Success',
    response: {
        title: string,
        description: string,
    },
    code: number
}

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState

type Person = {
    name: string
}

type Teacher = {
    subject: string
}

// Intersection Type:- Combines the multiple types into one.
const newPerson: Person & Teacher = {
    name: 'Khalid',
    subject: 'TypeScript'
}


