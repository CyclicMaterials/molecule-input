
# Cyclic Materials molecule-input API

- [`moleculeInput`](#moleculeInput)

- [`moleculeInputCharCounter`](#moleculeInputCharCounter)

- [`moleculeInputContainer`](#moleculeInputContainer)

- [`moleculeInputError`](#moleculeInputError)

- [`moleculeTextarea`](#moleculeTextarea)

### <a id="moleculeInput"></a> `moleculeInput({DOM, props$})`

`moculeInput` is a single-line text field with Material Design styling.

    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `Input label`
    })});

It may include an optional error message or character counter.

    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `Input label`,
      errorMessage: `Invalid input!`
    })});

    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `Input label`,
      charCounter: true
    })});

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself.

    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `Total`,
      prefix: `$`
    })});

    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `username`,
      suffix: `@email.com`
    })});

### Properties

The following properties are available:

Property | Description | Default
---------------|-------------|---------
`autoValidate` | `{Boolean}` Set to true to auto-validate the input value. | `false`
`charCounter` | `{Boolean}` Set to true to show a character counter. | `false`
`className` | `{String}` Specify custom CSS class names. |
`errorMessage` | `{String}` The error message to display when the input is invalid. |
`isDisabled` | `{Boolean}` Set to true to disable this input. | `false`
`label` | `{String}` The label for this input. |
`maxLength` | `{Number}` The maximum length of the input value. |
`noLabelFloat` | `{Boolean}` Set to true to disable the floating label. | `false`
`pattern` | `{String}` A pattern to validate the input with. | `false`
`required` | `{Boolean}` Set to true to mark the input as required. | `false`
`type` | `{String}` The type of the input. The supported types are `text`, `number` and `password`. |
`validator` | {Function} Provide a function to custom validate the input. |

### Styling

See `moleculeInputContainer` for a list of variables and classes used to
style this component.

#### Arguments:

- `{DOM, props$} :: Object` A specification of: 
    - {Function} DOM The DOM driver function.
    - {Observable} props$ An Observable of object of properties.

#### Return:

*(Object)* The moleculeInput object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

### <a id="moleculeInputCharCounter"></a> `moleculeInputCharCounter({DOM, props$})`

`moleculeInputCharCounter` is a character counter for use with
`moleculeInputContainer`. It shows the number of characters entered
in the input and the maximum length if specified.

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      input: <input attributes={{maxlength: 20}}>,
      addOns: [moleculeInputCharCounter]
    })});

### Styling

The following class is available for styling:

Class | Description | Default
---------------|-------------|---------
`.molecule-InputCharCounter` | Input character counter component |

#### Arguments:

- `{DOM, props$} :: Object` A specification of: 
    - {Function} DOM The DOM driver function.
    - {Observable} props$ An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputCharCounter object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

### <a id="moleculeInputContainer"></a> `moleculeInputContainer({DOM, props$})`

`moleculeInputContainer` is a container for a `<label>`, an `<input>` or
`atom-autogrow-textarea` and optional add-on components such as error
message, used to implement Material Design text fields.

For example:

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      label: <label>Your name</label>,
      input: <input/>
    })});

### Listening for input changes

By default, it listens for changes on the `value` attribute on its children
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

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      label: <label>Feed me digits</label>,
      input: <input pattern="[0-9]*"/>,
      errorMessage: `Only numbers are allowed!`,
      addOns: [moleculeInputError]
    })});

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
`.molecule-InputContainer_inputContent` | Input content descendent. Label, input, prefix and suffix are children. |
`.molecule-InputContainer_prefix` | Prefix descendent. |
`.molecule-InputContainer_prefix` | Label descendent. |
`.molecule-InputContainer_addOnContent` | Add-on content descendent |

#### Arguments:

- `{DOM, props$} :: Object` A specification of: 
    - {Function} DOM The DOM driver function.
    - {Observable} props$ An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputContainer object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

### <a id="moleculeInputError"></a> `moleculeInputError({props$})`

`moleculeInputError` is an error message for use with
`moleculeInputContainer`. The error is displayed when the
`moleculeInputContainer` is invalid.

    moleculeInputContainer({DOM, props$: Rx.Observable.just({
      input: <input pattern="[0-9]*"/>,
      errorMessage: `Only numbers are allowed!`,
      addOns: [moleculeInputError]
    })});

`props$` are applied by the `moleculeInputContainer`.

### Styling

The following variables and classes are available for styling:

Variable/class | Description | Default
---------------|-------------|---------
`--molecule-InputContainer-invalid-color` | The foreground color of the error | `--atom-Color-red-700`
`.molecule-InputError` | Input error component |
`.is-invalid` | Invalid state modifier |

#### Arguments:

- `{props$} :: Object` A specification of: 
    - {Observable} props$ An Observable of object of properties.

#### Return:

*(Object)* The moleculeInputError object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -

### <a id="moleculeTextarea"></a> `moleculeTextarea({DOM, props$})`

`moleculeTextarea` is a multi-line text field with Material Design styling.

    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `Textarea label`
    })});

### Validation

Currently, only `required` and `maxLength` validation is supported.

### Styling

See `moleculeInputContainer` for a list of variables and classes used to
style this component.

#### Arguments:

- `{DOM, props$} :: Object` A specification of: 
    - {Function} DOM The DOM driver function.
    - {Observable} props$ An Observable of object of properties.

#### Return:

*(Object)* The moleculeTextarea object. The object has the following structure:

    {
      DOM: Observable,
      id: String,
      state$: Observable
    }

- - -
