/* eslint max-nested-callbacks: 0, max-len: 0 */
/* global describe, it */
import chai from 'chai';
const expect = chai.expect;
chai.use(require(`chai-virtual-dom`));
import Textarea, {COMPONENT_CLASS as TEXTAREA_CLASS}
  from './index';
import {COMPONENT_CLASS as INPUT_CONTAINER_CLASS}
  from './../InputContainer/index';
import Rx from 'rx';
import {h, mockDOMResponse} from '@cycle/dom';
import {decode} from 'ent';

describe(`Textarea`, () => {
  it(`should be a function`, () => {
    expect(Textarea).to.be.a(`function`);
  });

  it(`should output DOM`, (done) => {
    const props = {};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const input = Textarea({DOM: DOMSource, id: ``, props$});
    input.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_CONTAINER_CLASS}`, [
          h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
          h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
            h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
              h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
              h(`div.${TEXTAREA_CLASS}`),
            ])
          ),
          h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
            h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
            h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
          ]),
        ])
      );
      done();
    });
  });

  //it(`should output DOM with autocapitalize set`, (done) => {
  //  const props = {autocapitalize: `words`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `words`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with autocomplete set`, (done) => {
  //  const props = {autocomplete: `on`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `on`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with autocorrect set`, (done) => {
  //  const props = {autocorrect: `on`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `on`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with autofocus set`, (done) => {
  //  const props = {autofocus: true};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                autofocus: true,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with charCounter set`, (done) => {
  //  const props = {charCounter: true};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //        h(`div.${INPUT_CONTAINER_CLASS}_addOnContent`),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with errorMessage set`, (done) => {
  //  const props = {errorMessage: `there was an error`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //        h(`div.${INPUT_CONTAINER_CLASS}_addOnContent`),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with isInvalid set`, (done) => {
  //  const props = {isInvalid: true};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with label set`, (done) => {
  //  const props = {label: `label`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, `label`),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with list set`, (done) => {
  //  const props = {list: `datalist`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                list: `datalist`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with max set`, (done) => {
  //  const props = {max: `5`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                max: `5`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with maxLength set`, (done) => {
  //  const props = {maxLength: 10};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                attributes: {maxlength: 10},
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with min set`, (done) => {
  //  const props = {min: `1`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                min: `1`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with name set`, (done) => {
  //  const props = {name: `fullname`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                name: `fullname`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with pattern set`, (done) => {
  //  const props = {pattern: `[a-zA-Z]*`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                pattern: `[a-zA-Z]*`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with readonly set`, (done) => {
  //  const props = {readonly: true};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                attributes: {readonly: true},
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with required set`, (done) => {
  //  const props = {required: true};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                required: true,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with size set`, (done) => {
  //  const props = {size: 10};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                size: 10,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with step set`, (done) => {
  //  const props = {step: `3`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                step: `3`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
  //
  //it(`should output DOM with type set`, (done) => {
  //  const props = {type: `number`};
  //  const props$ = Rx.Observable.just(props);
  //  const DOMSource = mockDOMResponse();
  //  const input = Textarea({DOM: DOMSource, id: ``, props$});
  //  input.DOM.elementAt(0).subscribe((vtree) => {
  //    expect(vtree).to.look.like(
  //      h(`div.${INPUT_CONTAINER_CLASS}`, [
  //        h(`div.${INPUT_CONTAINER_CLASS}_floatedLabelPlaceholder.atom-Typography--caption`, decode(`&nbsp;`)),
  //        h(`div.${INPUT_CONTAINER_CLASS}_inputContent.atom-FlexLayout--horizontal.atom-FlexLayout--end`,
  //          h(`div.${INPUT_CONTAINER_CLASS}_labelAndInputContainer.atom-FlexLayout_flex.atom-Layout--relative.atom-Typography--subhead`, [
  //            h(`label.${INPUT_CONTAINER_CLASS}_label`, {hidden: true}),
  //            h(`div.${TEXTAREA_CLASS}`,
  //              h(`input.${TEXTAREA_CLASS}_input`, {
  //                autocapitalize: `none`,
  //                autocomplete: `off`,
  //                autocorrect: `off`,
  //                type: `number`,
  //              })
  //            ),
  //          ])
  //        ),
  //        h(`div.${INPUT_CONTAINER_CLASS}_underline`, [
  //          h(`div.${INPUT_CONTAINER_CLASS}_unfocusedLine.atom-Layout--fit`),
  //          h(`div.${INPUT_CONTAINER_CLASS}_focusedLine.atom-Layout--fit`),
  //        ]),
  //      ])
  //    );
  //    done();
  //  });
  //});
});
