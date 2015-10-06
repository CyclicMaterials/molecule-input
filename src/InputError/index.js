import cuid from 'cuid';
import model from './../shared/model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';

const DIALOGUE_NAME = `molecule-InputError`;

function InputError(sources) {
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

export default InputError;
