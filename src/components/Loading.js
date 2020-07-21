import React from 'react';
import { ReactComponent as LoadingIcon } from '../assets/img/loading.svg';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingIcon className="h-12 w-12 sm:h-16 sm:w-16 " />
    </div>
  );
};

export { Loading };
