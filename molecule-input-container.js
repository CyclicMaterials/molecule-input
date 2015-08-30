/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import R from 'ramda';

function isLabelTagName(tagName) {
  return tagName === `LABEL`;
}

function isInputOrTextareaTagName(tagName) {
  return tagName === `INPUT` || tagName === `TEXTAREA`;
}

const classNameProperty = R.prop(`className`);

function moleculeInputContainer({props$, label$, input$}, optNamespace = ``) {
  const namespace = optNamespace.trim();

  const classNameSeparator = ` `;

  const labelVTree$ = label$
    .filter(vnode => {return isLabelTagName(vnode.tagName);})
    .map(vnode => {
      const labelVNode = Object.assign(vnode);
      labelVNode.properties.className =
        `${classNameProperty(vnode.properties)} atom-Typography--subhead`;

      return labelVNode;
    });

  const inputVTree$ = input$
    .filter(vnode => {return isInputOrTextareaTagName(vnode.tagName);})
    .map(vnode => {
      const inputVNode = Object.assign(vnode);
      inputVNode.properties.className =
        `${classNameProperty(vnode.properties)} atom-Typography--subhead`;

      return inputVNode;
    });

  const vtree$ = Rx.Observable.combineLatest(
    props$,
    labelVTree$,
    inputVTree$,
    (props, labelVTree, inputVTree) => {
      const {isFocused} = props;

      const underlineClassMod = isFocused ? `isHighlighted` : ``;

      return ( // eslint-disable-line
        <div
          className={[
            namespace,
            `molecule-InputContainer`,
          ].join(classNameSeparator).trim()}>

          <div
            className={[
              namespace,
              `molecule-InputContainer_floatedLabelPlaceholder`,
              `atom-Typography--caption`,
            ].join(classNameSeparator).trim()}>&nbsp;</div>

          <div
            className={[
              namespace,
              `molecule-InputContainer_inputContent`,
              `atom-FlexLayout--horizontal`,
              `atom-FlexLayout--end`,
            ].join(classNameSeparator).trim()}>
            <div
              className={[
                namespace,
                `molecule-InputContainer_labelAndInputContainer`,
                `atom-FlexLayout`,
                `atom-Layout--relative`,
              ].join(classNameSeparator).trim()}>
              {labelVTree}
              {inputVTree}
            </div>
          </div>

          <div
            className={[
              namespace,
              `molecule-InputContainer_underline`,
              underlineClassMod,
            ].join(classNameSeparator).trim()}>
            <div
              className={[
                namespace,
                `molecule-InputContainer_unfocusedLine`,
                `atom-Layout--fit`,
              ].join(classNameSeparator).trim()}></div>
            <div
              className={[
                namespace,
                `molecule-InputContainer_focusedLine`,
                `atom-Layout--fit`,
              ].join(classNameSeparator).trim()}></div>
          </div>

        </div>
      );
    }
  );

  return {
    DOM: vtree$,
  };
}

export default moleculeInputContainer;
