/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import ControlledInputHook from './../hooks/ControlledInputHook';

function view({state$, id}) {
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
