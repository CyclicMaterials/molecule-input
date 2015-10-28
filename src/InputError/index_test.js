/* eslint max-nested-callbacks: 0, max-len: 0 */
/* global describe, it */
import chai from 'chai';
const expect = chai.expect;
chai.use(require(`chai-virtual-dom`));
import InputError, {COMPONENT_CLASS as INPUT_ERROR_CLASS}
  from './index';
import Rx from 'rx';
import {h, mockDOMResponse} from '@cycle/dom';

describe(`InputError`, () => {
  it(`should be a function`, () => {
    expect(InputError).to.be.a(`function`);
  });

  it(`should output DOM`, (done) => {
    const props = {};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputError = InputError({DOM: DOMSource, id: ``, props$});
    inputError.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_ERROR_CLASS}.atom-Typography--caption`)
      );
      done();
    });
  });

  it(`should output DOM with isInvalid set`, (done) => {
    const props = {isInvalid: true};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputError = InputError({DOM: DOMSource, id: ``, props$});
    inputError.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_ERROR_CLASS}.atom-Typography--caption.is-invalid`)
      );
      done();
    });
  });

  it(`should output DOM with errorMessage set`, (done) => {
    const props = {errorMessage: `error message`};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputError = InputError({DOM: DOMSource, id: ``, props$});
    inputError.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_ERROR_CLASS}.atom-Typography--caption`, `error message`)
      );
      done();
    });
  });
});
