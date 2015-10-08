# molecule-input

> A Material Design text field.

## Installation

[![npm version](https://badge.fury.io/js/%40cyclic%2Fmolecule-input.svg)](http://badge.fury.io/js/%40cyclic%2Fmolecule-input)

```shell
$ npm install @cyclic/molecule-input
```

## Examples

The examples assume basic knowledge of [CycleJS].

```js
var input = Input({DOM, props$: Rx.Observable.just({
  label: `Input label`,
)});
```

This will render an input with the label "Input label".

For more examples, see the demo source code, and make sure to check out 
the [API documentation].

### Demo

Clone the repository and run from the command line:

```shell
$ npm start
```

Then open *demo/index.html* in your browser.

You can also see a [live demo here].

### Usage

After you have installed the package, you can start using the components.

#### CommonJS

First, you need to require the component you want to use.

```js
var Input = require('@cyclic/molecule-input').Input;
```

Here, we have required the `Input` component from the package. Next, we will
actually use it.

```js
var myTextField = Input({DOM, props$: Rx.Observable.just({
  label: `My text field`
})});
```

#### The ES6 Way

First, you need to import the component you want to use.

```js
import {Input} from '@cyclic/molecule-input';
```

Here, we have imported the `Input` component from the package. Next, we will
actually use it.

```js
const myTextField = Input({DOM, props$: Rx.Observable.just({
  label: `My text field`
})});
```

#### Styling Components

The components come with styles in two flavors: transformed styles
and raw styles.

Check out the [API documentation] for available CSS classes and variables.

##### Using Transformed Styles

The transformed styles are ready-to-go styles, which you can use directly in
the browser. The common way is to simply copy the stylesheets from
the library. You’ll find the transformed stylesheets in the *lib* directory.
 
If you don’t want all the styles for all the components, which is in 
*lib/index.css*, you can find specific stylesheets in the component 
subdirectories. However, using stylesheets from different components can lead
to style declaration duplication.

Style declaration duplication can also occur if you use components in 
orchestration with other Cyclic Materials packages. We’ll see next how using
raw styles avoids this.

##### Using Raw Styles

Cyclic Materials have been built with a certain amount of flexibility in mind.
The raw styles are written for [cssnext], which uses the latest CSS syntax. 

Using raw styles is *the recommended way*, as it avoids unnecessary duplication 
of style declarations. It does, however, require a little bit more setup 
in your project.
 
To use the raw styles, your project needs to use the cssnext transpiler.

The raw styles are found in the *src* directory. In your CSS stylesheet, 
you simply import the raw styles you need, for example:

```css
@import '@cyclic/molecule-input/src/Input
```

You then need to have a process that transpiles your CSS. You can [use cssnext] 
using CLI, as a JavaScript library, as a PostCSS plugin, or through other tools.

Take a look at this package’s *package.json* file scripts to see how 
Cyclic Materials use cssnext as a PostCSS plugin.

## License

MIT © [Cyclic Materials](http://github.com/CyclicMaterials)

- - -

[![Build Status](https://travis-ci.org/CyclicMaterials/molecule-input.svg)](https://travis-ci.org/CyclicMaterials/molecule-input)
[![Code Climate](https://codeclimate.com/github/CyclicMaterials/molecule-input/badges/gpa.svg)](https://codeclimate.com/github/CyclicMaterials/molecule-input)
[![Dependency Status](https://david-dm.org/CyclicMaterials/molecule-input.svg)](https://david-dm.org/CyclicMaterials/molecule-input)
[![devDependency Status](https://david-dm.org/CyclicMaterials/molecule-input/dev-status.svg)](https://david-dm.org/CyclicMaterials/molecule-input#info=devDependencies)

[CycleJS]: http://cycle.js.org/
[live demo here]: http://dev.glaciersoft.com/cyclic/molecule-input/
[API documentation]: ./doc/api.md
[cssnext]: http://cssnext.io/
[use cssnext]: http://cssnext.io/setup/#usage
