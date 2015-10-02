/** @jsx hJSX */

import {string, object} from 'categories-js';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import ControlledInputHook from './../hooks/ControlledInputHook';

function view(sources) {
  const state$ = object(sources.state$);
  const id = string(sources.id);
  return state$.map(
    (state) => {
      const {
        dialogueName,
        isDisabled,
        maxLength,
        pattern,
        required,
        type,
        value} = state;

      return (// eslint-disable-line
        <div className={`${id} ${dialogueName}`}>
          <input
            className={`${dialogueName}_input`}
            data-hook={new ControlledInputHook(value)}
            disabled={isDisabled}
            pattern={pattern}
            required={required}
            type={type}
            attributes={{maxlength: maxLength}}/>
        </div>
      );
    }
  );
}

export default view;
