import {merge} from 'ramda';

function model({componentName, props$}) {
  return props$.map((props) => merge(props, {componentName}));
}

export default model;
