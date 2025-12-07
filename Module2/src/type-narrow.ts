// 🔹 2. TYPE NARROWING
// Narrowing = checking the type before using it.

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); 
  } else {
    console.log(val.toFixed(2));
  }
}

