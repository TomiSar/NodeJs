const fs = require('fs');

const files = ['./1-loop.js', './2-try.js', './zzz.js'];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file);
    console.log('File data is', data);
  } catch (err) {
    console.log('Something went wrong and we are going to ignore it');
  }
});