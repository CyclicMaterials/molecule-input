/* eslint max-nested-callbacks: 0, max-len: 0 */
/* global describe, it */
import chai from 'chai';
const expect = chai.expect;
chai.use(require(`chai-virtual-dom`));
import InputCharCounter, {COMPONENT_CLASS as INPUT_CHAR_COUNTER_CLASS}
  from './index';
import Rx from 'rx';
import {h, mockDOMResponse} from '@cycle/dom';

describe(`InputCharCounter`, () => {
  it(`should be a function`, () => {
    expect(InputCharCounter).to.be.a(`function`);
  });

  it(`should output DOM`, (done) => {
    const props = {};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputCharCounter = InputCharCounter({DOM: DOMSource, id: ``, props$});
    inputCharCounter.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_CHAR_COUNTER_CLASS}.atom-Typography--caption`, [
          h(`span`, `0`),
        ])
      );
      done();
    });
  });

  it(`should output DOM with value set`, (done) => {
    const props = {value: `a value of length 20`};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputCharCounter = InputCharCounter({DOM: DOMSource, id: ``, props$});
    inputCharCounter.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_CHAR_COUNTER_CLASS}.atom-Typography--caption`, [
          h(`span`, `20`),
        ])
      );
      done();
    });
  });

  it(`should output DOM with maxLength set`, (done) => {
    const props = {maxLength: 10};
    const props$ = Rx.Observable.just(props);
    const DOMSource = mockDOMResponse();
    const inputCharCounter = InputCharCounter({DOM: DOMSource, id: ``, props$});
    inputCharCounter.DOM.elementAt(0).subscribe((vtree) => {
      expect(vtree).to.look.like(
        h(`div.${INPUT_CHAR_COUNTER_CLASS}.atom-Typography--caption`, [
          h(`span`, `0/10`),
        ])
      );
      done();
    });
  });
});
