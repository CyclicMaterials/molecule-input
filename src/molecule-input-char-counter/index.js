import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './model';
import view from './view';

const DIALOGUE_NAME = `molecule-InputCharCounter`;

/**
 * @param {Observable} props$ An Observable of object of properties.
 * @returns {Object} The moleculeInputCharCounter object. The object has the
 * following structure:
 *
 *     {
 *       DOM: Observable,
 *       id: String,
 *       state$: Observable
 *     }
 */
function moleculeInputError({props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputError;
