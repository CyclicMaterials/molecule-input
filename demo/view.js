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

function slice(vtrees, counter, length) {
  return vtrees.slice(counter.count, counter.count += length);
}

function view({state$, id}, ...vtree$s) {
  return state$.combineLatest(
    vtree$s,
    (state, ...vtrees) => {
      const {dialogueName, className} = state;
      const counter = {count: 0};
      return ( // eslint-disable-line
        <div
          className={combineClassNames(id, dialogueName, className,
            `template-DemoPages_sectionContainer isVertical`)}>
          {renderSection(`Text input`, slice(vtrees, counter, 6))}
          {renderSection(`Text area`, slice(vtrees, counter, 3))}
          {renderSection(`Validation`, slice(vtrees, counter, 3).concat(
            <div>
              <br/>
              <button className={`${dialogueName}_validateButton`}>
                Validate!
              </button>
            </div>
          ).concat(slice(vtrees, counter, 1)))}
          {renderSection(`Character counter`, slice(vtrees, counter, 3))}
          {renderSection(`Prefixes and suffixes`, slice(vtrees, counter, 2))}
          {renderSection(`Complex inputs`, slice(vtrees, counter, 1))}
        </div>
      );
    }
  );
}

export default view;
