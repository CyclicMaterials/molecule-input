/** @jsx hJSX */
/* eslint-disable */

import InputCharCounter from './../InputCharCounter/index';
import InputContainer from './index';
import test from 'tape';
import toHTML from 'vdom-to-html';
import {hJSX, mockDOMResponse} from '@cycle/dom'; // eslint-disable-line
import {Rx} from '@cycle/core';

const COMPONENT = `InputContainer`;
let testDescription = ``;

testDescription = `${COMPONENT} should be a function`;
test(testDescription, (assert) => {
  assert.equal(typeof InputContainer, `function`,
    `Failed: ${testDescription}`);
  assert.end();
});

testDescription = `${COMPONENT} should output DOM`;
test(testDescription, (assert) => {
  const props = {};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
      <div className={`molecule-InputContainer`}>
        <div className={`molecule-InputContainer_floatedLabelPlaceholder atom-Typography--caption`}>&nbsp;</div>
        <div className={`molecule-InputContainer_inputContent atom-FlexLayout--horizontal atom-FlexLayout--end`}>
          <div className={`molecule-InputContainer_labelAndInputContainer atom-FlexLayout_flex atom-Layout--relative atom-Typography--subhead`}></div>
        </div>
        <div className={`molecule-InputContainer_underline`}>
          <div className={`molecule-InputContainer_unfocusedLine atom-Layout--fit`}></div>
          <div className={`molecule-InputContainer_focusedLine atom-Layout--fit`}></div>
        </div>
      </div>),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with add-ons`;
test(testDescription, (assert) => {
  const addOn = function addOn() {
    return {
      // mockDOMResponse won’t render this!
      DOM: Rx.Observable.just(<div>addOn</div>),
    };
  };
  const props = {
    addOns: [addOn],
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
      <div className={`molecule-InputContainer`}>
        <div className={`molecule-InputContainer_floatedLabelPlaceholder atom-Typography--caption`}>&nbsp;</div>
        <div className={`molecule-InputContainer_inputContent atom-FlexLayout--horizontal atom-FlexLayout--end`}>
          <div className={`molecule-InputContainer_labelAndInputContainer atom-FlexLayout_flex atom-Layout--relative atom-Typography--subhead`}></div>
        </div>
        <div className={`molecule-InputContainer_underline`}>
          <div className={`molecule-InputContainer_unfocusedLine atom-Layout--fit`}></div>
          <div className={`molecule-InputContainer_focusedLine atom-Layout--fit`}></div>
        </div>
        <div className={`molecule-InputContainer_addOnContent`}></div>
      </div>),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM without floated label placeholder when label float is disabled`;
test(testDescription, (assert) => {
  const props = {
    disableLabelFloat: true,
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
        <div className={`molecule-InputContainer`}>
          <div className={`molecule-InputContainer_inputContent atom-FlexLayout--horizontal atom-FlexLayout--end`}>
            <div className={`molecule-InputContainer_labelAndInputContainer atom-FlexLayout_flex atom-Layout--relative atom-Typography--subhead`}></div>
          </div>
          <div className={`molecule-InputContainer_underline`}>
            <div className={`molecule-InputContainer_unfocusedLine atom-Layout--fit`}></div>
            <div className={`molecule-InputContainer_focusedLine atom-Layout--fit`}></div>
          </div>
        </div>),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with label and input when set`;
test(testDescription, (assert) => {
  const props = {
    label: <label>label</label>,
    input: <input/>,
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
        <div className={`molecule-InputContainer`}>
          <div className={`molecule-InputContainer_floatedLabelPlaceholder atom-Typography--caption`}>&nbsp;</div>
          <div className={`molecule-InputContainer_inputContent atom-FlexLayout--horizontal atom-FlexLayout--end`}>
            <div className={`molecule-InputContainer_labelAndInputContainer atom-FlexLayout_flex atom-Layout--relative atom-Typography--subhead`}>
              <label>label</label>
              <input/>
            </div>
          </div>
          <div className={`molecule-InputContainer_underline`}>
            <div className={`molecule-InputContainer_unfocusedLine atom-Layout--fit`}></div>
            <div className={`molecule-InputContainer_focusedLine atom-Layout--fit`}></div>
          </div>
        </div>),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with persisted label float when set`;
test(testDescription, (assert) => {
  const props = {
    persistLabelFloat: true,
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
        <div className={`molecule-InputContainer is-floatedLabel`}>
          <div className={`molecule-InputContainer_floatedLabelPlaceholder atom-Typography--caption`}>&nbsp;</div>
          <div className={`molecule-InputContainer_inputContent atom-FlexLayout--horizontal atom-FlexLayout--end`}>
            <div className={`molecule-InputContainer_labelAndInputContainer atom-FlexLayout_flex atom-Layout--relative atom-Typography--subhead`}></div>
          </div>
          <div className={`molecule-InputContainer_underline`}>
            <div className={`molecule-InputContainer_unfocusedLine atom-Layout--fit`}></div>
            <div className={`molecule-InputContainer_focusedLine atom-Layout--fit`}></div>
          </div>
        </div>),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});
