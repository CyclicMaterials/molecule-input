/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function renderSection(headline, ...vtrees) {
  return ( // eslint-disable-line
    <div>
      <h4>{headline}</h4>
      <section className={`template-DemoPages_verticalSection`}>
        {vtrees}
      </section>
    </div>
  );
}

function view({state$, id}, ...vtree$s) {
  return state$.combineLatest(
    vtree$s,
    (state, ...vtrees) => {
      const {dialogueName, className} = state;
      return ( // eslint-disable-line
        <div
          className={combineClassNames(id, dialogueName, className,
            `template-DemoPages_sectionContainer isVertical`)}>
          {renderSection(`Text input`, vtrees.slice(0, 4))}
          {renderSection(`Text area`, vtrees.slice(4, 6))}
          {renderSection(`Validation`, vtrees.slice(6, 9).concat(
            <div>
              <br/>
              <button className={`${dialogueName}_validateButton`}>
                Validate!
              </button>
            </div>
          ))}
          {renderSection(`Character counter`, vtrees.slice(9, 12))}
          {renderSection(`Prefixes and suffixes`, vtrees.slice(12, 14))}
        </div>
      );
    }
  );
}

export default view;
