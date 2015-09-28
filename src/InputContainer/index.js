import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import domQuery from './dom-query';
import model from './model';
import decorator from './decorator';
import view from './view';
import {Rx} from '@cycle/core';

const DIALOGUE_NAME = `molecule-InputContainer`;

function InputContainer({DOM, props$}) {
  const id = cuid();
  const actions = intent({DOM, id});
  const layout = domQuery({DOM, id, dialogueName: DIALOGUE_NAME});
  const state$ = model({props$, actions, layout, dialogueName: DIALOGUE_NAME});
  const decoration$ = decorator({state$, layout, actions});
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
    DOM: view({state$, id, decoration$, addOns$}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default InputContainer;
