/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import cuid from 'cuid';
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from './molecule-input-container.js';

const DIALOGUE_NAME = `molecule-Input`;

function intent(DOM, id) {
  const selector = `.${id} .${DIALOGUE_NAME}_input`;

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(selector).events(`focus`).map(() => true),
      DOM.select(selector).events(`blur`).map(() => false)
    ).startWith(false),
    value$: DOM.select(selector).events(`input`)
      .map((e) => e.target.value)
      .startWith(``),
  };
}

function model(props$, actions) {
  const {isFocused$, value$} = actions;

  return props$.combineLatest(
    isFocused$,
    value$,
    (props, isFocused, value) => {
      const {className, label, type, isDisabled, isNoFloatingLabel} = props;

      return {
        className,
        isFocused,
        value,
        label,
        type,
        isDisabled,
        isNoFloatingLabel,
      };
    }
  );
}

function view({state$, id}) {
  const label$ = state$.map((state) => {
    const {label} = state;

    return (// eslint-disable-line
      <label
        className={`${DIALOGUE_NAME}_label`}
        hidden={!label}>
        {label}
      </label>
    );
  });

  const input$ = state$.map((state) => {
    const {type, isDisabled} = state;

    return (// eslint-disable-line
      <input
        className={`${DIALOGUE_NAME}_input`}
        type={type}
        disabled={isDisabled}/>
    );
  });

  const inputContainer$ = state$.combineLatest(
    label$,
    input$,
    (state, label, input) => {
      const {isNoFloatingLabel, isDisabled, isFocused, value} = state;

      const props$ = Rx.Observable.just({
        label,
        input,
        isNoFloatingLabel,
        isDisabled,
        isFocused,
        inputValue: value,
      });

      return moleculeInputContainer({props$});
    }
  );

  return inputContainer$
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

function moleculeInput({DOM, props$}) {
  const id = cuid();
  const actions = intent(DOM, id);
  const state$ = model(props$, actions);

  return {
    DOM: view({DOM, state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInput;
