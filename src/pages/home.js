import React, { useState } from 'react';
import { Sentence } from '../components/Sentence';
import { Verse } from '../components/Verse';

const Home = () => {
  const [sentence, setSentence] = useState('Sentence');
  const [verse, setVerse] = useState('verse');

  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 px-4 py-3">
      <Sentence sentence={sentence} />
      <Verse verse={verse} />
    </div>
  );
};

export default Home;
