/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {DIALOGUE_NAME} from './index';
import combineClassNames from '@cyclic/util-combine-class-names';

function view({id, state$, inputContainerDOM}) {
  return state$.combineLatest(
    inputContainerDOM,
    (state, inputContainerVTree) => {
      return (// eslint-disable-line
        <div
          className={combineClassNames(id, DIALOGUE_NAME, state.className)}>
          {inputContainerVTree}
        </div>
      );
    }
  );
}

export default view;
