/* eslint max-nested-callbacks: 0, max-len: 0 */
/* global describe, it */
import chai from 'chai';
const expect = chai.expect;
chai.use(require(`chai-virtual-dom`));
import InputContainer, {COMPONENT_CLASS as INPUTCONTAINER_CLASS} from './index';
import Rx from 'rx';
import {h, mockDOMResponse} from '@cycle/dom';
import {decode} from 'ent';

describe(`InputContainer`, () => {
  it(`should be a function`, () => {
    expect(InputContainer).to.be.a(`function`);
  });

  it(`should output DOM`, (done) => {
    const props = {};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  it(`should output DOM with add-ons`, (done) => {
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
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
          h(`div.${INPUTCONTAINER_CLASS}_addOnContent`),
        ])
      );
      done();
    });
  });

  it(`should output DOM without floated label placeholder when label float is disabled`, (done) => {
    const props = {
      disableLabelFloat: true,
    };
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  it(`should output DOM with label and input when set`, (done) => {
    const props = {
      label: h(`label`, `label`),
      input: h(`input`),
    };
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label`, `label`),
              h(`input`),
            ])
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  it(`should output DOM with persisted label float when set`, (done) => {
    const props = {
      persistLabelFloat: true,
    };
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}.is-floatedLabel`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`)
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  it(`should output DOM with prefix when set`, (done) => {
    const props = {
      prefix: `$`,
    };
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
              h(`div.${INPUTCONTAINER_CLASS}_prefix.atom-Typography--subhead`, `$`),
              h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`),
            ]
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  it(`should output DOM with suffix when set`, (done) => {
    const props = {
      suffix: `@email.com`,
    };
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputContainer = InputContainer({DOM: DOMSource, id: ``, props$});
    inputContainer.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUTCONTAINER_CLASS}`, [
          h(`div.${INPUTCONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUTCONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`, [
              h(`div.${INPUTCONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`),
              h(`div.${INPUTCONTAINER_CLASS}_suffix.atom-Typography--subhead`, `@email.com`),
            ]
          ),
          h(`div.${INPUTCONTAINER_CLASS}_underline`, [
            h(`div.${INPUTCONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUTCONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });
});
