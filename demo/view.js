/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}, ...vtree$s) {
  return state$.combineLatest(
    vtree$s,
    (state, ...vtrees) => {
      const {dialogueName, className} = state;
      const [
        textInputLabelVTree,
        textInputPasswordVTree,
        textInputIsNoFloatingLabelVTree,
        textInputIsDisabledVTree,
        textareaLabelVTree,
        validationInputIsRequiredIsAutoValidatingVTree,
        validationInputIsAutoValidatingPatternVTree,
        validationInputIsRequiredPatternVTree] = vtrees;

      return ( // eslint-disable-line
        <div
          className={combineClassNames(id, dialogueName, className,
            `template-DemoPages_sectionContainer isVertical`)}>
          <h4>Text input</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textInputLabelVTree}
            {textInputPasswordVTree}
            {textInputIsNoFloatingLabelVTree}
            {textInputIsDisabledVTree}
          </section>

          <h4>Text area</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textareaLabelVTree}
          </section>

          <h4>Validation</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {validationInputIsRequiredIsAutoValidatingVTree}
            {validationInputIsAutoValidatingPatternVTree}
            {validationInputIsRequiredPatternVTree}
            <br/>
            <button className={`${dialogueName}_validateButton`}>
              Validate!
            </button>
          </section>
        </div>
      );
    }
  );
}

export default view;
