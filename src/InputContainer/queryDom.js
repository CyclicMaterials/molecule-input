import getInputElement from './getInputElement';

function queryDom({DOM, id, dialogueName}) {
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

export default queryDom;
