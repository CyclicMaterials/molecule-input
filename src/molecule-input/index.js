import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';
import makeMoleculeInputContainer from './../shared/makeMoleculeInputContainer';

const DIALOGUE_NAME = `molecule-Input`;

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
