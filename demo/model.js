import Rx from 'rx';

function model({componentClass}) {
  return Rx.Observable.just({componentClass});
}

export default model;
