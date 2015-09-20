/** @jsx hJSX */

import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';
import moleculeInputError from './../molecule-input-error/index';
import moleculeInputContainer from './../molecule-input-container/index';
import renderLabel from './../shared/renderLabel.js';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

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

  const inputContainer = moleculeInputContainer({
    DOM, props$: state$.combineLatest(
      input$,
      (state, inputVTree) => assign(
        {}, state, {
          label: renderLabel(state),
          input: inputVTree,
          addOns: [moleculeInputError],
        }
      )
    ),
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInput;
