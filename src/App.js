import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Loading } from './components/Loading';
import randomcolor from 'randomcolor';
const Home = lazy(() => import('./pages/home'));

const App = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(
      randomcolor({
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0.8,
      })
    );
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="flex h-screen flex-col items-center justify-center opacity-75"
        style={{ backgroundColor: color }}
      >
        <Home />
      </div>
    </Suspense>
  );
};

export default App;
