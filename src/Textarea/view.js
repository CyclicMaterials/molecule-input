/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({id, state$, inputContainerDOM}) {
  return state$.combineLatest(
    inputContainerDOM,
    ({dialogueName}, inputContainerVTree) => {
      return (// eslint-disable-line
        <div
          className={`${id} ${dialogueName}`}>
          {inputContainerVTree}
        </div>
      );
    }
  );
}

export default view;
