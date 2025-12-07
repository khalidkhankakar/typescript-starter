// 🔹 2. TYPE NARROWING
// Narrowing = checking the type before using it.

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); 
  } else {
    console.log(val.toFixed(2));
  }
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// in operator
type Bird = {
    fly:()=>{}
}

type Fish = {
    swim:()=>{}
}

function move(animal: Fish| Bird){
    if('swim' in animal){
        animal.swim()
    }
    else{
        animal.fly()
    }
}

// instanceof narrow
function logValue (x : Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toUpperCase())
    }
}
