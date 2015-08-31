/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import R from 'ramda';
import {combineClassNames} from './functions.js';

const dialogueName = `molecule-InputContainer`;

function isLabelTagName(tagName) {
  return tagName === `LABEL`;
}

function isInputOrTextareaTagName(tagName) {
  return tagName === `INPUT` || tagName === `TEXTAREA`;
}

const classNameProperty = R.prop(`className`);

function addClassNamesToVNode(vnode, ...classNames) {
  const cloneVNode = Object.assign(vnode);

  cloneVNode.properties.className = combineClassNames(
    classNameProperty(vnode.properties),
    classNames
  );

  return cloneVNode;
}

function view({label$, input$, props$, namespace}) {
  const labelVTree$ = label$
    .filter(vnode => isLabelTagName(vnode.tagName))
    .map(vnode => addClassNamesToVNode(vnode, `atom-Typography--subhead`));

  const inputVTree$ = input$
    .filter(vnode => isInputOrTextareaTagName(vnode.tagName))
    .map(vnode => addClassNamesToVNode(vnode, `atom-Typography--subhead`));

  return Rx.Observable.combineLatest(
    props$,
    labelVTree$,
    inputVTree$,
    (props, labelVTree, inputVTree) => {
      const {isFocused} = props;

      const underlineClassMod = isFocused ? `isHighlighted` : ``;

      return ( // eslint-disable-line
        <div
          className={combineClassNames(namespace, dialogueName)}>

          <div
            className={combineClassNames(
              namespace,
              `${dialogueName}_floatedLabelPlaceholder`,
              `atom-Typography--caption`
              )}>&nbsp;</div>

          <div
            className={combineClassNames(
              namespace,
              `${dialogueName}_inputContent`,
              `atom-FlexLayout--horizontal`,
              `atom-FlexLayout--end`
            )}>
            <div
              className={combineClassNames(
                namespace,
                `${dialogueName}_labelAndInputContainer`,
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
              `${dialogueName}_underline`,
              underlineClassMod
            )}>
            <div
              className={combineClassNames(
                namespace,
                `${dialogueName}_unfocusedLine`,
                `atom-Layout--fit`
              )}></div>
            <div
              className={combineClassNames(
                namespace,
                `${dialogueName}_focusedLine`,
                `atom-Layout--fit`
              )}></div>
          </div>

        </div>
      );
    }
  );
}
function moleculeInputContainer({props$, label$, input$}, optNamespace = ``) {
  const namespace = optNamespace.trim();

  return {
    DOM: view({label$, input$, props$, namespace}),
  };
}

export default moleculeInputContainer;
