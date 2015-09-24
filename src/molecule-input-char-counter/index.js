import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './model';
import view from './view';

const DIALOGUE_NAME = `molecule-InputCharCounter`;

function moleculeInputCharCounter({props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputCharCounter;
