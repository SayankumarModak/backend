const fs = require('fs');
const path = require('path')

const datafolder = path.join(__dirname, "data");
// console.log(datafolder)

// folder create
if (!fs.existsSync(datafolder)) {
   fs.mkdirSync(datafolder);
   console.log("folder created")
}

const filePath = path.join(datafolder, "example.txt");
// sync way to add file
fs.writeFileSync(filePath, "hellow form nodejs")
console.log("file created")

const readFileContentFromFile = fs.readFileSync(filePath, "utf-8")
console.log("filecontent:", readFileContentFromFile)

fs.appendFileSync(filePath, "\nthis is the new line added")
console.log("new file addeed")












// async way to do that ..to createfile
const asyncFilePath = path.join(datafolder, "asyncfile.txt");
fs.writeFile(asyncFilePath, "hello world", (err) => {
   if (err) throw err;
   console.log("async file is created")
   fs.readFile(asyncFilePath, "utf-8", (err, data) => {
      console.log("the data is:", data)
   })
   // to updated
   fs.appendFile(asyncFilePath, "\nthis is the new line", (err) => {
      console.log(err)
      fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
         console.log("updated file is:", updatedData)
      })
   })
})
