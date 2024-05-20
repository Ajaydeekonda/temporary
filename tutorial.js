//1.globals

// console.log(__dirname)
// console.log(require)
// console.log(process.moduleLoadList)
// console.log(module)

//2.Modules

// const os = require('os')

// console.log(os.userInfo())

// console.log(os.uptime())
// console.log(os.release())
// console.log(os.freemem())

//3.path Module

// const path = require('path')
// console.log(path.join(__dirname,'Ajay'))

// console.log(path.dirname(path.join(__dirname,'Ajay')))


//4. fs Module Sync

// const {readFileSync,writeFileSync} = require('fs')
// const path = require('path')
// //reading a file

// const data = readFileSync(path.join(__dirname,'text.txt'),'utf-8')
// console.log(data)
// const fs = require('fs')

// //removing a file
// if(fs.existsSync("./write.txt"))
//     {
//         fs.unlink('./write.txt', (err) => {
//             if (err) {
//               console.error('Error removing file:', err);
//               return;
//             }
//             console.log('File removed successfully');
//           });
//     }
// else{
//     writeFileSync('./write.txt',data) //writing a file synchronously
// }


//5. fs module async

// const {readFile,writeFile, read} = require('fs')

// readFile('./text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data)
// })

//6.HTTP  module

const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req,res)=>{
   if(req.url === '/')
    {
        res.end('Welcome to our Home Page')
        return
    }
    if(req.url ==='/about')
    {
        res.end('This is about page')
        return
    }
    res.end()
})

server.listen(5000)

