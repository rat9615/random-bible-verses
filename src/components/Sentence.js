import React from 'react';

const Sentence = (props) => {
  const capitalize = (sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };
  return <div className="text-center">{capitalize(props.sentence)}</div>;
};

export { Sentence };
