import {merge} from 'ramda';

function model({componentClass, props$}) {
  return props$.map((props) => merge(props, {componentClass}));
}

export default model;
