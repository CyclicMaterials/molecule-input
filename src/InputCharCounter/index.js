import cuid from 'cuid';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';

const DIALOGUE_NAME = `molecule-InputCharCounter`;

function InputCharCounter(sources) {
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {DIALOGUE_NAME};

export default InputCharCounter;
