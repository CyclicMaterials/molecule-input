/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import cuid from 'cuid';
import combineClassNames from '@cyclic/util-combine-class-names';

const DIALOGUE_NAME = `molecule-InputContainer`;

function model(props$) {
  return props$;
}

function view({state$, id}) {
  return state$.map((state) => {
    const {
      className,
      label,
      input,
      isNoFloatingLabel,
      isDisabled,
      isFocused,
      inputValue} = state;

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
          id,
          DIALOGUE_NAME,
          className,
          containerClassMod)}>

        <div
          className={combineClassNames(
            `${DIALOGUE_NAME}_floatedLabelPlaceholder`,
            `atom-Typography--caption`
            )}>&nbsp;</div>

        <div
          className={combineClassNames(
            `${DIALOGUE_NAME}_inputContent`,
            inputContentClassMods,
            `atom-FlexLayout--horizontal`,
            `atom-FlexLayout--end`
          )}>
          <div
            className={combineClassNames(
              `${DIALOGUE_NAME}_labelAndInputContainer`,
              `atom-FlexLayout_flex`,
              `atom-Layout--relative`,
              `atom-Typography--subhead`
            )}>
            {label}
            {input}
          </div>
        </div>

        <div
          className={combineClassNames(
            `${DIALOGUE_NAME}_underline`,
            underlineClassMod
          )}>
          <div
            className={combineClassNames(
              `${DIALOGUE_NAME}_unfocusedLine`,
              `atom-Layout--fit`
            )}></div>
          <div
            className={combineClassNames(
              `${DIALOGUE_NAME}_focusedLine`,
              `atom-Layout--fit`
            )}></div>
        </div>

      </div>
    );
  });
}

function moleculeInputContainer({props$}) {
  const id = cuid();
  const state$ = model(props$);

  return {
    DOM: view({state$, id}),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default moleculeInputContainer;
