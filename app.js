//console.log("hello node"
//console.log(global)
//setInterval(()=>console.log("hello world"),1000)

const fs=require("fs")
//console.log(fs)

// Sync
/*console.log("starting ...")
const data=fs.readFileSync("./test.html",{encoding:"utf8"})
console.log(data)
console.log("finishing ...")*/

//async

/*console.log("starting ...")
fs.readFile("./test.txt",{encoding:"utf8"},(err,data)=>{
    err?console.log(err):console.log(data)
})
console.log("finishing ...")*/
//console.log(__filename)
//console.log(__dirname)

/*const os=require("os")
console.log(os.totalmem())
console.log(os.arch())*/

const users=require("./dataDir/data.js")
const local=require('./dataDir/localModule')
console.log(local.searchName(users,"Anouar"))
//console.log(local)
//console.log(users)