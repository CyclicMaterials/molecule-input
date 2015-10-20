/** @jsx hJSX */
import cuid from 'cuid';
import decorator from './decorator';
import domQuery from './domQuery';
import intent from './intent';
import model from './model';
import props from './props';
import Rx from 'rx';
import view from './view';
import {clone} from 'ramda';
import {predicateObjectOfObservable} from '@cyclic/util-predicate';

const COMPONENT_CLASS = `molecule-InputContainer`;

function initAddOns({DOM, state$}) {
  return state$.map(
    (state) => {
      const {addOns} = state;

      return addOns.length > 0 ?
        addOns.map(
          (addOnFunc) => addOnFunc(
            {DOM, props$: Rx.Observable.just(clone(state))}
          ).DOM
        ) :
        [];
    }
  );
}

function InputContainer(sources) {
  const {DOM} = sources;
  const props$ = predicateObjectOfObservable(props)(sources.props$);
  const {id = cuid()} = sources;
  const actions = intent({DOM, id});
  const layout = domQuery({componentClass: COMPONENT_CLASS, DOM, id});
  const state$ = model(
    {actions, componentClass: COMPONENT_CLASS, layout, props$}
  );
  const decoration$ = decorator({actions, layout, state$});
  const addOn$s$ = initAddOns({DOM, state$});

  return {
    DOM: view({addOn$s$, decoration$, id, state$}),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export {COMPONENT_CLASS};

export default InputContainer;
