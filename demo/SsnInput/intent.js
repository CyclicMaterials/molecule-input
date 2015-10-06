function intent({DOM, id, componentName}) {
  /* global console */
  return {
    areaNumber$: DOM.select(`.${id} .${componentName}_areaNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    groupNumber$: DOM.select(`.${id} .${componentName}_groupNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),

    serialNumber$: DOM.select(`.${id} .${componentName}_serialNumber`)
      .events(`input`)
      .map(e => e.target.value).startWith(``),
  };
}

export default intent;
