import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import model from './model';
import view from './view';
import {Rx} from '@cycle/core';

const DIALOGUE_NAME = `molecule-InputContainer`;

function moleculeInputContainer({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id});
  const state$ = model({props$, actions, dialogueName: DIALOGUE_NAME});

  const addOns$ = state$.map(
    (state) => state.addOns ?
      state.addOns.map((addOn) => addOn({
        DOM, props$: Rx.Observable.just(assign({}, state)),
      }).DOM) :
      Rx.Observable.just()
  ).flatMap((addOnDOMs) => addOnDOMs);

  return {
    DOM: view({state$, id, addOns$}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInputContainer;
