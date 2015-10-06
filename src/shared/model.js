import {merge} from 'ramda';

function model({props$, dialogueName}) {
  return props$.map((props) => merge(props, {dialogueName}));
}

export default model;
