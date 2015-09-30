import {Rx} from '@cycle/core';
import {getInputElement} from './dom-query';

function intent({DOM, id}) {
  const dialogueSelector = `.${id}`;
  const inputElement$ = getInputElement({DOM, id});
  const blurred$ = DOM.select(dialogueSelector).events(`blur`, true);

  return {
    highlight$: Rx.Observable.merge(
      DOM.select(dialogueSelector).events(`focus`, true).map(() => true),
      blurred$.map(() => false)
    ).startWith(false),

    lostHighlight: blurred$.map(() => true).startWith(false),

    inputValue$: inputElement$
      .filter(element => !!element)
      .map(element => element.value)
      .merge(
        DOM.select(dialogueSelector).events(`input`)
          .map(e => e.target.value)
    ).startWith(``),
  };
}

export default intent;
