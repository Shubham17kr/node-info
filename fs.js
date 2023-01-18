let fss=require('fs')
// console.log(fss)

let path=require('path')

// create file
let filepath=path.join(__dirname,"file.txt")
fss.writeFileSync(filepath,"hello i am a text file")

// read file
let content=fss.readFileSync(filepath,'utf-8')
console.log(content)

// update file
fss.appendFileSync(filepath,"\nnew statement")

// // // delete file
// // fss.unlinkSync(filepath)