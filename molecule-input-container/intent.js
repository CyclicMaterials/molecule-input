import {Rx} from '@cycle/core';

function intent({DOM, id}) {
  const inputSelector = `.${id} INPUT`;
  const textareaSelector = `.${id} TEXTAREA`;

  return {
    isFocused$: Rx.Observable.merge(
      DOM.select(inputSelector).events(`focus`).map(() => true),
      DOM.select(inputSelector).events(`blur`).map(() => false)
    ).merge(
      DOM.select(textareaSelector).events(`focus`).map(() => true),
      DOM.select(textareaSelector).events(`blur`).map(() => false)
    ).startWith(false),
    value$: DOM.select(`.${id}`).events(`input`)
      .map((e) => e.target.value)
      .startWith(``),
  };
}

export default intent;
