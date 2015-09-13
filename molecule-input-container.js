import cuid from 'cuid';
import intent from './molecule-input-container/intent.js';
import model from './molecule-input-container/model.js';
import view from './molecule-input-container/view.js';

const DIALOGUE_NAME = `molecule-InputContainer`;

function moleculeInputContainer({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id});
  const state$ = model({props$, actions});

  return {
    DOM: view({state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInputContainer;
