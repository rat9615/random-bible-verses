import { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';
import RandomPassage from './RandomPassage';

const useNextVerse = () => {
  const [sentence, setSentence] = useState('');
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('');
  const [next, setNext] = useState(false);

  useEffect(() => {
    const Passage = async () => {
      await fetch(`https://bible-api.com/${RandomPassage()}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setColor(
            randomcolor({
              luminosity: 'dark',
              format: 'rgba',
              alpha: 0.8,
            })
          );

          setSentence(data.text);
          setVerse(`- ${data.reference}`);
        });
    };
    Passage();
  }, [next]);
  return { sentence, verse, loading, color, setNext, setLoading };
};

export { useNextVerse };
