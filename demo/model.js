import {Rx} from '@cycle/core';
import assign from 'fast.js/object/assign';

function model({dialogueName}) {
  return Rx.Observable.just(assign({}, {dialogueName}));
}

export default model;
