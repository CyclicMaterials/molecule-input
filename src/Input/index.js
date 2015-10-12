import cuid from 'cuid';
import makeInputContainer from './../shared/makeInputContainer';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_NAME = `molecule-Input`;

function Input(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const state$ = model({props$, componentName: COMPONENT_NAME});
  const input$ = view({state$, id});
  const inputContainer = makeInputContainer({
    DOM,
    props$: state$.map((state) => clone(state)),
    input$,
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {COMPONENT_NAME};

export default Input;
