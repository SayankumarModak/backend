const wrapperExplorer = require('./wrapper-explorer')
// this will first call the wrappe-module as the wrapper module example

console.log("inside the wrapper demo")

console.log("the file name is inside the wrapper demp", __filename)
console.log("the dir name is inside the wrapper demo ", __dirname)

wrapperExplorer.greet('Mitro')