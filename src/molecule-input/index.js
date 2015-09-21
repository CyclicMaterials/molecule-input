import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';
import makeMoleculeInputContainer from './../shared/makeMoleculeInputContainer';

const DIALOGUE_NAME = `molecule-Input`;

/**
 * `moculeInput` is a single-line text field with Material Design styling.
 *
 *     moleculeInput({DOM, props$: Rx.Observable.just({label: `Input label`})});
 *
 * It may include an optional error message.
 *
 *     moleculeInput({DOM, props$: Rx.Observable.just({
 *       errorMessage: `Invalid input!`, label: `Input label`
 *     })});
 *
 * ### Styling
 *
 * See `moleculeInputContainer` for a list of variables and classes used to
 * style this component.
 *
 * @param {Function} DOM the DOM driver function.
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeInput object. The object has the following
 * structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeInput({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});
  const input$ = view({state$, id});
  const inputContainer = makeMoleculeInputContainer({
    DOM,
    props$: state$.map((state) => assign({}, state)),
    input$,
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInput;
