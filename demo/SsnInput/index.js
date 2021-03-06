import cuid from 'cuid';
import intent from './intent';
import model from './model';
import view from './view';
import makeInputContainer from './../../src/shared/makeInputContainer';
import {merge} from 'ramda';

const COMPONENT_CLASS = `demo-SsnInput`;

function SsnInput({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id, componentClass: COMPONENT_CLASS});
  const state$ = model({props$, actions, componentClass: COMPONENT_CLASS});
  const input$ = view({state$, id});
  const inputContainer = makeInputContainer({
    DOM,
    props$: state$.map(
      (state) => merge(state, {
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

export {COMPONENT_CLASS};

export default SsnInput;
