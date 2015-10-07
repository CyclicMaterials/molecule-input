/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({id, state$, textareaDOM}) {
  return state$.combineLatest(
    textareaDOM,
    ({componentName}, textarea) => {
      return (// eslint-disable-line
        <div className={`${id} ${componentName}`}>
          {textarea}
        </div>
      );
    }
  );
}

export default view;
