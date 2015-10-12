import cuid from 'cuid';
import model from './../shared/model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_NAME = `molecule-InputError`;

function InputError(sources) {
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const state$ = model({props$, componentName: COMPONENT_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {COMPONENT_NAME};

export default InputError;
