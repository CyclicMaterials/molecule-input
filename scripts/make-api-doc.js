/* eslint-disable */

'use strict';
var markdox = require('markdox');

function generateDoc(options) {
  markdox.process(
    options.src,
    {output: options.output, template: options.template},
    function generationCallback(err/*, output */) {
      if (err) {
        console.error(err);
      } else {
        console.log('File `' + options.output + '` generated with success');
      }
    }
  );
}

generateDoc({
  src: [
    './src/index.js',
  ],
  output: './doc/api.md',
  template: './scripts/cyclic-docs-template.md.ejs'
});
