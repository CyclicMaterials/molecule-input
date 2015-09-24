import assign from 'fast.js/object/assign';
import InputContainer from './../InputContainer/index';
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
            label: renderLabel(props),
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
