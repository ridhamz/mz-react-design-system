const fs = require('fs');

const path = require('path');

const sass = require('sass');

const result = sass.renderSync({
  data: fs.readFileSync(path.resolve('src/global.scss')).toString(),
  outputStyle: 'expanded',
  outFile: 'global.css',
  includePath: [path.resolve('src')],
});

fs.writeFileSync(path.resolve('src/lib/global.css'), result.css.toString());
