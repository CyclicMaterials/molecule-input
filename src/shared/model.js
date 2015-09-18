import assign from 'fast.js/object/assign';

function model({props$, dialogueName}) {
  return props$.map((props) => assign({}, props, {dialogueName}));
}

export default model;
