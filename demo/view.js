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
          {renderSection(`Text input`, vtrees.slice(0, 5))}
          {renderSection(`Text area`, vtrees.slice(5, 8))}
          {renderSection(`Validation`, vtrees.slice(9, 11).concat(
            <div>
              <br/>
              <button className={`${dialogueName}_validateButton`}>
                Validate!
              </button>
            </div>
          ).concat(vtrees.slice(11, 12)))}
          {renderSection(`Character counter`, vtrees.slice(12, 15))}
          {renderSection(`Prefixes and suffixes`, vtrees.slice(15, 17))}
          {renderSection(`Complex inputs`, vtrees.slice(17, 18))}
        </div>
      );
    }
  );
}

export default view;
