// here we define methods and then export

function add(a, b) {
   return a + b
}

function divide(a, b) {
   if (b === 0) {
      throw new Error('this is not allowed')
   }
   return a / b
}

module.exports = { add, divide }