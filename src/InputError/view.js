/** @jsx hJSX */

import {string, boolean, instanceOf} from 'categories-js';
import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view(sources) {
  const state$ = instanceOf(Rx.Observable)(sources.state$);
  const id = string(sources.id);

  return state$.map((state) => {
    const dialogueName = string(state.dialogueName);
    const isInvalid = boolean(state.isInvalid);
    const errorMessage = string(state.errorMessage);

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
