import {string, object} from 'categories-js';
import assign from 'fast.js/object/assign';

function model(sources) {
  const props$ = object(sources.props$);
  const dialogueName = string(sources.dialogueName);
  return props$.map((props) => assign({}, props, {dialogueName}));
}

export default model;
