import combineClassNames from '@cyclic/util-combine-class-names';
import {h} from '@cycle/dom'; // eslint-disable-line

function renderSection(headline, ...vtree$s) {
  return h(`div`, [
    h(`h4`, headline),
    h(`section.template-DemoPages_verticalSection`, vtree$s),
  ]);
}

function slice(vtree$s, counter, length) {
  return vtree$s.slice(counter.count, counter.count += length);
}

function view({state$, id}, ...vtree$s) {
  return state$.map(
    (state) => {
      const {componentClass, className} = state;
      const counter = {count: 0};

      return h(`div`,
        {className: combineClassNames(
          id, componentClass, className,
          `template-DemoPages_sectionContainer isVertical`
        )}, [
          renderSection(`Text input`, slice(vtree$s, counter, 5)),
          renderSection(`Text area`, slice(vtree$s, counter, 3)),
          renderSection(`Validation`, slice(vtree$s, counter, 3).concat(
            h(`div`, [
              h(`br`),
              h(`button.${componentClass}_validateButton`, `Validate!`),
            ])
          ).concat(slice(vtree$s, counter, 1))),
          renderSection(`Character counter`, slice(vtree$s, counter, 3)),
          renderSection(`Prefixes and suffixes`, slice(vtree$s, counter, 2)),
          renderSection(`Complex inputs`, slice(vtree$s, counter, 1)),
        ]
      );
    }
  );
}

export default view;
