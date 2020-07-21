import { bcv_parser } from 'bible-passage-reference-parser/js/en_bcv_parser';

export default () => {
  const bcv = new bcv_parser();
  const info = bcv.translation_info(['niv']);
  const bookNumber = Math.floor(Math.random() * 66);
  const bookName = info.books[bookNumber];
  const RandomChapter = Math.floor(
    Math.random() * info.chapters[bookName].length
  );
  const RandomVerse = Math.floor(
    Math.random() * info.chapters[bookName][RandomChapter]
  );
  const passage = `${bookName === 'Phil' ? 'Philippians' : bookName}${
    RandomChapter + 1
  }:${RandomVerse + 1}`;
  return passage;
};
