/** @jsx hJSX */

import cuid from 'cuid';
import assign from 'fast.js/object/assign';
import intent from './intent';
import model from './model';
import view from './view';
import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInput from '../src/molecule-input/index';
import moleculeTextarea from '../src/molecule-textarea/index';

const DIALOGUE_NAME = `page-Demo`;

function demo({DOM}) {
  const id = cuid();
  const actions = intent({DOM, id, dialogueName: DIALOGUE_NAME});
  const state$ = model({actions, dialogueName: DIALOGUE_NAME});

  const textInputLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`,
  })});

  const textInputPassword = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `password`, type: `password`,
  })});

  const textInputIsNoFloatingLabel =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `label (noLabelFloat)`, noLabelFloat: true,
    })});

  const textInputIsDisabled =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `disabled`, isDisabled: true,
    })});

  const textareaLabel =
    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `textarea label`,
    })});

  const validationInputIsRequiredIsAutoValidating =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `input validates on blur (required, autoValidate)`,
      required: true,
      autoValidate: true,
      errorMessage: `needs some text!`,
    })});

  const validationInputIsAutoValidatingPattern =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `only type letters (autoValidate)`,
      autoValidate: true,
      pattern: `[a-zA-Z]*`,
      errorMessage: `letters only!`,
    })});

  const validationInputIsRequiredPattern =
    moleculeInput({DOM, props$: actions.validate$.map(
      (validate) => ({
        label: `only type letters (required, no autoValidate)`,
        required: true,
        pattern: `[a-zA-Z]*`,
        errorMessage: `letters only, required input!`,
        validate,
      })
    )});

  const vtree$s = [
    textInputLabel.DOM,
    textInputPassword.DOM,
    textInputIsNoFloatingLabel.DOM,
    textInputIsDisabled.DOM,
    textareaLabel.DOM,
    validationInputIsRequiredIsAutoValidating.DOM,
    validationInputIsAutoValidatingPattern.DOM,
    validationInputIsRequiredPattern.DOM];

  return {
    DOM: view({state$, id}, ...vtree$s),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export default demo;
