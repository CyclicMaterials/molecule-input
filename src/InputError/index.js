import cuid from 'cuid';
import predicateObjectOfObservable
  from './../shared/predicateObjectOfObservable';
import {Rx} from '@cycle/core';
import propsDef from './props';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './view';

const DIALOGUE_NAME = `molecule-InputError`;

function InputError(sources) {
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

export default InputError;
