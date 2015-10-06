function intent({DOM, id, componentName}) {
  return {
    validate$: DOM.select(`.${id} .${componentName}_validateButton`)
      .events(`click`).map(() => true).startWith(false),
  };
}

export default intent;
