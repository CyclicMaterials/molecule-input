import {merge} from 'ramda';

function model({props$, actions, componentClass}) {
  return props$.combineLatest(
    actions.areaNumber$,
    actions.groupNumber$,
    actions.serialNumber$,
    (props, ...ssnParts) => {
      const [areaNumber, groupNumber, serialNumber] = ssnParts;

      const bindValue =
        `${areaNumber.trim()}-${groupNumber.trim()}-${serialNumber.trim()}`;

      return merge(props, {componentClass, bindValue});
    }
  ).distinctUntilChanged();
}

export default model;
