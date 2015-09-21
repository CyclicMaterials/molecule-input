/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}) {
  return state$.map((state) => {
    const {dialogueName, className, charCounterStr} = state;

    return (// eslint-disable-line
      <div
        className={combineClassNames(
          id, dialogueName, className,
          `atom-Typography--caption`)}>
        <span>
          {charCounterStr}
        </span>
      </div>
    );
  });
}

export default view;
