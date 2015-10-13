import {Rx} from '@cycle/core';

function getInputElement({DOM, id}) {
  const inputSelector = `.${id} INPUT`;
  const textareaSelector = `.${id} TEXTAREA`;

  return Rx.Observable.merge(
    DOM.select(inputSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .startWith(void 0),
    DOM.select(textareaSelector).observable
      .filter(elements => elements.length > 0)
      .map(elements => elements[0])
      .startWith(void 0)
  );
}

function domQuery({DOM, id, componentName}) {
  return {
    inputElement$: getInputElement({DOM, id}),

    floatLabelOffsetLeft$: DOM
      .select(`.${id} .${componentName}_labelAndInputContainer`).observable
      .filter(elements => elements.length > 0)
      .map(elements => `left: -${elements[0].offsetLeft}px;`)
      .startWith(`left: 0;`),
  };
}

export {getInputElement};

export default domQuery;
