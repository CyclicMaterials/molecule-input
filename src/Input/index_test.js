/* eslint-disable */

import {COMPONENT_CLASS as InputContainerClass} from './../InputContainer/index';
import Input, {COMPONENT_CLASS} from './index';
import test from 'tape';
import vdomToHtml from './../../test/adapters/vdomToHtml/index';
import {decode} from 'ent';
import {h, mockDOMResponse} from '@cycle/dom'; // eslint-disable-line
import {merge} from 'ramda';
import Rx from 'rx';

const SUT = Input;
const COMPONENT_NAME = `Input`;
let testDescription = ``;

testDescription = `${COMPONENT_NAME} should be a function`;
test(testDescription, (assert) => {
  assert.equal(typeof SUT, `function`,
    `Failed: ${testDescription}`);
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM`;
test(testDescription, (assert) => {
  const props = {};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
      h(`div.${InputContainerClass}`, [
        h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
        h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
          h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
            h(`label.${InputContainerClass}_label`, {hidden: true}),
            h(`div.${COMPONENT_CLASS}`,
              h(`input.${COMPONENT_CLASS}_input`, {
                autocapitalize: `none`,
                autocomplete: `off`,
                autocorrect: `off`,
              })
            )
          ])
        ),
        h(`div.${InputContainerClass}_underline`, [
          h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
          h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
        ])
      ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with autocapitalize set`;
test(testDescription, (assert) => {
  const props = {autocapitalize: `words`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `words`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with autocomplete set`;
test(testDescription, (assert) => {
  const props = {autocomplete: `on`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `on`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with autocorrect set`;
test(testDescription, (assert) => {
  const props = {autocorrect: `on`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `on`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with autofocus set`;
test(testDescription, (assert) => {
  const props = {autofocus: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  autofocus: true,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with charCounter set`;
test(testDescription, (assert) => {
  const props = {charCounter: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ]),
          h(`div.${InputContainerClass}_addOnContent`)
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with errorMessage set`;
test(testDescription, (assert) => {
  const props = {errorMessage: `there was an error`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ]),
          h(`div.${InputContainerClass}_addOnContent`)
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with isDisabled set`;
test(testDescription, (assert) => {
  const props = {isDisabled: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}.is-disabled`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  disabled: true,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with isInvalid set`;
test(testDescription, (assert) => {
  const props = {isInvalid: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with label set`;
test(testDescription, (assert) => {
  const props = {label: `label`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, `label`),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with list set`;
test(testDescription, (assert) => {
  const props = {list: `datalist`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  list: `datalist`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with max set`;
test(testDescription, (assert) => {
  const props = {max: `5`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  max: `5`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with maxLength set`;
test(testDescription, (assert) => {
  const props = {maxLength: 10};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  attributes: {maxlength: 10},
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with min set`;
test(testDescription, (assert) => {
  const props = {min: `1`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  min: `1`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with name set`;
test(testDescription, (assert) => {
  const props = {name: `fullname`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  name: `fullname`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with pattern set`;
test(testDescription, (assert) => {
  const props = {pattern: `[a-zA-Z]*`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  pattern: `[a-zA-Z]*`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with readonly set`;
test(testDescription, (assert) => {
  const props = {readonly: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  attributes: {readonly: true},
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with required set`;
test(testDescription, (assert) => {
  const props = {required: true};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  required: true,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with size set`;
test(testDescription, (assert) => {
  const props = {size: 10};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  size: 10,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with step set`;
test(testDescription, (assert) => {
  const props = {step: `3`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  step: `3`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});

testDescription = `${COMPONENT_NAME} should output DOM with type set`;
test(testDescription, (assert) => {
  const props = {type: `number`};
  const props$ = Rx.Observable.just(props);
  const DOMSource = mockDOMResponse();
  const input = SUT({DOM: DOMSource, id: ``, props$});
  input.DOM.elementAt(0).subscribe((vtree) => {
    assert.looseEqual(vdomToHtml(vtree), vdomToHtml(
        h(`div.${InputContainerClass}`, [
          h(`div.${InputContainerClass}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${InputContainerClass}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${InputContainerClass}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${InputContainerClass}_label`, {hidden: true}),
              h(`div.${COMPONENT_CLASS}`,
                h(`input.${COMPONENT_CLASS}_input`, {
                  autocapitalize: `none`,
                  autocomplete: `off`,
                  autocorrect: `off`,
                  type: `number`,
                })
              )
            ])
          ),
          h(`div.${InputContainerClass}_underline`, [
            h(`div.${InputContainerClass}_unfocusedLine.atom-Layout--fit`),
            h(`div.${InputContainerClass}_focusedLine.atom-Layout--fit`)
          ])
        ])),
      `Failed: ${testDescription}`
    );
  });
  assert.end();
});
