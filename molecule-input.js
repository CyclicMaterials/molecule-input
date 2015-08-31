/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {combineClassNames} from './functions.js';
import moleculeInputContainer from './molecule-input-container.js';

const DIALOGUE_NAME = `molecule-Input`;

function intent(DOM) {
  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(`INPUT`).events(`focus`).map(() => true),
      DOM.select(`INPUT`).events(`blur`).map(() => false)
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
  const label$ = props$.map(
    (props) => {
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
    () => {
      return (// eslint-disable-line
        <input
          className={combineClassNames(namespace, `${DIALOGUE_NAME}_input`)}/>
      );
    }
  );

  const inputContainer$ = state$.map(
    state => {
      const {isFocused} = state;

      const spec = {
        label$,
        input$,
        props$: Rx.Observable.just({
          isFocused,
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
      (inputContainerVTree) => {
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
  const actions = intent(DOM);
  const state$ = model(actions);

  return {
    DOM: view({state$, props$, namespace}),
  };
}

export default moleculeInput;
