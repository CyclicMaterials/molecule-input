/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map(({dialogueName, isInvalid, errorMessage}) => {
    const classNameMod = isInvalid ? `is-invalid` : ``;

    return (// eslint-disable-line
      <div
        className={combineClassNames(
          id, dialogueName,
          `atom-Typography--caption`,
          classNameMod)}>
        {errorMessage}
      </div>
    );
  });
}

export default view;
