import atomAutogrowTextarea
  from '@cyclic/atom-autogrow-textarea/src/atom-autogrow-textarea';
import makeInputContainer from './../shared/makeInputContainer';
import model from './../shared/model';
import props from './props';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';

const COMPONENT_NAME = `molecule-Textarea`;

function Textarea(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const state$ = model({props$, componentName: COMPONENT_NAME});

  const input$ = atomAutogrowTextarea({
    DOM, props$: state$.map((state) => clone(state)),
  }).DOM;

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
