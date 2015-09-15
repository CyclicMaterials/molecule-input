function model({props$, actions}) {
  return props$.combineLatest(
    actions.isFocused$,
    actions.value$,
    (props, isFocused, value) => {
      props.isFocused = isFocused;
      props.value = value;

      return props;
    }
  );
}

export default model;
