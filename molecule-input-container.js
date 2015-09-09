/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from 'util-combine-class-names';

const DIALOGUE_NAME = `molecule-InputContainer`;

function view({label$, input$, props$, namespace}) {
  return Rx.Observable.combineLatest(
    props$,
    label$,
    input$,
    (props, labelVTree, inputVTree) => {
      const {isNoFloatingLabel, isDisabled, isFocused, inputValue} = props;

      const containerClassMod = isDisabled ? `isDisabled` : ``;

      const hasInputContent = !!inputValue || inputValue === 0;

      const isLabelFloating = !isNoFloatingLabel && hasInputContent;

      const inputContentClassMods = [];

      if (isLabelFloating) {
        inputContentClassMods.push(`isFloatingLabel`);
      }
      if (isLabelFloating && isFocused) {
        inputContentClassMods.push(`isHighlightedLabel`);
      }
      if (isNoFloatingLabel && hasInputContent) {
        inputContentClassMods.push(`isHiddenLabel`);
      }

      const underlineClassMod = isFocused ? `isHighlighted` : ``;

      return ( // eslint-disable-line
        <div
          className={combineClassNames(
            namespace,
            DIALOGUE_NAME,
            containerClassMod)}>

          <div
            className={combineClassNames(
              namespace,
              `${DIALOGUE_NAME}_floatedLabelPlaceholder`,
              `atom-Typography--caption`
              )}>&nbsp;</div>

          <div
            className={combineClassNames(
              namespace,
              `${DIALOGUE_NAME}_inputContent`,
              inputContentClassMods.join(` `),
              `atom-FlexLayout--horizontal`,
              `atom-FlexLayout--end`
            )}>
            <div
              className={combineClassNames(
                namespace,
                `${DIALOGUE_NAME}_labelAndInputContainer`,
                `atom-FlexLayout_flex`,
                `atom-Layout--relative`,
                `atom-Typography--subhead`
              )}>
              {labelVTree}
              {inputVTree}
            </div>
          </div>

          <div
            className={combineClassNames(
              namespace,
              `${DIALOGUE_NAME}_underline`,
              underlineClassMod
            )}>
            <div
              className={combineClassNames(
                namespace,
                `${DIALOGUE_NAME}_unfocusedLine`,
                `atom-Layout--fit`
              )}></div>
            <div
              className={combineClassNames(
                namespace,
                `${DIALOGUE_NAME}_focusedLine`,
                `atom-Layout--fit`
              )}></div>
          </div>

        </div>
      );
    }
  );
}

function moleculeInputContainer(
  {DOM, props$, label$, input$},
  optNamespace = ``
) {
  const namespace = optNamespace.trim();

  return {
    DOM: view({label$, input$, props$, namespace}),
  };
}

export default moleculeInputContainer;
