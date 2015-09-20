# v5.0.3 (2015-09-20)


## Bug Fixes

- **CSS:** wrong variable and class name
  ([e8a232ed](https://github.com/CyclicMaterials/molecule-input/commits/e8a232edc83c22a9dbfe17ec1ee402a4cd683201),
   [#19](https://github.com/CyclicMaterials/molecule-input/issues/19), [#20](https://github.com/CyclicMaterials/molecule-input/issues/20))


# v5.0.2 (2015-09-20)


# v5.0.1 (2015-09-19)


# v5.0.0 (2015-09-19)


## Features

- **validation:** add manual validation
  ([065c15d6](https://github.com/CyclicMaterials/molecule-input/commits/065c15d66d4414f8e8f7278c11b334d2013fa30b),
   [#12](https://github.com/CyclicMaterials/molecule-input/issues/12))


## Breaking Changes

- due to [f0f67dcb](https://github.com/CyclicMaterials/molecule-input/commits/f0f67dcbe3dd7aec35590227801c50516dd33029),
 

Rename property `noFloatingLabel` to `noLabelFloat`.

Closes #16

- due to [ac23ef04](https://github.com/CyclicMaterials/molecule-input/commits/ac23ef04047585f64d02b61eed57bd2d2074068f),
 

Before:
`isNoFloatingLabel`
`isRequired`
`isAutoValidating`

After:
`noFloatingLabel`
`required`
`autoValidate`

Closes #13

- **CSS:** due to [c1a069b2](https://github.com/CyclicMaterials/molecule-input/commits/c1a069b2ce5122cf9a1296b9304fe54908695e4c),
 

Apply state modifiers directly on components.
Follow state modifiers naming convention: `is-stateModifierName`.
Remove `isHighLightedLabel`.

Rename following classes.

Before:
`.isDisabled`
`.isHighlighted`
`.isInvalid`
`.isFloatingLabel`
`.isHiddenLabel`

After:
`.is-disabled`
`.is-highlighted`
`.is-invalid`
`.is-floatedLabel`
`.is-hiddenLabel`

Closes #14



# v4.0.0 (2015-09-18)


## Bug Fixes

- **molecule-textarea:** inputs lose `isFloatingLabel`
  ([6e0a8aea](https://github.com/CyclicMaterials/molecule-input/commits/6e0a8aea05c97d92c816b9e4526b6ce562818038),
   [#11](https://github.com/CyclicMaterials/molecule-input/issues/11))


## Features

- **demo:** add validation example
  ([07afa42e](https://github.com/CyclicMaterials/molecule-input/commits/07afa42e72904e1b4f0e1ac61fa0a5ba5ce377a4))
- **validation:** add validation and enable add-ons
  ([e6d909db](https://github.com/CyclicMaterials/molecule-input/commits/e6d909dbc54f161b381ab59661e19d63bd769cb4),
   [#10](https://github.com/CyclicMaterials/molecule-input/issues/10))


## Breaking Changes

- due to [74514995](https://github.com/CyclicMaterials/molecule-input/commits/745149958fc4941d7593df6e451628b905453154),
 

Source files have moved to `src` directory.
Component main entry files are named `index.js` in the respective
component directories.
Component CSS files are named `index.css` in the respective
component directories.

- **molecule-textarea:** due to [6e0a8aea](https://github.com/CyclicMaterials/molecule-input/commits/6e0a8aea05c97d92c816b9e4526b6ce562818038),
 

The resolvement led to a complete refactor of the dialogues.
Dialogues have been moved to `src` directory. There are no
orphan source files in the root.

To use a dialogue, import it from `./src/dialogue-name/index`.

Closes #11

- **validation:** due to [e6d909db](https://github.com/CyclicMaterials/molecule-input/commits/e6d909dbc54f161b381ab59661e19d63bd769cb4),
 

`shared/renderLabel` has a new signature.

Before: `renderLabel(dialogueName, label)`
After: `renderLabel({dialogueName, label})`

Closes #10



# v3.0.1 (2015-09-13)


# v3.0.0 (2015-09-12)


## Features

- dialogue implementation consistency
  ([01d0a357](https://github.com/CyclicMaterials/molecule-input/commits/01d0a357c4b3aa9424452a53f0bbc33d60891bcc),
   [#4](https://github.com/CyclicMaterials/molecule-input/issues/4), [#5](https://github.com/CyclicMaterials/molecule-input/issues/5), [#6](https://github.com/CyclicMaterials/molecule-input/issues/6))
- **molecule-textarea:**
    - return `state$` and `cycleId`
    ([5a0c1d89](https://github.com/CyclicMaterials/molecule-input/commits/5a0c1d892ebc6339d913f89057b8c0de7538d21a))
    - listen for events on immediate child
    ([1e9c4b9c](https://github.com/CyclicMaterials/molecule-input/commits/1e9c4b9c84810cdfd9bfd1e62e29f95e407e9411),
     [#4](https://github.com/CyclicMaterials/molecule-input/issues/4))


## Breaking Changes

- due to [01d0a357](https://github.com/CyclicMaterials/molecule-input/commits/01d0a357c4b3aa9424452a53f0bbc33d60891bcc),
 

Dialogue interfaces  no longer optional namespace parameter.
Dialogues have an `id` and `state$` property.
`DIALOGUE_NAME` is exposed through named export.

Closes #4
Closes #5
Closes #6



# v2.0.0 (2015-09-09)


## Bug Fixes

- **molecule-textarea:** LABEL for TEXTAREA doesn’t float on input
  ([1e9b5073](https://github.com/CyclicMaterials/molecule-input/commits/1e9b507391bab38923e1184b55033eb9a0ef07fc),
   [#3](https://github.com/CyclicMaterials/molecule-input/issues/3))


## Breaking Changes

- **molecule-textarea:** due to [1e9b5073](https://github.com/CyclicMaterials/molecule-input/commits/1e9b507391bab38923e1184b55033eb9a0ef07fc),
 
`moleculeTextarea` function signature has changed.

Before:

```js
moleculeTextArea({DOM, props$}, optNamespace = ``)
```

After:

```js
moleculeTextarea({DOM, props$, optCycleId = makeCycleId()})
```

Closes #3



# v1.0.0 (2015-09-09)


## Bug Fixes

- **CSS:**
    - add @cyclic scope
    ([130e59c2](https://github.com/CyclicMaterials/molecule-input/commits/130e59c225ce326c64336eedd88c57b9871443ee))
    - Failed to find 'template-demo-pages/template-demo-pages'
    ([721ff7e8](https://github.com/CyclicMaterials/molecule-input/commits/721ff7e892f29e9e6985a2b9e0bc0137510bf74e),
     [#1](https://github.com/CyclicMaterials/molecule-input/issues/1))
- **JS:** Error: Cannot find module 'util-combine-class-names'
  ([d420fbd5](https://github.com/CyclicMaterials/molecule-input/commits/d420fbd598c10e86acf3c1a3732fd87b7440ff3f))


## Features

- add textarea
  ([03ad43f6](https://github.com/CyclicMaterials/molecule-input/commits/03ad43f6fb43501b6940dec0ebe3b9bf81a0274d))


