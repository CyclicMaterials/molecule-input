import {Rx} from '@cycle/core';

function model({componentName}) {
  return Rx.Observable.just({componentName});
}

export default model;
