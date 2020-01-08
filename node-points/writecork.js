const fs = require('fs');
const stream = fs.createWriteStream('./big.file');
stream.cork();
stream.write('hello ');
stream.write('world ');
stream.uncork();