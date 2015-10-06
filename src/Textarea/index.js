import atomAutogrowTextarea
  from '@cyclic/atom-autogrow-textarea/src/atom-autogrow-textarea';
import cuid from 'cuid';
import makeInputContainer from './../shared/makeInputContainer';
import model from './../shared/model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';

const DIALOGUE_NAME = `molecule-Textarea`;

function Textarea(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  const input$ = atomAutogrowTextarea({
    DOM, props$: state$.map((state) => clone(state)),
  }).DOM;

  const inputContainerDOM = makeInputContainer({
    DOM,
    props$: state$.map((state) => clone(state)),
    input$,
  }).DOM;

  return {
    DOM: view({id, state$, inputContainerDOM}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {DIALOGUE_NAME};

export default Textarea;
