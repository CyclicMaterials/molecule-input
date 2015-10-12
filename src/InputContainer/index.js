import cuid from 'cuid';
import decorator from './decorator';
import domQuery from './domQuery';
import intent from './intent';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';
import {Rx} from '@cycle/core';

const COMPONENT_NAME = `molecule-InputContainer`;

function initAddOns({DOM, state$}) {
  return state$.map(
    (state) => {
      const {addOns} = state;

      return addOns.length > 0 ?
        addOns.map(
          (addOnFunc) => {
            if (typeof addOnFunc === `function`) {
              return addOnFunc(
                {DOM, props$: Rx.Observable.just(clone(state))}).DOM;
            }
          }
        ) :
        [];
    }
  );
}

function InputContainer(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const actions = intent({DOM, id});
  const layout = domQuery({componentName: COMPONENT_NAME, DOM, id});
  const state$ = model(
    {actions, componentName: COMPONENT_NAME, layout, props$}
  );
  const decoration$ = decorator({actions, layout, state$});
  const addOns$ = initAddOns({DOM, state$});

  return {
    DOM: view({addOns$, decoration$, id, state$}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {COMPONENT_NAME};

export default InputContainer;
