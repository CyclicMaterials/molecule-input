import cuid from 'cuid';
import intent from './intent';
import model from './model';
import view from './view';

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
