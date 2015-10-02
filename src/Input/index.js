import {func, string, object} from 'categories-js';
import {Rx} from '@cycle/core';
import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import propsDef from './props';
import model from './../shared/model';
import view from './view';
import makeInputContainer from './../shared/makeInputContainer';

const DIALOGUE_NAME = `molecule-Input`;

function predicateObject(sources) {
  const obj = object(sources.obj || assign({}, sources.obj));
  const defs = object(sources.defs);
  const DEFAULT_PREDICATE_KEY = `type`;
  const predicateKey = string(sources.predicateKey || DEFAULT_PREDICATE_KEY);

  Object.keys(defs).map((key) => {
    const prop = obj[key];
    const def = defs[key];
    const predicate = func(typeof def === `object` ?
      def[predicateKey] :
      def);
    try {
      obj[key] = prop !== void 0 ?
        predicate(prop) :
        def.default;
    } catch (e) {
      throw new TypeError(`'${key}' ${predicateKey}: ${e.message}`);
    }
  });

  return obj;
}

function Input(sources) {
  const DOM = object(sources.DOM);
  const props$ = object(sources.props$ || Rx.Observable.just({}))
    .map((props) => predicateObject({obj: assign({}, props), defs: propsDef}));
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
