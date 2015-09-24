import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import model from './model';
import view from './view';
import makeInputContainer from './../../src/shared/makeInputContainer';

const DIALOGUE_NAME = `ssn-Input`;

function SSNInput({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id, dialogueName: DIALOGUE_NAME});
  const state$ = model({props$, actions, dialogueName: DIALOGUE_NAME});
  const input$ = view({state$, id});
  const inputContainer = makeInputContainer({
    DOM,
    props$: state$.map(
      (state) => assign({}, state, {
        persistLabelFloat: true,
        validator: (value) => {
          // Regex validates incomplete SSNs (by design)
          return !value || value.match(/^[0-9]{0,3}-[0-9]{0,2}-[0-9]{0,4}$/);
        },
      })
    ),
    input$,
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {DIALOGUE_NAME};

export default SSNInput;
