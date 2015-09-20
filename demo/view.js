/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function view({state$, id}, ...vtree$s) {
  return state$.combineLatest(
    vtree$s,
    (state, ...vtrees) => {
      const {dialogueName, className} = state;
      const [
        textInputLabel,
        textInputPassword,
        textInputIsNoFloatingLabel,
        textInputIsDisabled,
        textareaLabel,
        validationInputIsRequiredIsAutoValidating,
        validationInputIsAutoValidatingPattern,
        validationInputIsRequiredPattern,
        prefixInputNumber,
        suffixInput] = vtrees;

      return ( // eslint-disable-line
        <div
          className={combineClassNames(id, dialogueName, className,
            `template-DemoPages_sectionContainer isVertical`)}>
          <h4>Text input</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textInputLabel}
            {textInputPassword}
            {textInputIsNoFloatingLabel}
            {textInputIsDisabled}
          </section>

          <h4>Text area</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {textareaLabel}
          </section>

          <h4>Validation</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {validationInputIsRequiredIsAutoValidating}
            {validationInputIsAutoValidatingPattern}
            {validationInputIsRequiredPattern}
            <br/>
            <button className={`${dialogueName}_validateButton`}>
              Validate!
            </button>
          </section>

          <h4>Prefixes and suffixes</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {prefixInputNumber}
            {suffixInput}
          </section>
        </div>
      );
    }
  );
}

export default view;
