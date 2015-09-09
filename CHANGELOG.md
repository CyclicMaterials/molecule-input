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


