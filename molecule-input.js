import cuid from 'cuid';
import view from './molecule-input/view.js';

const DIALOGUE_NAME = `molecule-Input`;

function moleculeInput({DOM, props$}) {
  const id = cuid();
  const state$ = props$;

  return {
    DOM: view({DOM, state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInput;
