import {merge} from 'ramda';

function model({props$, componentName}) {
  return props$.map((props) => merge(props, {componentName}));
}

export default model;
