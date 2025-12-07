// Generics
// The Generics works with vairety of types rather than single one.
function identity<Type>(arg: Type):Type {
    return arg;
}

// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number, string etc.), so that we can use that information later. Now we can call identity with any type we want.

let output = identity<string>('Khalid'); // Here output type is string