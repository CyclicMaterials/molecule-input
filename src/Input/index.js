import {object} from 'categories-js';
import predicateObjectOfObservable
  from './../shared/predicateObjectOfObservable';
import {Rx} from '@cycle/core';
import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import propsDef from './props';
import model from './../shared/model';
import view from './view';
import makeInputContainer from './../shared/makeInputContainer';

const DIALOGUE_NAME = `molecule-Input`;

function Input(sources) {
  const DOM = object(sources.DOM);
  const props$ = predicateObjectOfObservable({
    observable$: sources.props$ || Rx.Observable.just({}),
    defs: propsDef,
  });
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});
  const input$ = view({state$, id});
  const inputContainer = makeInputContainer({
    DOM,
    props$: state$.map((state) => assign({}, state)),
    input$,
  });

  return {
    DOM: inputContainer.DOM,
    id: inputContainer.id,
    state$: inputContainer.state$,
  };
}

export {DIALOGUE_NAME};

export default Input;
