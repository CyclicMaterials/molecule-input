function intent({DOM, id, componentClass}) {
  return {
    validate$: DOM.select(`.${id} .${componentClass}_validateButton`)
      .events(`click`).map(() => true).startWith(false),
  };
}

export default intent;
