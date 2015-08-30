/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import moleculeInput from '../molecule-input.js';

function demo({DOM}) {
  const textInputDemoLabel = moleculeInput({DOM, props$: Rx.Observable.just({
    label: `label`,
  })}, `demo-TextInput--label`);

  return {
    DOM: Rx.Observable.combineLatest(
      textInputDemoLabel.DOM,
      (textInputDemoLabelVTree) => ( // eslint-disable-line
        <div>
          <h4>Text input</h4>
          <section>
            {textInputDemoLabelVTree}
          </section>
        </div>
      )
    ),
  };
}

export default demo;
