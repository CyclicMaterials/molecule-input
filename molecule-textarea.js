/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import cuid from 'cuid';
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from './molecule-input-container.js';
import atomAutogrowTextarea, {DIALOGUE_NAME as atomAutogrowTextareaName}
  from '@cyclic/atom-autogrow-textarea';

const DIALOGUE_NAME = `molecule-Textarea`;

function intent({DOM, id}) {
  const selector = `.${id} .${atomAutogrowTextareaName}`;

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
      className: props.className,
      isFocused,
      value,
      label: props.label,
      isNoFloatingLabel: props.isNoFloatingLabel,
      isDisabled: props.isDisabled,
    })
  );
}

function view({DOM, state$, id}) {
  const label$ = state$.map(
    (state) => {
      const {label} = state;

      return (// eslint-disable-line
        <label
          className={`${DIALOGUE_NAME}_label`}
          hidden={!label}>
          {label}
        </label>
      );
    }
  );

  const textarea$ = state$.map(
    (state) => {
      const spec = {
        maxRows: state.maxRows,
        rows: state.rows,
      };
      return atomAutogrowTextarea({DOM, props$: Rx.Observable.just(spec)});
    }
  );

  const inputContainer$ = state$.combineLatest(
    label$,
    textarea$,
    (state, label, textarea) => {
      const {isFocused, value, isNoFloatingLabel, isDisabled} = state;

      const props$ = textarea.DOM.map((input) => ({
        label,
        input,
        isNoFloatingLabel,
        isDisabled,
        isFocused,
        inputValue: value,
      }));

      return moleculeInputContainer({props$});
    }
  );

  return inputContainer$
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

function moleculeTextarea({DOM, props$}) {
  const id = cuid();

  const actions = intent({DOM, id});
  const state$ = model({props$, actions});

  return {
    DOM: view({DOM, state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeTextarea;
