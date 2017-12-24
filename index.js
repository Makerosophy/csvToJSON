// This is the path of the file we want to convert
const csvFilePath = 'customer-data.csv'
// These are the modules we need
const fs = require('fs')
const csv = require('csvtojson')
// We store data in the following array
let arr = []

csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    arr.push(jsonObj)
  })
  .on('done',(error)=>{
    if (error) return process.exit(1)
    fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('Conversion is done! Please check the .json file in the folder')
      process.exit(0)
    })
  }
)
