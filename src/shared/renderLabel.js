/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function renderLabel({componentName, label}) {
  return (// eslint-disable-line
    <label className={`${componentName}_label`} hidden={!label}>{label}</label>
  );
}

export default renderLabel;
