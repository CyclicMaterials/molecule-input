import {AutogrowTextarea} from '@cyclic/atom-autogrow-textarea';
import cuid from 'cuid';
import makeInputContainer from './../shared/makeInputContainer';
import model from './../shared/model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_CLASS = `molecule-Textarea`;

function Textarea(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const {id = cuid()} = sources;
  const state$ = model({componentClass: COMPONENT_CLASS, props$});
  const textareaDOM = AutogrowTextarea({
    DOM, id, props$: state$.map((state) => clone(state)),
  }).DOM;
  const input$ = view({id, state$, textareaDOM});
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

export default Textarea;
