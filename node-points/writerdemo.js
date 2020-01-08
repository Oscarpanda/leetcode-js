const fs = require('fs');
const file = fs.createWriteStream('./big.file');
for(let  i = 0;i<=1e7;i++) {
    const a = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n';

  
    // file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n');
}
file.end();