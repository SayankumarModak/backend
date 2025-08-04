console.log("node module wrapper demo")

console.log("the file name is", __filename)
console.log("the dir name is", __dirname)

module.exports.greet = function (name) {
   console.log(`hello ${name}`)
}