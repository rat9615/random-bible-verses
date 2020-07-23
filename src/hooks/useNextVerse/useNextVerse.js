import { useState, useEffect } from 'react';
import RandomPassage from './RandomPassage';

const useNextVerse = () => {
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
  return { sentence, verse, loading };
};

export { useNextVerse };
