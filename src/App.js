import React, {useState} from 'react'
import FlashcardList from './FlashcardList';

function App(){
  // eslint-disable-next-line
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards}></FlashcardList>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Which movie trailer did you like the most?',
    answer: 'Infinity',
    options: [
      'cowboy bebop',
      'dune',
      'venom',
      'Infinity'
    ]
  },
  {
    id: 2,
    question: 'question2?',
    answer: 'answer',
    options: [
      'option1',
      'option2',
      'option3',
      'option4'
    ]
  }
]

export default App;