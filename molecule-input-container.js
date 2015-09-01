/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import R from 'ramda';
import {combineClassNames} from './functions.js';

const DIALOGUE_NAME = `molecule-InputContainer`;

const isVNodeOfTagName = R.curry(function isVNodeOfTagName(tagName, vnode) {
  return tagName === vnode.tagName;
});

const classNameProperty = R.prop(`className`);

const augmentVNodeWithClassNames = R.curry(
  function augmentVNodeWithClassNames(classNames, vnode) {
    const cloneVNode = Object.assign(vnode);

    cloneVNode.properties.className = combineClassNames(
      classNameProperty(vnode.properties),
      classNames
    );

    return cloneVNode;
  }
);

function view({label$, input$, props$, namespace}) {
  const isVNodeLabel = isVNodeOfTagName(`LABEL`);

  const isVNodeInput = isVNodeOfTagName(`INPUT`);

  const isVNodeTextarea = isVNodeOfTagName(`TEXTAREA`);

  const isVNodeInputOrTextarea = function isVNodeInputOrTextarea(vnode) {
    return isVNodeInput(vnode) || isVNodeTextarea(vnode);
  };

  const augmentVNodeWithTypographyClassName =
    augmentVNodeWithClassNames(`atom-Typography--subhead`);

  const labelVTree$ = label$
    .filter(isVNodeLabel)
    .map(augmentVNodeWithTypographyClassName);

  const inputVTree$ = input$
    .filter(isVNodeInputOrTextarea)
    .map(augmentVNodeWithTypographyClassName);

  return Rx.Observable.combineLatest(
    props$,
    labelVTree$,
    inputVTree$,
    (props, labelVTree, inputVTree) => {
      const {isNoFloatingLabel, isFocused, inputValue} = props;

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
          className={combineClassNames(namespace, DIALOGUE_NAME)}>

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
                `atom-FlexLayout`,
                `atom-Layout--relative`
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
