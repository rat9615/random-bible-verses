import React, { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <div className="flex h-screen flex-col items-center justify-center">
        <Home />
      </div>
    </Suspense>
  );
};

export default App;
