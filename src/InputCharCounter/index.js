import cuid from 'cuid';
import predicateObjectOfObservable
  from './../shared/predicateObjectOfObservable';
import {Rx} from '@cycle/core';
import propsDef from './props';
import model from './model';
import view from './view';
import assign from 'fast.js/object/assign';

const DIALOGUE_NAME = `molecule-InputCharCounter`;

function InputCharCounter(sources) {
  const id = cuid();
  const props$ = predicateObjectOfObservable({
    observable$: sources.props$ || Rx.Observable.just({}),
    defs: propsDef,
  });
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  return {
    DOM: view({state$, id}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default InputCharCounter;
