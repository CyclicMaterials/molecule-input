/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from './molecule-input-container.js';
import atomAutogrowTextarea, {DIALOGUE_NAME as atomAutogrowTextareaName}
  from '@cyclic/atom-autogrow-textarea';

const DIALOGUE_NAME = `molecule-Textarea`;

let cycleIdSuffix = 0;

function makeCycleId() {
  return `${DIALOGUE_NAME}-${cycleIdSuffix++}`;
}

function intent({DOM, cycleId}) {
  const selector = `.${cycleId}.${atomAutogrowTextareaName}`;

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(selector).events(`focus`, true).map(() => true),
      DOM.select(selector).events(`blur`, true).map(() => false)
    ).startWith(false),
    value$: DOM.select(selector).events(`input`)
      .map(e => e.target.value)
      .startWith(``),
  };
}

function model({props$, actions}) {
  const {isFocused$, value$} = actions;

  return props$.combineLatest(
    isFocused$,
    value$,
    (props, isFocused, value) => ({
      isFocused,
      value,
      label: props.label,
      isNoFloatingLabel: props.isNoFloatingLabel,
      isDisabled: props.isDisabled,
    })
  );
}

function view({DOM, state$, cycleId}) {
  const label$ = state$.map(
    (state) => {
      const {label} = state;

      return (// eslint-disable-line
        <label
          className={combineClassNames(cycleId, `${DIALOGUE_NAME}_label`)}
          hidden={!label}>
          {label}
        </label>
      );
    }
  );

  const textarea$ = state$.map(
    (state) => {
      return atomAutogrowTextarea(
        {DOM, props$: Rx.Observable.just(state), optCycleId: cycleId});
    }
  );

  const inputContainer$ = state$.combineLatest(
    textarea$,
    (state, textarea) => {
      const {isFocused, value, isNoFloatingLabel, isDisabled} = state;

      const spec = {
        DOM,
        label$,
        input$: textarea.DOM,
        props$: Rx.Observable.just({
          isNoFloatingLabel,
          isDisabled,
          isFocused,
          inputValue: value,
        }),
      };

      return moleculeInputContainer(spec, cycleId);
    }
  );

  return inputContainer$
    .map(inputContainer => inputContainer.DOM)
    .map(
      (inputContainerVTree) => {
        return (// eslint-disable-line
          <div
            className={combineClassNames(cycleId, DIALOGUE_NAME)}>
            {inputContainerVTree}
          </div>
        );
      }
  );
}

function moleculeTextarea({DOM, props$, optCycleId = makeCycleId()}) {
  const cycleId = optCycleId.trim();

  const actions = intent({DOM, cycleId});
  const state$ = model({props$, actions});

  return {
    DOM: view({DOM, state$, cycleId}),
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
