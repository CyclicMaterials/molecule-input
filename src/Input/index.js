import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';
import makeInputContainer from './../shared/makeInputContainer';

const DIALOGUE_NAME = `molecule-Input`;

function Input({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});
  const input$ = view({state$, id});
  const inputContainer = makeInputContainer({
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

export default Input;
