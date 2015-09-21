import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './../shared/view';
import atomAutogrowTextarea from '@cyclic/atom-autogrow-textarea';
import moleculeInputContainer from './../molecule-input-container/index';
import moleculeInputError from './../molecule-input-error/index';
import moleculeInputCharCounter from './../molecule-input-char-counter/index';
import renderLabel from './../shared/renderLabel.js';

const DIALOGUE_NAME = `molecule-Textarea`;

/**
 * `moleculeTextarea` is a multi-line text field with Material Design styling.
 *
 *     moleculeTextarea({DOM, props$: Rx.Observable.just({
 *       label: `Textarea label`
 *     })});
 *
 * ### Validation
 *
 * Currently, only `required` and `maxLength` validation is supported.
 *
 * ### Styling
 *
 * See `moleculeInputContainer` for a list of variables and classes used to
 * style this component.
 *
 * @param {Function} DOM the DOM driver function.
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeTextarea object. The object has the
 * following structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeTextarea({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  const inputContainerDOM = moleculeInputContainer({
    DOM, props$: state$.combineLatest(
      atomAutogrowTextarea({
        DOM, props$: state$.map(
          (state) => assign({}, state)
        ),
      }).DOM,
      (state, autogrowTextareaVTree) => {
        const {errorMessage, charCounter} = state;

        return assign({}, state, {
          label: renderLabel(state),
          input: autogrowTextareaVTree,
          addOns: [
            errorMessage ? moleculeInputError : void 0,
            charCounter ? moleculeInputCharCounter : void 0,
          ],
        });
      }
    ),
  }).DOM;

  return {
    DOM: view({id, state$, inputContainerDOM}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
