/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {DIALOGUE_NAME} from '../molecule-textarea.js';
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from '../molecule-input-container.js';
import atomAutogrowTextarea from '@cyclic/atom-autogrow-textarea';
import renderLabel from '../shared/renderLabel.js';

function makeInputContainer(DOM, state$) {
  return state$.combineLatest(
    atomAutogrowTextarea({DOM, props$: state$}).DOM,
    (state, textareaVTree) => {
      const {label, isNoFloatingLabel, isDisabled} = state;

      return moleculeInputContainer({
        DOM, props$: Rx.Observable.just({
          label: renderLabel(DIALOGUE_NAME, label),
          input: textareaVTree,
          isNoFloatingLabel,
          isDisabled,
        }),
      });
    }
  );
}

function view({DOM, state$, id}) {
  return makeInputContainer(DOM, state$)
    .map(inputContainer => inputContainer.DOM)
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
