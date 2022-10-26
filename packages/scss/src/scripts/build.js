const fs = require('fs');

const path = require('path');

const sass = require('sass');

const getComponents = () => {
  let allComponents = [];
  const types = ['atoms', 'molecules', 'organisms'];

  types.map((t) => {
    const allFiles = fs.readdirSync(`src/${t}`).map((file) => ({
      input: `src/${t}/${file}`,
      output: `lib/${file.slice(0, -4)}css`,
    }));

    allComponents.push(...allFiles);
  });

  return allComponents;
};

// compile scss file to css file
const compile = (pathName, fileName) => {
  const result = sass.renderSync({
    data: fs.readFileSync(pathName).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePath: [path.resolve('src')],
  });

  fs.writeFileSync(fileName, result.css.toString());
};

compile('src/global.scss', 'lib/global.css');

getComponents().map((c) => {
  compile(c.input, c.output);
});
