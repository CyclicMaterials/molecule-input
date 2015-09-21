/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map(
    (state) => {
      const {
        dialogueName,
        className,
        isDisabled,
        maxLength,
        pattern,
        required,
        type} = state;

      return (// eslint-disable-line
        <div className={combineClassNames(id, dialogueName, className)}>
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
