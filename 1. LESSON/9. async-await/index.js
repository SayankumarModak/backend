function delayFun(time) {
   return new Promise((resolve) => setTimeout(resolve, time))
}

async function delayedGreet(name) {
   await delayFun(2000);
   console.log("name is:", name)
}

// delayedGreet("mitro")

// here using async function
async function division(a, b) {
   try {
      if (b === 0) {
         throw new Error("cannot do this")
      }
      return a / b;
   } catch (error) {
      console.log(error)
      return null;
   }
}

async function mainFun() {
   console.log(division(1, 0));
   console.log(division(19, 8))
}
mainFun();