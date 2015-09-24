import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './../shared/view';
import atomAutogrowTextarea
  from '@cyclic/atom-autogrow-textarea/src/atom-autogrow-textarea';
import makeMoleculeInputContainer from './../shared/makeMoleculeInputContainer';

const DIALOGUE_NAME = `molecule-Textarea`;

function moleculeTextarea({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  const input$ = atomAutogrowTextarea({
    DOM, props$: state$.map((state) => assign({}, state)),
  }).DOM;

  const inputContainerDOM = makeMoleculeInputContainer({
    DOM,
    props$: state$.map((state) => assign({}, state)),
    input$,
  }).DOM;

  return {
    DOM: view({id, state$, inputContainerDOM}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
