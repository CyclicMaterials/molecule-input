import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './../shared/view';
import atomAutogrowTextarea from '@cyclic/atom-autogrow-textarea';
import moleculeInputContainer from './../molecule-input-container/index';
import renderLabel from './../shared/renderLabel.js';

const DIALOGUE_NAME = `molecule-Textarea`;

function moleculeTextarea({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  const inputContainerDOM = moleculeInputContainer({
    DOM, props$: state$.combineLatest(
      atomAutogrowTextarea({DOM, props$: state$.map(
        (state) => assign({}, state)
      )}).DOM,
      (state, autogrowTextareaVTree) => {
        const {dialogueName, label, isNoFloatingLabel, isDisabled} = state;

        return {
          label: renderLabel(dialogueName, label),
          input: autogrowTextareaVTree,
          isNoFloatingLabel,
          isDisabled,
        };
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
