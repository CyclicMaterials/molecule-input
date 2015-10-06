import {Rx} from '@cycle/core';

function model({dialogueName}) {
  return Rx.Observable.just({dialogueName});
}

export default model;
