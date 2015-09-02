/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInput from '../molecule-input.js';

function demo({DOM}) {
  const textInputLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`,
  })}, `demo-TextInput--label`);

  const textInputPassword = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `password`, type: `password`,
  })}, `demo-TextInput--password`);

  const textInputNoFloatingLabel =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `label (isNoFloatingLabel)`, isNoFloatingLabel: true,
    })}, `demo-TextInput--noFloatingLabel`);

  const textInputDisabled =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `disabled`, isDisabled: true,
    })}, `demo-TextInput--disabled`);

  return {
    DOM: Rx.Observable.combineLatest(
      textInputLabel.DOM,
      textInputPassword.DOM,
      textInputNoFloatingLabel.DOM,
      textInputDisabled.DOM,
      (
        textInputLabelVTree,
        textInputPasswordVTree,
        textInputNoFloatingLabelVTree,
        textInputDisabledVTree
      ) => ( // eslint-disable-line
        <div className={`template-DemoPages_sectionContainer isVertical`}>
          <h4>Text input</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textInputLabelVTree}
            {textInputPasswordVTree}
            {textInputNoFloatingLabelVTree}
            {textInputDisabledVTree}
          </section>
        </div>
      )
    ),
  };
}

export default demo;
