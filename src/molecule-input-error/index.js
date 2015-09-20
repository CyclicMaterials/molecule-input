import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';

const DIALOGUE_NAME = `molecule-InputError`;

/**
 * `moleculeInputError` is an error message for use with
 * `moleculeInputContainer`. The error is displayed when the
 * `moleculeInputContainer` is invalid.
 *
 *     moleculeInputContainer({DOM, props$: Rx.Observable.just({
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
 * `--molecule-InputContainer-invalid-color` | The foreground coloe of the error | `--atom-Color-red-700`
 * `.molecule-InputError` | Input error component |
 * `.is-invalid` | Invalid state modifier |
 *
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeInputError object. The object has the
 * following structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeInputError({props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputError;
