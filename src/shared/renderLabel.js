import {h} from '@cycle/dom';

function renderLabel({componentName, label}) {
  return h(`label.${componentName}_label`, {hidden: !label}, label);
}

export default renderLabel;
