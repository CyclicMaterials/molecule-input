import assign from 'fast.js/object/assign';

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.areaNumber$,
    actions.groupNumber$,
    actions.serialNumber$,
    (props, ...ssnParts) => {
      const [areaNumber, groupNumber, serialNumber] = ssnParts;

      const bindValue =
        `${areaNumber.trim()}-${groupNumber.trim()}-${serialNumber.trim()}`;

      return assign({}, props, {dialogueName, bindValue});
    }
  );
}

export default model;
