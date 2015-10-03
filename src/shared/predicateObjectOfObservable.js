import {func, string, object, instanceOf} from 'categories-js';
import assign from 'fast.js/object/assign';
import {Rx} from '@cycle/core';

function predicateObject(sources) {
  const obj = object(assign({}, sources.obj));
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

function predicateObjectOfObservable(sources) {
  const observable$ = instanceOf(Rx.Observable)(sources.observable$);
  const defs = object(sources.defs);

  return observable$.map((obj) => predicateObject({obj, defs}));
}

export default predicateObjectOfObservable;
