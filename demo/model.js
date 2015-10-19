import {Rx} from '@cycle/core';

function model({componentClass}) {
  return Rx.Observable.just({componentClass});
}

export default model;
