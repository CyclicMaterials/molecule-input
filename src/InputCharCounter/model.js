import {isNil, merge} from 'ramda';

function model({props$, componentClass}) {
  return props$.map((props) => {
    const {value, maxLength} = props;
    // Account for TEXTAREA’s new lines
    let charCounterStr = value.replace(/(\r\n|\n|\r)/g, `--`).length;
    charCounterStr += isNil(maxLength) ? `` : `/` + maxLength;

    return merge(props, {componentClass, charCounterStr});
  });
}

export default model;
