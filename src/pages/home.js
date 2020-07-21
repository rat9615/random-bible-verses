import React, { useState, useEffect } from 'react';
import { Sentence } from '../components/Sentence';
import { Verse } from '../components/Verse';
import { Button } from '../components/Button';
import RandomPassage from './HomeContainer/RandomPassage';
import { Loading } from '../components/Loading';
import { ReactComponent as Church } from '../assets/img/church.svg';

const Home = () => {
  const [sentence, setSentence] = useState('');
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Passage = async () => {
      await fetch(`https://bible-api.com/${RandomPassage()}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setSentence(data.text);
          setVerse(`- ${data.reference}`);
        });
    };
    Passage();
  }, []);

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center px-5 py-4 sm:px-12 sm:py-3 text-lg sm:text-2xl text-white w3-animate-bottom ">
          <Church className="h-12 w-12 sm:h-32 sm:w-32 origin-bottom" />
          <Sentence sentence={sentence} />
          <Verse verse={verse} />
          <Button />
        </div>
      )}
    </div>
  );
};

export default Home;
