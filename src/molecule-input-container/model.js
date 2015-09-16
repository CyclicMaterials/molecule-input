import assign from 'fast.js/object/assign';

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.isFocused$,
    actions.value$,
    (props, isFocused, value) => assign({}, props, {
      dialogueName, isFocused, value,
    })
  );
}

export default model;
