/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({id, state$, inputContainerDOM}) {
  return state$.combineLatest(
    inputContainerDOM,
    ({componentName}, inputContainerVTree) => {
      return (// eslint-disable-line
        <div
          className={`${id} ${componentName}`}>
          {inputContainerVTree}
        </div>
      );
    }
  );
}

export default view;
