import cuid from 'cuid';
import makeInputContainer from './../shared/makeInputContainer';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_CLASS = `molecule-Input`;

function Input(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const {id = cuid()} = sources;
  const state$ = model({props$, componentClass: COMPONENT_CLASS});
  const input$ = view({state$});
  const inputContainer = makeInputContainer({
    DOM,
    id,
    input$,
    props$: state$.map((state) => clone(state)),
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {COMPONENT_CLASS};

export default Input;
