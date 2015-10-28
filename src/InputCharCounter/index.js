import cuid from 'cuid';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_CLASS = `molecule-InputCharCounter`;

function InputCharCounter(sources) {
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const {id = cuid()} = sources;
  const state$ = model({props$, componentClass: COMPONENT_CLASS});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {COMPONENT_CLASS};

export default InputCharCounter;
