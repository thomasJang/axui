import * as path from 'path';
import * as fs from 'fs-extra';
import chalk from 'chalk';
const srcPath = '../styles/theme.ts';
const srcResoloved = path.resolve(__dirname, srcPath);
const targetLess = path.resolve(__dirname, '../styles/theme-vars.less');

const buildLessVar = () => {
  delete require.cache[srcResoloved];
  const theme = require(srcPath);
  fs.writeFileSync(
    targetLess,
    Object.keys(theme.default)
      .map(k => `@${k.replace(/_/g, '-')}: ${theme.default[k]};`)
      .join('\r\n'),
  );
};

// watch file theme.js to less-var
fs.watchFile(srcResoloved, { interval: 1000 }, (event, filename) => {
  try {
    buildLessVar();
    console.log(chalk.red('update LESS file : ') + targetLess);
  } catch (e) {
    console.log(chalk.bgRed(e));
  }
});
console.log(chalk.yellow.bold(`Watching theme files : `) + srcResoloved);

// build less vars
buildLessVar();
