import assign from 'fast.js/object/assign';
import InputContainer, {DIALOGUE_NAME} from './../InputContainer/index';
import InputError from './../InputError/index';
import InputCharCounter from './../InputCharCounter/index';
import renderLabel from './renderLabel.js';

function makeInputContainer({DOM, props$, input$}) {
  return InputContainer({
    DOM, props$: props$.combineLatest(
      input$,
      (props, inputVTree) => {
        const {errorMessage, charCounter} = props;

        return assign(
          {}, props, {
            label: renderLabel({
              dialogueName: DIALOGUE_NAME, label: props.label,
            }),
            input: inputVTree,
            addOns: [
              errorMessage ? InputError : void 0,
              charCounter ? InputCharCounter : void 0,
            ],
          }
        );
      }
    ),
  });
}

export default makeInputContainer;
