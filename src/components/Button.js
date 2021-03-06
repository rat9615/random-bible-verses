import React from 'react';

const Button = (props) => {
  return (
    <button
      className="m-3 mt-12 rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-white text-sm sm:text-lg"
      onClick={props.onClick}
    >
      Next Verse
    </button>
  );
};

export { Button };
