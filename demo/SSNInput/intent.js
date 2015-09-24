function intent({DOM, id, dialogueName}) {
  /* global console */
  return {
    areaNumber$: DOM.select(`.${id} .${dialogueName}_areaNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    groupNumber$: DOM.select(`.${id} .${dialogueName}_groupNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    serialNumber$: DOM.select(`.${id} .${dialogueName}_serialNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),
  };
}

export default intent;
