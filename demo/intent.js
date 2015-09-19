function intent({DOM, id, dialogueName}) {
  return {
    validate$: DOM.select(`.${id} .${dialogueName}_validateButton`)
      .events(`click`).map(() => true).startWith(false),
  };
}

export default intent;
