import AutogrowTextarea
  from '@cyclic/atom-autogrow-textarea/src/AutogrowTextarea';
import cuid from 'cuid';
import makeInputContainer from './../shared/makeInputContainer';
import model from './../shared/model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';

const COMPONENT_NAME = `molecule-Textarea`;

function Textarea(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const state$ = model({componentName: COMPONENT_NAME, props$});

  const textareaDOM = AutogrowTextarea({
    DOM, props$: state$.map((state) => clone(state)),
  }).DOM;

  const input$ = view({id, state$, textareaDOM});

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

export default Textarea;
