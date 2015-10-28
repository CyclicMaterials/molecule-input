import Rx from 'rx';

function getInputElement({DOM, inputContainerSelector}) {
  const inputSelector = `${inputContainerSelector} INPUT`;
  const textareaSelector = `${inputContainerSelector} TEXTAREA`;

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

function domQuery({componentClass, DOM, id}) {
  const inputContainerSelector = `${id && `.` + id}.${componentClass}`;
  const inputElement$ = getInputElement({DOM, inputContainerSelector});
  const floatLabelOffsetLeft$ = DOM
    .select(
      `${inputContainerSelector} .${componentClass}_labelAndInputContainer`
    )
    .observable
    .filter(elements => elements.length > 0)
    .map(elements => `left: -${elements[0].offsetLeft}px;`)
    .startWith(`left: 0;`);

  return {inputElement$, floatLabelOffsetLeft$};
}

export {getInputElement};

export default domQuery;
