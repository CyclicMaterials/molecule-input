/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map(
    (state) => {
      const {dialogueName, className, isDisabled, pattern, isRequired, type} =
        state;

      return (// eslint-disable-line
        <div className={combineClassNames(id, dialogueName, className)}>
          <input
            className={`${dialogueName}_input`}
            disabled={isDisabled}
            pattern={pattern}
            required={isRequired}
            type={type}/>
        </div>
      );
    }
  );
}

export default view;
