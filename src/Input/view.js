/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({state$, id}) {
  return state$.map(
    (state) => {
      const {
        dialogueName,
        isDisabled,
        maxLength,
        pattern,
        required,
        type} = state;

      return (// eslint-disable-line
        <div className={`${id} ${dialogueName}`}>
          <input
            className={`${dialogueName}_input`}
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
