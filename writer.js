const fs = require('fs');
const file = fs.createWriteStream('./big.file');
let timestart = new Date();
function writeBigfile(times) {
  while (times > 0 && file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n')) {
    times--
  }
  if (times  > 0) {
    file.once("drain", () => {
      writeBigfile(times--)
    })
  } else {

    file.end();
    console.log(new Date() - timestart);
  }
}
writeBigfile(1e6);
