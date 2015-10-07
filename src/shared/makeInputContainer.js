import InputContainer, {COMPONENT_NAME} from './../InputContainer/index';
import InputError from './../InputError/index';
import InputCharCounter from './../InputCharCounter/index';
import renderLabel from './renderLabel.js';
import {isNil, merge, not, or} from 'ramda';

function makeInputContainer({DOM, input$, props$}) {
  return InputContainer({
    DOM, props$: props$.combineLatest(
      input$,
      (props, inputVTree) => {
        const {charCounter, errorMessage, label} = props;

        const addOns = [];
        if (not(isNil(errorMessage))) {
          addOns.push(InputError);
        }
        if (not(or(isNil(charCounter), not(charCounter)))) {
          addOns.push(InputCharCounter);
        }

        return merge(props, {
            label: renderLabel({componentName: COMPONENT_NAME, label}),
            input: inputVTree,
            addOns,
          }
        );
      }
    ).distinctUntilChanged(),
  });
}

export default makeInputContainer;
