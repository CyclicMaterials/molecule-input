/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInput from '../molecule-input.js';
import moleculeTextarea from '../molecule-textarea.js';

function demo({DOM}) {
  const textInputLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`,
  })});

  const textInputPassword = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `password`, type: `password`,
  })});

  const textInputNoFloatingLabel =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `label (isNoFloatingLabel)`, isNoFloatingLabel: true,
    })});

  const textInputDisabled =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `disabled`, isDisabled: true,
    })});

  const textareaLabel =
    moleculeTextarea({DOM, props$: Rx.Observable.just({
      label: `textarea label`,
    })});

  return {
    DOM: Rx.Observable.combineLatest(
      textInputLabel.DOM,
      textInputPassword.DOM,
      textInputNoFloatingLabel.DOM,
      textInputDisabled.DOM,
      textareaLabel.DOM,
      (
        textInputLabelVTree,
        textInputPasswordVTree,
        textInputNoFloatingLabelVTree,
        textInputDisabledVTree,
        textareaLabelVTree
      ) => ( // eslint-disable-line
        <div className={`template-DemoPages_sectionContainer isVertical`}>
          <h4>Text input</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textInputLabelVTree}
            {textInputPasswordVTree}
            {textInputNoFloatingLabelVTree}
            {textInputDisabledVTree}
          </section>

          <h4>Text area</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textareaLabelVTree}
          </section>
        </div>
      )
    ),
  };
}

export default demo;
