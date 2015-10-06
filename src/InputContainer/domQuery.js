import {Rx} from '@cycle/core';

function getInputElement({DOM, id}) {
  const inputSelector = `.${id} INPUT`;
  const textareaSelector = `.${id} TEXTAREA`;

  return Rx.Observable.merge(
    DOM.select(inputSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .first(),
    DOM.select(textareaSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .first()
  ).startWith(void 0);
}

function domQuery({DOM, id, dialogueName}) {
  return {
    inputElement$: getInputElement({DOM, id}),

    floatLabelOffsetLeft$: DOM
      .select(`.${id} .${dialogueName}_labelAndInputContainer`).observable
      .filter(elements => elements.length > 0)
      .map(elements => `left: -${elements[0].offsetLeft}px;`)
      .first()
      .startWith(`left: 0;`),
  };
}

export {getInputElement};

export default domQuery;
