# v6.3.1 (2015-10-09)


## Bug Fixes

- prevent `Textarea` label float synchronization
  ([51b1415a](https://github.com/CyclicMaterials/molecule-input/commits/51b1415a99f5b6ecc70798b7e27e11617ee1b308),
   [#59](https://github.com/CyclicMaterials/molecule-input/issues/59))
- **Input:** prevent label and placeholder overlap
  ([61020bfd](https://github.com/CyclicMaterials/molecule-input/commits/61020bfd714e4d5890c02f63d10de0761fcb4ad2),
   [#53](https://github.com/CyclicMaterials/molecule-input/issues/53))


## Performance Improvements

- **InputContainer:**
    - prevent render of empty DIVs
    ([f9238c73](https://github.com/CyclicMaterials/molecule-input/commits/f9238c7377719fd3c856bbeed425e8e0f5533112),
     [#54](https://github.com/CyclicMaterials/molecule-input/issues/54))
    - exclude `floatLabelPlaceholder` rendering
    ([65f86837](https://github.com/CyclicMaterials/molecule-input/commits/65f86837a8fb5ad833b1c4eb7232361277081fd0),
     [#56](https://github.com/CyclicMaterials/molecule-input/issues/56))
- **Textarea:** add `distinctUntilChanged()`
  ([75b7577b](https://github.com/CyclicMaterials/molecule-input/commits/75b7577bfb060274e7652bda7bba4cda83ac0c15))


# v6.3.0 (2015-10-06)


## Features

- add contracts for props
  ([f66127f1](https://github.com/CyclicMaterials/molecule-input/commits/f66127f1ccf276519121916605c746970b03dc74),
   [#40](https://github.com/CyclicMaterials/molecule-input/issues/40))
- **Input:** add contracts for props
  ([3aaea5a7](https://github.com/CyclicMaterials/molecule-input/commits/3aaea5a7ad1a4f3bf4f538d5a19063db39f03aea))
- **InputCharCounter:** add contracts for props
  ([3e239683](https://github.com/CyclicMaterials/molecule-input/commits/3e2396832c13186f0b5d1266683bdf99c710714e))
- **InputError:** add contracts for props
  ([067421c7](https://github.com/CyclicMaterials/molecule-input/commits/067421c72ebe3ceefe58fe461156eff874d6ddf8))


## Performance Improvements

- add `distinctUntilChanged()` to `combineLatest()`
  ([6152946c](https://github.com/CyclicMaterials/molecule-input/commits/6152946ca28a8b986f989ca57bf2b71405c8cca8),
   [#45](https://github.com/CyclicMaterials/molecule-input/issues/45))


# v6.2.1 (2015-09-30)


# v6.2.0 (2015-09-30)


## Bug Fixes

- **InputContainer:** keep `is-highlighted` CSS class when invalid and still focused
  ([b65a4dd4](https://github.com/CyclicMaterials/molecule-input/commits/b65a4dd415e0971590deef14630b5174cf3b3b96),
   [#39](https://github.com/CyclicMaterials/molecule-input/issues/39))


## Features

- add support for initial value
  ([89823d88](https://github.com/CyclicMaterials/molecule-input/commits/89823d8893b95529e0212ccea612d4c8816a1468),
   [#38](https://github.com/CyclicMaterials/molecule-input/issues/38))


# v6.1.1 (2015-09-28)


# v6.1.0 (2015-09-26)


## Bug Fixes

- **Input:** wrong component CSS class name
  ([f3bd75b5](https://github.com/CyclicMaterials/molecule-input/commits/f3bd75b58082ca8123a5a5396facb93483340dad),
   [#35](https://github.com/CyclicMaterials/molecule-input/issues/35))
- **InputContainer:** supply correct argument to `getInputElement()`
  ([5b8dd1bc](https://github.com/CyclicMaterials/molecule-input/commits/5b8dd1bca0efcbcce589541ba5648221f48ea55b))
- **inputContainer:** remove get `maxLength` if unspecified
  ([c930aa6e](https://github.com/CyclicMaterials/molecule-input/commits/c930aa6e91a46255b98efb6d7c75d8468ea7bd62))
- **makeInputContainer:** prevent injected component class names leak
  ([fdab4336](https://github.com/CyclicMaterials/molecule-input/commits/fdab4336e8e163d01d6c58c1d7eb37cd5c0bd65a))


## Features

- **CSS:** add CSS all entry file
  ([65ddcdd2](https://github.com/CyclicMaterials/molecule-input/commits/65ddcdd2d4a0da7a1f7fda873c50f3a39f6b03d4))


# v6.0.2 (2015-09-25)


# v6.0.1 (2015-09-25)


## Breaking Changes

- due to [3a7b7a26](https://github.com/CyclicMaterials/molecule-input/commits/3a7b7a26101c0898025b97afc4db84658742b10c),
 

Rename components.
Component functions and directories are capitalized.

Before:

- `moleculeInput`
- `moleculeInputCharCounter`
- `moleculeInputContainer`
- `moleculeInputError`
- `moleculeInputTextarea`

After:

- `Input`
- `InputCharCounter`
- `InputContainer`
- `InputError`
- `InputTextarea`

Rename `noLabelFloat` property to `disableLabelFloat`.

`InputCharCounter` and `InputError` no longer accepts `className` property.

References #26



# v6.0.0 (2015-09-25)


# v5.4.1 (2015-09-23)


# v5.4.0 (2015-09-23)


## Bug Fixes

- **molecule-input-container:** `maxLength` is `undefined`
  ([2adf75ae](https://github.com/CyclicMaterials/molecule-input/commits/2adf75ae644141bd88ec8ea10cc79c621fa5d9dd),
   [#30](https://github.com/CyclicMaterials/molecule-input/issues/30))


## Features

- **molecule-input-container:** reset horizontal offset label for prefixed input
  ([38b1ed26](https://github.com/CyclicMaterials/molecule-input/commits/38b1ed26da5ecafb9304670690913342b4647f51),
   [#32](https://github.com/CyclicMaterials/molecule-input/issues/32))


# v5.3.0 (2015-09-23)


## Features

- **molecule-input-container:**
    - add `bindValue` and `validator` properties
    ([399447e9](https://github.com/CyclicMaterials/molecule-input/commits/399447e9cfabe8cc3f6b80bbcb0d8024077b60cc))
    - add property to always float label
    ([40223c42](https://github.com/CyclicMaterials/molecule-input/commits/40223c429e4cfb8753ec0569e04642df68c84305),
     [#31](https://github.com/CyclicMaterials/molecule-input/issues/31))


# v5.2.2 (2015-09-22)


# v5.2.1 (2015-09-21)


## Bug Fixes

- **molecule-input-container:** float label on invalid numeric fields
  ([36865ba6](https://github.com/CyclicMaterials/molecule-input/commits/36865ba6c3fafb664682889479f7ec663bfda72b),
   [#25](https://github.com/CyclicMaterials/molecule-input/issues/25))


# v5.2.0 (2015-09-21)


## Features

- add character counter
  ([de144d60](https://github.com/CyclicMaterials/molecule-input/commits/de144d6068059dba247ed0a8f34a56e231e17271),
   [#23](https://github.com/CyclicMaterials/molecule-input/issues/23))


# v5.1.1 (2015-09-20)


# v5.1.0 (2015-09-20)


## Features

- **molecule-input-container:** add prefix and suffix options
  ([11762f09](https://github.com/CyclicMaterials/molecule-input/commits/11762f09ea6bbfc401bae107c8872a556f6dec76))


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


