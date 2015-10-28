import {resolve} from 'path';
import glob from 'glob';

glob(resolve(`${process.cwd()}/src/**/*_test.js`), (err, files) => {
  if (err) {
    throw new Error(err);
  }
  files.forEach((file) => {
    require(resolve(file));
  });
});
