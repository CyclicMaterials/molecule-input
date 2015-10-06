import {isNil, mapObjIndexed, merge, type} from 'ramda';
import {Rx} from '@cycle/core';

/**
 * Returns a function that takes an object as argument. The function predicates
 * each property of the provided object with the matching properties
 * of `definitions`. If the value of a definition is a function, it will
 * be called as predicate taking the matching object property as argument.
 * If the definition value is an object, it will look for the predicate
 * function specified by `predicateKey` (defaults to `type`).
 * @param {Object} definitions Object of properties to match.
 * @param {String} predicateKey Optional name of the property specifying
 * the predicate.
 * @returns {Function} Takes the Object to predicate as argument.
 */
function predicateObject(definitions, predicateKey = `type`) {
  return (obj) => {
    const valueWithDefault = function valueWithDefault(v, k) {
      const predicate = type(v) === `Function` ? v : v[predicateKey];
      const prop = obj[k];
      try {
        return !isNil(prop) ?
          predicate(prop) :
          v.default;
      } catch (e) {
        throw new TypeError(`${k}: ${e.message}`);
      }
    };

    return merge(obj, mapObjIndexed(valueWithDefault, definitions));
  };
}

/**
 * Returns a function that takes an Observable as argument. The function maps
 * the items of the Observable and passes the item as argument
 * to `predicateFunc`
 * @param {Function} predicateFunc Function to receive items from Observable.
 * @returns {Function} Takes the Observable as argument whose items
 * to predicate.
 */
function predicateObservable(predicateFunc) {
  return (observable$) => {
    return observable$.map((item) => predicateFunc(item));
  };
}

/**
 * Returns a function that takes an Observable that emits Objects as argument.
 * @param {Object} definitions Object of properties to match.
 * @param {String} predicateKey Optional name of the property specifying
 * the predicate.
 * @returns {Function} Takes the Observable as argument whose objects
 * to predicate.
 */
function predicateObjectOfObservable(definitions, predicateKey = void 0) {
  return (observable$ = Rx.Observable.just({})) => {
    return predicateObservable(
      predicateObject(definitions, predicateKey)
    )(observable$);
  };
}

export {
  predicateObject,
  predicateObservable,
  predicateObjectOfObservable,
};
