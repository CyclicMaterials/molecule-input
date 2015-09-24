# molecule-input

> A Material Design text field.

## Installation

```shell
$ npm install @cyclic/molecule-input
```

## Examples

The examples assume basic knowledge of CycleJS.

```js
var input = Input({DOM, props$: Rx.Observable.just({
  label: `Input label`,
)});
```

This will render an input with the label "Input label".

For more examples, see the demo source code.

### Demo

Clone the repository and run from the command line:

```shell
$ npm start
```

Then open `demo/index.html` in your browser.

You can also see a [live demo here]. However, it is not updated as frequently 
as the repository.

## License

MIT © [Cyclic Materials](http://github.com/CyclicMaterials)

[live demo here]: http://dev.glaciersoft.com/cyclic/molecule-input/
