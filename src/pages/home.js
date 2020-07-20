import React, { useState, useEffect } from 'react';
import { Sentence } from '../components/Sentence';
import { Verse } from '../components/Verse';
import { RandomPassage } from './HomeContainer/RandomPassage';

const Home = () => {
  const [sentence, setSentence] = useState('sentence');
  const [verse, setVerse] = useState('verse');

  const asyncfunc = async () => {
    const hello = await fetch(`https://bible-api.com/${RandomPassage()}`);
    const hello2 = await hello.json();
    setSentence(hello2.text);
    setVerse(hello2.reference);
  };
  asyncfunc();

  return (
    <div className="flex flex-col items-center justify-center px-5 py-4 sm:px-4 sm:py-3 text-lg sm:text-xl">
      <Sentence sentence={sentence} />
      <Verse verse={verse} />
    </div>
  );
};

export default Home;
