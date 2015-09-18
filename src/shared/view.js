/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({id, state$, inputContainerDOM}) {
  return state$.combineLatest(
    inputContainerDOM,
    (state, inputContainerVTree) => {
      const {dialogueName, className} = state;

      return (// eslint-disable-line
        <div
          className={combineClassNames(id, dialogueName, className)}>
          {inputContainerVTree}
        </div>
      );
    }
  );
}

export default view;
