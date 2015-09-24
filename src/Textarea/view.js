/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({id, state$, inputContainerDOM}) {
  return state$.combineLatest(
    inputContainerDOM,
    (state, inputContainerVTree) => {
      return (// eslint-disable-line
        <div
          className={`${id} ${state.dialogueName}`}>
          {inputContainerVTree}
        </div>
      );
    }
  );
}

export default view;
