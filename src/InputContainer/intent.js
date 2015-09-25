import {Rx} from '@cycle/core';
import getInputElement from './getInputElement';

function intent({DOM, id}) {
  const dialogueSelector = `.${id}`;
  const inputElement$ = getInputElement(DOM, id);
  const blurred$ = DOM.select(dialogueSelector).events(`blur`, true);

  return {
    focused$: Rx.Observable.merge(
      DOM.select(dialogueSelector).events(`focus`, true).map(() => true),
      blurred$.map(() => false)
    ).startWith(false),

    blurred$: blurred$.map(() => true).startWith(false),

    value$: Rx.Observable.merge(
      inputElement$.filter(element => !!element).map(element => element.value),
      DOM.select(dialogueSelector).events(`input`)
        .map(e => e.target.value)
    ).startWith(``),
  };
}

export default intent;
