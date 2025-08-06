// export and import

const firstModule = require('./first-module')

console.log(firstModule.divide(1, 2))

   // console.log(firstModule.divide(1,0))
   // here we can hanlde with trycatch block

//    node wrap the function with 
//    (
//       function (module, require, exports, __filename, __dir) {
//          my module willbe here 
//       }
//    )