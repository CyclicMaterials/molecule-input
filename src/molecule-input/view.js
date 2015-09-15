/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {DIALOGUE_NAME} from '.';
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from '../molecule-input-container/index';
import renderLabel from '../shared/renderLabel.js';

function renderInput(type, isDisabled) {
  return (// eslint-disable-line
    <input
      className={`${DIALOGUE_NAME}_input`} type={type} disabled={isDisabled}/>
  );
}

function makeInputContainer(DOM, state$) {
  return state$.map(
    (state) => {
      const {label, type, isDisabled, isNoFloatingLabel} = state;

      return moleculeInputContainer({
        DOM, props$: Rx.Observable.just({
          label: renderLabel(DIALOGUE_NAME, label),
          input: renderInput(type, isDisabled),
          isNoFloatingLabel,
          isDisabled,
        }),
      });
    }
  );
}

function view({DOM, state$, id}) {
  return makeInputContainer(DOM, state$)
    .map((inputContainer) => inputContainer.DOM)
    .combineLatest(state$, (inputContainerVTree, state) => {
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
