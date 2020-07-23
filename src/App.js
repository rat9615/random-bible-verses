import React, { lazy, Suspense } from 'react';
import { Loading } from './components/Loading';
const Home = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default App;
