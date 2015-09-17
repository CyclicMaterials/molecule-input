import {Rx} from '@cycle/core';

function intent({DOM, id}) {
  const dialogueSelector = `.${id}`;
  const inputSelector = `.${id} INPUT`;
  const textareaSelector = `.${id} TEXTAREA`;

  const inputElement$ = Rx.Observable.merge(
    DOM.select(inputSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .first(),
    DOM.select(textareaSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .first()
  ).startWith(void 0);

  const isBlurred$ = DOM.select(dialogueSelector).events(`blur`, true);

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(dialogueSelector).events(`focus`, true).map(() => true),
      isBlurred$.map(() => false)
    ).startWith(false),

    isBlurred$: isBlurred$.map(() => true).startWith(false),

    value$: Rx.Observable.merge(
      inputElement$.filter(element => !!element).map(element => element.value),
      DOM.select(dialogueSelector).events(`input`)
        .map(e => e.target.value)
    ).startWith(``),

    inputElement$,
  };
}

export default intent;
