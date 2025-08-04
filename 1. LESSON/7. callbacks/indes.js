
function person(name, callbackFun) {
   console.log("hello world")
   callbackFun();

}

function address() {
   console.log("we are in india")
}
person("Mitro", address)


// callback hell
const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
   console.log(data)
})