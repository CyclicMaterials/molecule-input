/* eslint-disable */

import InputCharCounter from './../InputCharCounter/index';
import InputContainer, {COMPONENT_NAME} from './index';
import test from 'tape';
import toHTML from 'vdom-to-html';
import {decode} from 'ent';
import {h, mockDOMResponse} from '@cycle/dom'; // eslint-disable-line
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
    assert.looseEqual(toHTML(vtree), toHTML(
      h(`div.${COMPONENT_NAME}`, [
        h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
        h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
          h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
        ),
        h(`div.${COMPONENT_NAME}_underline`, [
          h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
          h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
        ])
      ])),
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
      DOM: Rx.Observable.just(h(`div`, `addOn`)),
    };
  };
  const props = {
    addOns: [addOn],
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(toHTML(vtree), toHTML(
      h(`div.${COMPONENT_NAME}`, [
        h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
        h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
          h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
        ),
        h(`div.${COMPONENT_NAME}_underline`, [
          h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
          h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
        ]),
        h(`div.${COMPONENT_NAME}_addOnContent`)
      ])),
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
        h(`div.${COMPONENT_NAME}`, [
          h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${COMPONENT_NAME}_underline`, [
            h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
            h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with label and input when set`;
test(testDescription, (assert) => {
  const props = {
    label: h(`label`, `label`),
    input: h(`input`)
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.equal(toHTML(vtree), toHTML(
        h(`div.${COMPONENT_NAME}`, [
          h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label`, `label`),
              h(`input`)
            ])
          ),
          h(`div.${COMPONENT_NAME}_underline`, [
            h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
            h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
          ])
        ])),
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
        h(`div.${COMPONENT_NAME}.is-floatedLabel`, [
          h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${COMPONENT_NAME}_underline`, [
            h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
            h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with prefix when set`;
test(testDescription, (assert) => {
  const props = {
    prefix: `$`
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(toHTML(vtree), toHTML(
        h(`div.${COMPONENT_NAME}`, [
          h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
              h(`div.${COMPONENT_NAME}_prefix.atom-Typography--subhead`, `$`),
              h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
            ]
          ),
          h(`div.${COMPONENT_NAME}_underline`, [
            h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
            h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT} should output DOM with suffix when set`;
test(testDescription, (assert) => {
  const props = {
    suffix: `@email.com`
  };
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = InputContainer({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(toHTML(vtree), toHTML(
        h(`div.${COMPONENT_NAME}`, [
          h(`div.${COMPONENT_NAME}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${COMPONENT_NAME}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
              h(`div.${COMPONENT_NAME}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`),
              h(`div.${COMPONENT_NAME}_suffix.atom-Typography--subhead`, `@email.com`)
            ]
          ),
          h(`div.${COMPONENT_NAME}_underline`, [
            h(`div.${COMPONENT_NAME}_unfocusedLine.atom-Layout--fit`),
            h(`div.${COMPONENT_NAME}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});
