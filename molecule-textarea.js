import cuid from 'cuid';
import view from './molecule-textarea/view.js';

const DIALOGUE_NAME = `molecule-Textarea`;

function moleculeTextarea({DOM, props$}) {
  const id = cuid();
  const state$ = props$;

  return {
    DOM: view({DOM, state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
