import {h} from '@cycle/dom';

function renderLabel({componentClass, label}) {
  return h(`label.${componentClass}_label`, {hidden: !label}, label);
}

export default renderLabel;
