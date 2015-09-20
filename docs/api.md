
# Cyclic Materials molecule-input-container API

- [`moleculeInputContainer`](#moleculeInputContainer)

### <a id="moleculeInputContainer"></a> `moleculeInputContainer(DOM, props$)`

`moleculeInputContainer` is a container for a `<label>`, an `<input>` or
`atom-autogrow-textarea` and optional add-on components such as error
message, used to implement Material Design text fields.

For example:

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      label: <label>Your name</label>,
      input: <input/>
    })});

### Listening for input changes

By default, it listens for changes on the `value` attribute on its isChildren
nodes and perform tasks such as auto-validating and label styling when the
`value` changes.

### Validation

If the `autoValidate` property is set, the input container will validate the
input and update the container styling when the input value changes.

### Add-ons

Add-ons are child components of a `moleculeInputContainer` set on the
`addOns` property as an array of functions. They are modified when the input
value or validity changes, and may implement functionality such as error
messages. They appear at the bottom of the input.

### Styling

The following variables and classes are available for styling:

Variable/class | Description | Default
---------------|-------------|---------
`--molecule-InputContainer-color` | Label and underline color when the input is not focused | `--secondary-text-color`
`--molecule-InputContainer-focus-color` | Label and underline color when the input is focused | `--default-primary-color`
`--molecule-InputContainer-invalid-color` | Label and underline color when the input is invalid | `--atom-Color-red-700`
`.molecule-InputContainer` | Input container component |
`.is-disabled` | Disabled state modifier |
`.is-highlighted` | Highlighted state modifier |
`.is-invalid` | Invalid state modifier |
`.is-hiddenLabel` | Hidden label state modifier |
`.molecule-InputContainer_underline` | Underline descendent |
`.molecule-InputContainer_focusedLine` | Focused line descendent |
`.molecule-InputContainer_unfocusedLine` | Unfocused line descendent |
`.molecule-InputContainer_inputContent` | Input content descendent. Label and input are children. |
`.molecule-InputContainer_addOnContent` | Add-on content descendent |

#### Arguments:

- `DOM :: Function` the DOM driver function.
- `props$ :: Observable` An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputContainer object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

# Cyclic Materials molecule-input-error API

- [`moleculeInputError`](#moleculeInputError)

### <a id="moleculeInputError"></a> `moleculeInputError(props$)`

`moleculeInputError` is an error message for use with
`moleculeInputContainer`. The error is displayed when the
`moleculeInputContainer` is invalid.

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      input: <input pattern="[0-9]*"/>,
      errorMessage: `Only numbers are allowed!`,
      addOns: [moleculeInputError]
    })});

### Styling

The following variables and classes are available for styling:

Variable/class | Description | Default
---------------|-------------|---------
`--molecule-InputContainer-invalid-color` | The foreground coloe of the error | `--atom-Color-red-700`
`.molecule-InputError` | Input error component |
`.is-invalid` | Invalid state modifier |

#### Arguments:

- `props$ :: Observable` An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputContainer object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

# Cyclic Materials molecule-input API

- [`moleculeInput`](#moleculeInput)

- - -

### <a id="moleculeInput"></a> `moleculeInput(DOM, props$)`

`moculeInput` is a single-line text field with Material Design styling.

    moleculeInput({DOM, props$: Rx.Observable.just({label: `Input label`})});

It may include an optional error message.

    moleculeInput({DOM, props$: Rx.Observable.just({
      errorMessage: `Invalid input!`, label: `Input label`
    })});

### Styling

See `moleculeInputContainer` for a list of variables and classes used to
style this component.

#### Arguments:

- `DOM :: Function` the DOM driver function.
- `props$ :: Observable` An Observable of object of properties.

#### Return:

*(Object)* The moleculeInput object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

# Cyclic Materials molecule-textarea API

- [`moleculeTextarea`](#moleculeTextarea)

### <a id="moleculeTextarea"></a> `moleculeTextarea(DOM, props$)`

`moleculeTextarea` is a multi-line text field with Material Design styling.

   moleculeTextarea({DOM, props$: Rx.Observable.just({
     label: `Textarea label`
   })});

### Validation

Currently only `required` and `maxLength` validation is supported.

### Styling

See `moleculeInputContainer` for a list of variables and classes used to
style this component.

#### Arguments:

- `DOM :: Function` the DOM driver function.
- `props$ :: Observable` An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputContainer object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

