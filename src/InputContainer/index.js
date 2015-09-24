import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import model from './model';
import view from './view';
import {Rx} from '@cycle/core';

const DIALOGUE_NAME = `molecule-InputContainer`;

function InputContainer({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id, dialogueName: DIALOGUE_NAME});
  const state$ = model({props$, actions, dialogueName: DIALOGUE_NAME});
  const addOns$ = state$.map(
    (state) => {
      const {addOns} = state;

      return addOns ?
        addOns.map(
          (addOnFunc) => addOnFunc ?
            addOnFunc({
              DOM, props$: Rx.Observable.just(assign({}, state)),
            }).DOM :
            addOnFunc
        ) :
        [];
    }
  );

  return {
    DOM: view({state$, id, addOns$}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default InputContainer;
