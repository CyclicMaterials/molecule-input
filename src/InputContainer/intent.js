import Rx from 'rx';
import {getInputElement} from './domQuery';

function intent({componentClass, DOM, id}) {
  const inputContainerSelector = `${id && `.` + id}.${componentClass}`;
  const inputElement$ = getInputElement({DOM, inputContainerSelector});
  const blurred$ = DOM.select(inputContainerSelector).events(`blur`, true);

  return {
    highlight$: Rx.Observable.merge(
      DOM.select(inputContainerSelector).events(`focus`, true).map(() => true),
      blurred$.map(() => false)
    ).startWith(false),

    lostHighlight: blurred$.map(() => true).startWith(false),

    inputValue$: inputElement$
      .filter(element => !!element)
      .map(element => element.value)
      .merge(
        DOM.select(inputContainerSelector).events(`input`)
          .map(e => e.target.value)
    ).startWith(``),
  };
}

export default intent;
