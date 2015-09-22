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
  const vtree$s = [

    /* TEXT INPUT */

    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `label`,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `password`, type: `password`,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `label (noLabelFloat)`, noLabelFloat: true,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `disabled`, isDisabled: true,
      }),
    }).DOM,

    /* TEXTAREA */

    moleculeTextarea({
      DOM, props$: Rx.Observable.just({
        label: `textarea label`,
      }),
    }).DOM,
    moleculeTextarea({
      DOM, props$: Rx.Observable.just({
        label: `textarea with rows and maxRows`,
        rows: 3,
        maxRows: 4,
      }),
    }).DOM,

    /* VALIDATION */

    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `input validates on blur (required, autoValidate)`,
        required: true,
        autoValidate: true,
        errorMessage: `needs some text!`,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `only type letters (autoValidate)`,
        autoValidate: true,
        pattern: `[a-zA-Z]*`,
        errorMessage: `letters only!`,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: actions.validate$.map(
        (validate) => ({
          label: `only type letters (required, no autoValidate)`,
          required: true,
          pattern: `[a-zA-Z]*`,
          errorMessage: `letters only, required input!`,
          validate,
        })
      ),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `password only letters, numbers and underscore`,
        type: `password`,
        required: true,
        pattern: `^[a-zA-Z][a-zA-Z0-9_]{3,14}$`,
        autoValidate: true,
        maxLength: 15,
        errorMessage: `Must start with a letter. Min. 4 chars. Max. 15 chars.`,
      }),
    }).DOM,

    /* CHARACTER COUNTER */

    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `label`, charCounter: true,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `at most 10 letters`,
        charCounter: true,
        autoValidate: true,
        pattern: `[a-zA-Z]*`,
        maxLength: 10,
        errorMessage: `letters only!`,
      }),
    }).DOM,
    moleculeTextarea({
      DOM, props$: Rx.Observable.just({
        label: `textarea`, charCounter: true,
      }),
    }).DOM,

    /* PREFIXES AND SUFFIXES */

    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `total`, type: `number`, prefix: `$`, className: `short`,
      }),
    }).DOM,
    moleculeInput({
      DOM, props$: Rx.Observable.just({
        label: `username`, suffix: `@email.com`, className: `short`,
      }),
    }).DOM,
  ];

  return {
    DOM: view({state$, id}, ...vtree$s),
    id,
    state$: state$.map((state) => assign({}, state)),
  };
}

export default demo;
