/** @jsx hJSX */

import {string, instanceOf} from 'categories-js';
import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

function view(sources) {
  const state$ = instanceOf(Rx.Observable)(sources.state$);
  const id = string(sources.id);

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
