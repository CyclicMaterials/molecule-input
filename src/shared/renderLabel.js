/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function renderLabel({dialogueName, label}) {
  return (// eslint-disable-line
    <label className={`${dialogueName}_label`} hidden={!label}>{label}</label>
  );
}

export default renderLabel;
