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

  /* TEXT INPUT */

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

  /* TEXTAREA */

  const textareaLabel =
    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `textarea label`,
    })});

  const textareaRowsMaxRows =
    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `textarea with rows and maxRows`,
      rows: 3,
      maxRows: 4,
    })});

  /* VALIDATION */

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

  /* CHARACTER COUNTER */

  const charCounterInputLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`, charCounter: true,
  })});

  const charCounterInputMaxLength = moleculeInput({
    DOM, props$: Rx.Observable.just({
      label: `at most 10 letters`,
      charCounter: true,
      autoValidate: true,
      pattern: `[a-zA-Z]*`,
      maxLength: 10,
      errorMessage: `letters only!`,
    }),
  });

  const charCounterTextarea =
    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `textarea`, charCounter: true,
    })});

  /* PREFIXES AND SUFFIXES */

  const prefixInputNumber = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `total`, type: `number`, prefix: `$`, className: `short`,
  })});

  const suffixInput = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `username`, suffix: `@email.com`, className: `short`,
  })});

  const vtree$s = [
    textInputLabel.DOM,
    textInputPassword.DOM,
    textInputIsNoFloatingLabel.DOM,
    textInputIsDisabled.DOM,
    textareaLabel.DOM,
    textareaRowsMaxRows.DOM,
    validationInputIsRequiredIsAutoValidating.DOM,
    validationInputIsAutoValidatingPattern.DOM,
    validationInputIsRequiredPattern.DOM,
    charCounterInputLabel.DOM,
    charCounterInputMaxLength.DOM,
    charCounterTextarea.DOM,
    prefixInputNumber.DOM,
    suffixInput.DOM,
  ];

  return {
    DOM: view({state$, id}, ...vtree$s),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export default demo;
