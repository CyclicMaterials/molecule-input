import cuid from 'cuid';
import view from './view';
import atomAutogrowTextarea from '@cyclic/atom-autogrow-textarea';
import moleculeInputContainer from '../molecule-input-container/index';
import renderLabel from '../shared/renderLabel.js';

const DIALOGUE_NAME = `molecule-Textarea`;

function moleculeTextarea({DOM, props$}) {
  const id = cuid();
  const state$ = props$;

  const inputContainerDOM = moleculeInputContainer({
    DOM, props$: state$.combineLatest(
      atomAutogrowTextarea({DOM, props$: state$}).DOM,
      (state, autogrowTextareaVTree) => {
        const {label, isNoFloatingLabel, isDisabled} = state;

        return {
          label: renderLabel(DIALOGUE_NAME, label),
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
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
