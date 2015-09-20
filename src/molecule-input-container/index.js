import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import model from './model';
import view from './view';
import {Rx} from '@cycle/core';

const DIALOGUE_NAME = `molecule-InputContainer`;

/**
 * `moleculeInputContainer` is a container for a `<label>`, an `<input>` or
 * `atom-autogrow-textarea` and optional add-on components such as error
 * message, used to implement Material Design text fields.
 *
 * For example:
 *
 *     moleculeInputContainer({DOM, props$: Rx.Observable.just({
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
 * ### Validation
 *
 * If the `autoValidate` property is set, the input container will validate the
 * input and update the container styling when the input value changes.
 *
 * ### Add-ons
 *
 * Add-ons are child components of a `moleculeInputContainer` set on the
 * `addOns` property as an array of functions. They are modified when the input
 * value or validity changes, and may implement functionality such as error
 * messages. They appear at the bottom of the input.
 *
 *     moleculeInputContainer({DOM, props$: Rx.Observable.just({
 *       label: <label>Feed me digits</label>,
 *       input: <input pattern="[0-9]*"/>,
 *       errorMessage: `Only numbers are allowed!`,
 *       addOns: [moleculeInputError]
 *     })});
 *
 * ### Styling
 *
 * The following variables and classes are available for styling:
 *
 * Variable/class | Description | Default
 * ---------------|-------------|---------
 * `--molecule-InputContainer-color` | Label and underline color when the input is not focused | `--secondary-text-color`
 * `--molecule-InputContainer-focus-color` | Label and underline color when the input is focused | `--default-primary-color`
 * `--molecule-InputContainer-invalid-color` | Label and underline color when the input is invalid | `--atom-Color-red-700`
 * `.molecule-InputContainer` | Input container component |
 * `.is-disabled` | Disabled state modifier |
 * `.is-highlighted` | Highlighted state modifier |
 * `.is-invalid` | Invalid state modifier |
 * `.is-hiddenLabel` | Hidden label state modifier |
 * `.molecule-InputContainer_underline` | Underline descendent |
 * `.molecule-InputContainer_focusedLine` | Focused line descendent |
 * `.molecule-InputContainer_unfocusedLine` | Unfocused line descendent |
 * `.molecule-InputContainer_inputContent` | Input content descendent. Label, input, prefix and suffix are children. |
 * `.molecule-InputContainer_prefix` | Prefix descendent. |
 * `.molecule-InputContainer_prefix` | Label descendent. |
 * `.molecule-InputContainer_addOnContent` | Add-on content descendent |
 *
 * @param {Function} DOM the DOM driver function.
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeInputContainer object. The object has the
 * following structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeInputContainer({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id});
  const state$ = model({props$, actions, dialogueName: DIALOGUE_NAME});

  const addOns$ = state$.map(
    (state) => state.addOns ?
      state.addOns.map((addOn) => addOn({
        DOM, props$: Rx.Observable.just(assign({}, state)),
      }).DOM) :
      Rx.Observable.just()
  ).flatMap((addOnDOMs) => addOnDOMs);

  return {
    DOM: view({state$, id, addOns$}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputContainer;
