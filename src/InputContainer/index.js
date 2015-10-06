import cuid from 'cuid';
import decorator from './decorator';
import domQuery from './domQuery';
import intent from './intent';
import model from './model';
import props from './props';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from './../shared/predicate';
import {Rx} from '@cycle/core';

const COMPONENT_NAME = `molecule-InputContainer`;

function InputContainer(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const id = cuid();
  const actions = intent({DOM, id});
  const layout = domQuery({DOM, id, componentName: COMPONENT_NAME});
  const state$ = model(
    {props$, actions, layout, componentName: COMPONENT_NAME}
  );
  const decoration$ = decorator({state$, layout, actions});
  const addOns$ = state$.map(
    (state) => {
      const {addOns} = state;

      return addOns ?
        addOns.map(
          (addOnFunc) => addOnFunc ?
            addOnFunc({DOM, props$: Rx.Observable.just(clone(state))}).DOM :
            addOnFunc
        ) :
        [];
    }
  );

  return {
    DOM: view({state$, id, decoration$, addOns$}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {COMPONENT_NAME};

export default InputContainer;
