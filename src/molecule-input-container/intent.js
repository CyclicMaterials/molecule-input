import {Rx} from '@cycle/core';

function intent({DOM, id}) {
  const dialogueSelector = `.${id}`;
  const inputSelector = `.${id} INPUT`;
  const textareaSelector = `.${id} TEXTAREA`;

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(dialogueSelector).events(`focus`, true).map(() => true),
      DOM.select(dialogueSelector).events(`blur`, true).map(() => false)
    ).startWith(false),
    value$: Rx.Observable.merge(
      DOM.select(inputSelector).observable
        .filter(elements => elements.length > 0)
        .map(elements => elements[0].value)
        .first(),
      DOM.select(textareaSelector).observable
        .filter(elements => elements.length > 0)
        .map(elements => elements[0].value)
        .first(),
      DOM.select(dialogueSelector).events(`input`)
        .map(e => e.target.value)
    ).startWith(``),
  };
}

export default intent;
