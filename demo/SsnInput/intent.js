function intent({DOM, id, componentClass}) {
  /* global console */
  return {
    areaNumber$: DOM.select(`.${id} .${componentClass}_areaNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    groupNumber$: DOM.select(`.${id} .${componentClass}_groupNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    serialNumber$: DOM.select(`.${id} .${componentClass}_serialNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),
  };
}

export default intent;
