function delayFn(time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("before")
delayFn(2000).then(() => console.log("after 2 second"));
console.log("after")

function divide(a, b) {
   return new Promise((resolve, reject) => {
      if (b === 0) {
         reject("the number is zero")
      } else {
         resolve(a / b)
      }
   })
}

divide(10, 0).then((res) => console.log("result is:", res)).catch((error) => console.log("the errors is", error))