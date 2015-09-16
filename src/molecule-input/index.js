/** @jsx hJSX */

import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import model from './../shared/model';
import view from './../shared/view';
import moleculeInputContainer from './../molecule-input-container/index';
import renderLabel from './../shared/renderLabel.js';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

const DIALOGUE_NAME = `molecule-Input`;

function renderInput(type, isDisabled) {
  return (// eslint-disable-line
    <input
      className={`${DIALOGUE_NAME}_input`} type={type} disabled={isDisabled}/>
  );
}

function moleculeInput({DOM, props$}) {
  const id = cuid();
  const state$ = model({props$, dialogueName: DIALOGUE_NAME});

  const inputContainerDOM = moleculeInputContainer({
    DOM, props$: state$.map((state) => {
      const {dialogueName, label, type, isNoFloatingLabel, isDisabled} = state;

      return {
        label: renderLabel(dialogueName, label),
        input: renderInput(type, isDisabled),
        isNoFloatingLabel,
        isDisabled,
      };
    }),
  }).DOM;

  return {
    DOM: view({state$, id, inputContainerDOM}),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export {DIALOGUE_NAME};

export default moleculeInput;
