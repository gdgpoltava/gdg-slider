const fs = require('fs');
const path = require('path');

const dirname = path.join(process.cwd(), 'dist', 'gdg-slider');
const filenames = [
  'polyfills.js',
  'runtime.js',
  'scripts.js',
  'main.js',
];

let out = [];

filenames.forEach((filename) => {
  const filePath = path.join(dirname, filename);
  if (fs.existsSync(filePath)) {
    out.push(fs.readFileSync(filePath))
  }
});


fs.writeFileSync('gdg-slider.js', out.join('\n'));

