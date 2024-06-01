const fs = require('fs');
fs.readFile('demo.txt','utf-8', (err, txt)=>{
    console.log(txt)
 });

//demo.txt is a text file
