/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInput from '../molecule-input.js';

function demo({DOM}) {
  const textInputDemoLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`,
  })}, `demo-TextInput--label`);

  const textInputDemoPassword = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `password`, type: `password`,
  })}, `demo-TextInput--password`);

  const textInputDemoNoFloatingLabel =
    moleculeInput({DOM, props$: Rx.Observable.just({
      label: `label (isNoFloatingLabel)`, isNoFloatingLabel: true,
    })}, `demo-TextInput--noFloatingLabel`);

  return {
    DOM: Rx.Observable.combineLatest(
      textInputDemoLabel.DOM,
      textInputDemoPassword.DOM,
      textInputDemoNoFloatingLabel.DOM,
      (
        textInputDemoLabelVTree,
        textInputDemoPasswordVTree,
        textInputDemoNoFloatingLabelVTree
      ) => ( // eslint-disable-line
        <div>
          <h4>Text input</h4>
          <section>
            {textInputDemoLabelVTree}
            {textInputDemoPasswordVTree}
            {textInputDemoNoFloatingLabelVTree}
          </section>
        </div>
      )
    ),
  };
}

export default demo;
