import Input from './Input/index';
import InputCharCounter from './InputCharCounter/index';
import InputContainer from './InputContainer/index';
import InputError from './InputError/index';
import Textarea from './Textarea/index';

module.exports = {
  /**
   * `Input` is a single-line text field with Material Design styling.
   *
   *     Input({DOM, props$: Rx.Observable.just({
   *       label: `Input label`
   *     })});
   *
   * It may include an optional error message or character counter.
   *
   *     Input({DOM, props$: Rx.Observable.just({
   *       label: `Input label`,
   *       errorMessage: `Invalid input!`
   *     })});
   *
   *     Input({DOM, props$: Rx.Observable.just({
   *       label: `Input label`,
   *       charCounter: true
   *     })});
   *
   * It can also include custom prefix or suffix elements, which are displayed
   * before or after the text input itself.
   *
   *     Input({DOM, props$: Rx.Observable.just({
   *       label: `Total`,
   *       prefix: `$`
   *     })});
   *
   *     Input({DOM, props$: Rx.Observable.just({
   *       label: `username`,
   *       suffix: `@email.com`
   *     })});
   *
   * ### Styling
   *
   * See [`InputContainer`](#InputContainer) for a list of variables and
   * classes used to style this component.
   *
   * ### Properties
   *
   * The following properties are available:
   *
   * Property | Description | Default
   * ---------------|-------------|---------
   * `autoValidate` | `{Boolean}` Set to true to auto-validate the input value. | `false`
   * `charCounter` | `{Boolean}` Set to true to show a character counter. | `false`
   * `className` | `{String}` Set to custom CSS class names. |
   * `errorMessage` | `{String}` The error message to display when the input is invalid. |
   * `isDisabled` | `{Boolean}` Set to true to disable this input. | `false`
   * `label` | `{String}` The label for this input. |
   * `maxLength` | `{Number}` The maximum length of the input value. |
   * `disableLabelFloat` | `{Boolean}` Set to true to disable the floating label. | `false`
   * `pattern` | `{String}` A pattern to validate the input with. | `false`
   * `persistLabelFloat` | `{Boolean}` Set to true to persist the label floating. | `false`
   * `required` | `{Boolean}` Set to true to mark the input as required. | `false`
   * `type` | `{String}` The type of the input. The supported types are `text`, `number` and `password`. |
   * `validator` | {Function} Provide a function to custom validate the input. |
   * `value` | {String} The value of the input. | ``
   *
   * @param {Object} {DOM, props$} A specification of:
   *
   *     - {Function} DOM The DOM driver function.
   *     - {Observable} props$ An Observable of object of properties.
   *
   * @returns {Object} The Input object. The object has the following
   * structure:
   *
   *     {
   *       DOM: Observable,
   *       id: String,
   *       state$: Observable
   *     }
   *
   * @function Input
   */
  Input,

  /**
   * `InputCharCounter` is a character counter for use with
   * `InputContainer`. It shows the number of characters entered
   * in the input and the maximum length if specified.
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       input: <input attributes={{maxlength: 20}}>,
   *       addOns: [InputCharCounter]
   *     })});
   *
   * `InputCharCounter` is provided as a function reference in the `addOns`
   * property list of the `InputContainer`.
   *
   * ### Styling
   *
   * The following class is available for styling:
   *
   * Class | Description | Default
   * ---------------|-------------|---------
   * `.molecule-InputCharCounter` | Input character counter component |
   *
   * @param {Object} {DOM, props$} A specification of:
   *
   *     - {Function} DOM The DOM driver function.
   *     - {Observable} props$ An Observable of object of properties.
   *
   * @returns {Object} The InputCharCounter object. The object has the
   * following structure:
   *
   *     {
   *       DOM: Observable,
   *       id: String,
   *       state$: Observable
   *     }
   *
   * @function InputCharCounter
   */
  InputCharCounter,

  /**
   * `InputContainer` is a container for a `<label>`, an `<input>` or
   * `atom-autogrow-textarea` and optional add-on components such as error
   * message, used to implement Material Design text fields.
   *
   * For example:
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       label: <label>Your name</label>,
   *       input: <input/>
   *     })});
   *
   * ### Listening for input changes
   *
   * By default, it listens for changes on the `value` attribute on its children
   * nodes and perform tasks such as auto-validating and label styling when the
   * `value` changes.
   *
   * ### Using a custom input
   *
   * You can use a custom input in a `InputContainer`, for example to implement
   * a compound input field such as a social security number input.
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       label: <label>Social Security Number</label>,
   *       input: SSNInputVTree
   *     })});
   *
   * ### Validation
   *
   * If the `autoValidate` property is set, the input container will validate the
   * input and update the container styling when the input value changes.
   *
   * ### Add-ons
   *
   * Add-ons are child components of a `InputContainer` set on the
   * `addOns` property as an array of functions. They are modified when the input
   * value or validity changes, and may implement functionality such as error
   * messages. They appear at the bottom of the input.
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       label: <label>Feed me digits</label>,
   *       input: <input pattern="[0-9]*"/>,
   *       errorMessage: `Only numbers are allowed!`,
   *       addOns: [InputError]
   *     })});
   *
   * ### Prefixes and suffixes
   *
   * These are child elements of an `InputContainer` specified with the
   * `prefix` or `suffix` property, and are displayed inline with the input,
   * before or after.
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       prefix: `$`,
   *       label: <label>Total</label>,
   *       input: <input/>,
   *       suffix: <button>X</button>
   *     })});
   *
   * ### Styling
   *
   * The following variables and classes are available for styling:
   *
   * Variable/class | Description | Default
   * ---------------|-------------|---------
   * `--molecule-InputContainer-color` | Label and underline color when the input is not focused. | `--secondary-text-color`
   * `--molecule-InputContainer-focus-color` | Label and underline color when the input is focused. | `--default-primary-color`
   * `--molecule-InputContainer-invalid-color` | Label and underline color when the input is invalid. | `--atom-Color-red-700`
   * `.molecule-InputContainer` | Input container component. |
   * `.is-disabled` | Disabled state modifier. |
   * `.is-highlighted` | Highlighted state modifier. |
   * `.is-invalid` | Invalid state modifier. |
   * `.is-hiddenLabel` | Hidden label state modifier. |
   * `.molecule-InputContainer_underline` | Underline descendent. |
   * `.molecule-InputContainer_focusedLine` | Focused line descendent. |
   * `.molecule-InputContainer_unfocusedLine` | Unfocused line descendent. |
   * `.molecule-InputContainer_inputContent` | Input content descendent. Label, input, prefix and suffix are children. |
   * `.molecule-InputContainer_prefix` | Prefix descendent. |
   * `.molecule-InputContainer_prefix` | Label descendent. |
   * `.molecule-InputContainer_addOnContent` | Add-on content descendent. |
   *
   * ### Properties
   *
   * The following properties are available:
   *
   * Property | Description | Default
   * ---------------|-------------|---------
   * `autoValidate` | `{Boolean}` Set to true to auto-validate the input value when it changes. | `false`
   * `bindValue` | `{String}` Set to a value that should be used for input value validation. Use this for custom inputs. |
   * `className` | `{String}` Set to custom CSS class names. |
   * `disableLabelFloat` | `{Boolean}` Set to true to disable the floating label. The label disappears when the input value is not null. | `false`
   * `errorMessage` | `{VTree}` Set to a virtual DOM tree that are displayed in the error message. |
   * `focused` | `{Boolean}` **read-only** True if the input has focus. | `false`
   * `input` | `{VTree}` Set to a virtual DOM tree that contains at least one INPUT or one TEXTAREA. |
   * `isInvalid` | `{Boolean}` True if the input is invalid. This property is set automatically when the input value changes if auto-validating. | `false`
   * `label` | `{VTree}` Set to a virtual DOM tree that is used for the label. |
   * `persistLabelFloat` | `{Boolean}` Set to true to persist the label floating. | `false`
   * `prefix` | `{VTree}` Set to a virtual DOM tree that are displayed inline before the input. |
   * `suffix` | `{VTree}` Set to a virtual DOM tree that are displayed inline after the input. |
   * `validate` | `{Boolean}` Set to true to validate the input value. | `false`
   * `validator` | `{Function}` Set to a custom function that is used to validate the input value. |
   *
   * @param {Object} {DOM, props$} A specification of:
   *
   *     - {Function} DOM The DOM driver function.
   *     - {Observable} props$ An Observable of object of properties.
   *
   * @returns {Object} The InputContainer object. The object has the
   * following structure:
   *
   *     {
   *       DOM: Observable,
   *       id: String,
   *       state$: Observable
   *     }
   *
   * @function InputContainer
   */
  InputContainer,

  /**
   * `InputError` is an error message for use with
   * `InputContainer`. The error is displayed when the
   * `InputContainer` is invalid.
   *
   *     InputContainer({DOM, props$: Rx.Observable.just({
   *       input: <input pattern="[0-9]*"/>,
   *       errorMessage: `Only numbers are allowed!`,
   *       addOns: [InputError]
   *     })});
   *
   * `props$` are applied by the `InputContainer`.
   *
   * ### Properties
   *
   * The following properties are available:
   *
   * Property | Description | Default
   * ---------------|-------------|---------
   * `isInvalid` | `{Boolean}` **read-only** True if the error is showing. |
   *
   * ### Styling
   *
   * The following variables and classes are available for styling:
   *
   * Variable/class | Description | Default
   * ---------------|-------------|---------
   * `--molecule-InputContainer-invalid-color` | The foreground color of the error | `--atom-Color-red-700`
   * `.molecule-InputError` | Input error component |
   * `.is-invalid` | Invalid state modifier |
   *
   * @param {Object} {props$} A specification of:
   *
   *     - {Observable} props$ An Observable of object of properties.
   *
   * @returns {Object} The InputError object. The object has the
   * following structure:
   *
   *     {
   *       DOM: Observable,
   *       id: String,
   *       state$: Observable
   *     }
   *
   * @function InputError
   */
  InputError,

  /**
   * `Textarea` is a multi-line text field with Material Design styling.
   *
   *     Textarea({DOM, props$: Rx.Observable.just({
   *       label: `Textarea label`
   *     })});
   *
   * ### Validation
   *
   * Currently, only `required` and `maxLength` validation is supported.
   *
   * ### Styling
   *
   * See [`InputContainer`](#InputContainer) for a list of variables and
   * classes used to style this component.
   *
   * ### Properties
   *
   * The following properties are available:
   *
   * Property | Description | Default
   * ---------------|-------------|---------
   * `autoValidate` | `{Boolean}` Set to true to auto-validate the input value. | `false`
   * `charCounter` | `{Boolean}` Set to true to show a character counter. | `false`
   * `className` | `{String}` Set to custom CSS class names. |
   * `errorMessage` | `{String}` The error message to display when the input is invalid. |
   * `isDisabled` | `{Boolean}` Set to true to disable this input. | `false`
   * `label` | `{String}` The label for this input. |
   * `maxLength` | `{Number}` The maximum length of the input value. |
   * `maxRows` | `{Number}` The maximum number of rows this element can grow to until it scrolls. 0 means no maximum. | `0`
   * `disableLabelFloat` | `{Boolean}` Set to true to disable the floating label. | `false`
   * `pattern` | `{String}` A pattern to validate the input with. | `false`
   * `persistLabelFloat` | `{Boolean}` Set to true to persist the label floating. | `false`
   * `required` | `{Boolean}` Set to true to mark the input as required. | `false`
   * `rows` | `{Number}` The initial number of rows. | `1`
   * `type` | `{String}` The type of the input. The supported types are `text`, `number` and `password`. |
   * `validator` | {Function} Provide a function to custom validate the input. |
   * `value` | {String} The value of the input. | ``
   *
   * @param {Object} {DOM, props$} A specification of:
   *
   *     - {Function} DOM The DOM driver function.
   *     - {Observable} props$ An Observable of object of properties.
   *
   * @returns {Object} The Textarea object. The object has the
   * following structure:
   *
   *     {
   *       DOM: Observable,
   *       id: String,
   *       state$: Observable
   *     }
   *
   * @function Textarea
   */
  Textarea,
};
