import {merge} from 'ramda';

function model({props$, componentClass}) {
  return props$.map(
    (props) => {
      const persistLabelFloat =
        !!(props.placeholder || props.persistLabelFloat);

      return merge(props, {componentClass, persistLabelFloat});
    }
  );
}

export default model;
