import React from 'react';
import { Sentence } from '../components/Sentence';
import { Verse } from '../components/Verse';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { ReactComponent as Church } from '../assets/img/church.svg';
import { useNextVerse } from '../hooks/useNextVerse/useNextVerse';

const Home = () => {
  const { sentence, verse, loading } = useNextVerse();

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center px-5 py-4 sm:px-12 sm:py-3 text-lg sm:text-2xl text-white w3-animate-bottom ">
          <Church className="h-12 w-12 sm:h-32 sm:w-32 origin-bottom" />
          <Sentence sentence={sentence} />
          <Verse verse={verse} />
          <Button
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
