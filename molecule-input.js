/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInputContainer from './molecule-input-container.js';

const dialogueName = `molecule-Input`;

function intent(DOM) {
  return {
    isFocused$: Rx.Observable.merge(
      DOM.get(`INPUT`, `focus`).map(() => true),
      DOM.get(`INPUT`, `blur`).map(() => false)
    ).startWith(false),
  };
}

function model(actions) {
  const isFocused$ = actions.isFocused$;

  return Rx.Observable.combineLatest(
    isFocused$,
    isFocused => ({isFocused})
  );
}

function view({state$, props$, namespace}) {
  const classNameSeparator = ` `;

  const label$ = props$.map(
    (props) => {
      const {label} = props;

      return (// eslint-disable-line
        <label
          className=
            {[
              namespace,
              `${dialogueName}_label`,
            ].join(classNameSeparator).trim()}
          hidden={!label}>
          {label}
        </label>
      );
    }
  );

  const input$ = props$.map(
    () => {
      return (// eslint-disable-line
        <input
          className=
            {[
              namespace,
              `${dialogueName}_input`,
            ].join(classNameSeparator).trim()}/>
      );
    }
  );

  const inputContainer$ = state$.map(
    state => {
      const {isFocused} = state;

      return moleculeInputContainer({
        label$, input$, props$: Rx.Observable.just({
          isFocused,
        }),
      }, namespace);
    }
  );

  return inputContainer$
    .map(inputContainer => inputContainer.DOM)
    .map(
      (inputContainerVTree) => {
        return (// eslint-disable-line
          <div
            className={[
              namespace,
              dialogueName,
            ].join(classNameSeparator).trim()}>
            {inputContainerVTree}
          </div>
        );
      }
  );
}

function moleculeInput({DOM, props$}, optNamespace = ``) {
  const namespace = optNamespace.trim();
  const actions = intent(DOM);
  const state$ = model(actions);

  return {
    DOM: view({state$, props$, namespace}),
  };
}

export default moleculeInput;
