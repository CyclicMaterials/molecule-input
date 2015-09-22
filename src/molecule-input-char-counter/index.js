import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './model';
import view from './view';

const DIALOGUE_NAME = `molecule-InputCharCounter`;

/**
 * `moleculeInputCharCounter` is a character counter for use with
 * `moleculeInputContainer`. It shows the number of characters entered
 * in the input and the maximum length if specified.
 *
 *     moleculeInputContainer({DOM, props$: Rx.Observable.just({
 *       input: <input attributes={{maxlength: 20}}>,
 *       addOns: [moleculeInputCharCounter]
 *     })});
 *
 * ### Styling
 *
 * The following class is available for styling:
 *
 * Class | Description | Default
 * ---------------|-------------|---------
 * `.molecule-InputCharCounter` | Input character counter component |
 *
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeInputCharCounter object. The object has the
 * following structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeInputCharCounter({props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputCharCounter;
