import assign from 'fast.js/object/assign';
import moleculeInputContainer from './../molecule-input-container/index';
import moleculeInputError from './../molecule-input-error/index';
import moleculeInputCharCounter from './../molecule-input-char-counter/index';
import renderLabel from './renderLabel.js';

function makeMoleculeInputContainer({DOM, props$, input$}) {
  return moleculeInputContainer({
    DOM, props$: props$.combineLatest(
      input$,
      (props, inputVTree) => {
        const {errorMessage, charCounter} = props;

        return assign(
          {}, props, {
            label: renderLabel(props),
            input: inputVTree,
            addOns: [
              errorMessage ? moleculeInputError : void 0,
              charCounter ? moleculeInputCharCounter : void 0,
            ],
          }
        );
      }
    ),
  });
}

export default makeMoleculeInputContainer;
