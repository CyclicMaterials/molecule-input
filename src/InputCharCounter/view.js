/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view({state$, id}) {
  return state$.map((state) => {
    const {dialogueName, charCounterStr} = state;

    return (// eslint-disable-line
      <div
        className={`${id} ${dialogueName} atom-Typography--caption`}>
        <span>
          {charCounterStr}
        </span>
      </div>
    );
  });
}

export default view;
