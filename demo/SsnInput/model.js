import {clone, merge} from 'ramda';

function model({props$, actions, dialogueName}) {
  return props$.combineLatest(
    actions.areaNumber$,
    actions.groupNumber$,
    actions.serialNumber$,
    (props, ...ssnParts) => {
      const [areaNumber, groupNumber, serialNumber] = ssnParts;

      const bindValue =
        `${areaNumber.trim()}-${groupNumber.trim()}-${serialNumber.trim()}`;

      return merge(clone(props), {dialogueName, bindValue});
    }
  );
}

export default model;
