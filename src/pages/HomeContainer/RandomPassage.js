import { BookName } from './BookName';
import chapterAndVerse from 'chapter-and-verse';

const RandomPassage = () => {
  const bookNumber = Math.floor(Math.random() * 66);
  const BibleBook = BookName(bookNumber);
  const Book = chapterAndVerse(BibleBook);
  let RandomChapter = Math.floor(Math.random() * Book.book.chapters);
  let RandomVerse = Math.floor(
    Math.random() * Book.book.versesPerChapter[RandomChapter]
  );
  let passage = Book + ' ' + (RandomChapter + 1) + ':' + (RandomVerse + 1);
  return passage;
};

export { RandomPassage };
