/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';
import moleculeInputContainer from './molecule-input-container.js';

const DIALOGUE_NAME = `molecule-Input`;

function intent(DOM, optNamespace) {
  const namespace = optNamespace ? `.${optNamespace}` : ``;

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(`INPUT${namespace}`).events(`focus`).map(() => true),
      DOM.select(`INPUT${namespace}`).events(`blur`).map(() => false)
    ).startWith(false),
    value$: DOM.select(`INPUT${namespace}`).events(`input`)
      .map(e => e.target.value)
      .startWith(``),
  };
}

function model(actions) {
  const {isFocused$, value$} = actions;

  return Rx.Observable.combineLatest(
    isFocused$,
    value$,
    (isFocused, value) => ({isFocused, value})
  );
}

function view({DOM, state$, props$, namespace}) {
  const label$ = props$.map(
    props => {
      const {label} = props;

      return (// eslint-disable-line
        <label
          className={combineClassNames(namespace, `${DIALOGUE_NAME}_label`)}
          hidden={!label}>
          {label}
        </label>
      );
    }
  );

  const input$ = props$.map(
    props => {
      const {type, isDisabled} = props;

      return (// eslint-disable-line
        <input
          className={combineClassNames(namespace, `${DIALOGUE_NAME}_input`)}
          type={type}
          disabled={isDisabled}/>
      );
    }
  );

  const inputContainer$ = props$.combineLatest(
    state$,
    (props, state) => {
      const {isNoFloatingLabel, isDisabled} = props;
      const {isFocused, value} = state;

      const spec = {
        DOM,
        label$,
        input$,
        props$: Rx.Observable.just({
          isNoFloatingLabel,
          isDisabled,
          isFocused,
          inputValue: value,
        }),
      };

      return moleculeInputContainer(
        spec,
        namespace
      );
    }
  );

  return inputContainer$
    .map(inputContainer => inputContainer.DOM)
    .map(
      inputContainerVTree => {
        return (// eslint-disable-line
          <div
            className={combineClassNames(namespace, DIALOGUE_NAME)}>
            {inputContainerVTree}
          </div>
        );
      }
  );
}

function moleculeInput({DOM, props$}, optNamespace = ``) {
  const namespace = optNamespace.trim();

  const actions = intent(DOM, namespace);
  const state$ = model(actions);

  return {
    DOM: view({DOM, state$, props$, namespace}),
  };
}

export default moleculeInput;
