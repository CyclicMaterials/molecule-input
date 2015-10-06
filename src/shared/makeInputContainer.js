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

        return merge(props, {
            label: renderLabel({componentName: COMPONENT_NAME, label}),
            input: inputVTree,
            addOns: [
              isNil(errorMessage) ? errorMessage : InputError,
              or(isNil(charCounter), not(charCounter)) ?
                void 0 :
                InputCharCounter,
            ],
          }
        );
      }
    ).distinctUntilChanged(),
  });
}

export default makeInputContainer;
