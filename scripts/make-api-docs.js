'use strict';
var markdox = require('markdox');

function generateDocs(options) {
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

generateDocs({
  src: [
    './src/molecule-input/index.js',
    './src/molecule-input-container/index.js',
    './src/molecule-input-error/index.js',
    './src/molecule-textarea/index.js'
  ],
  output: './docs/api.md',
  template: './scripts/cyclic-docs-template.md.ejs'
});
