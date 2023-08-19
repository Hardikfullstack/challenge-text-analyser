import {useState} from "react";
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { InitialResult, BottomResult, getCharacterCount, getPronounsCount, getSentenceCount, getWordCount, longestWord, getParagraphCount } from './data/utils';
import './App.scss'

const App = () => {
    const [textInput, setTextInput] = useState("");
    const [result, setResult] = useState(InitialResult);
    const [bottomResult, setBottomResult] = useState(BottomResult);

    const handleChange = (e: React.ChangeEvent) =>{
        const { value }: any = e.target;
        setTextInput(value);
        const characterCount = getCharacterCount(value);
        const wordCount = getWordCount(value);
        const pronounCount = getPronounsCount(value);
        const sentenceCount = getSentenceCount(value);
        const paragraphCount = getParagraphCount(value);

        let newResult = [
            {
                title: 'Words',
                value: wordCount,
            },
            {
                title: 'Characters',
                value: characterCount,
            },
            {
                title: 'Sentences',
                value: sentenceCount,
            },
            {
                title: 'Paragraphs ',
                value: paragraphCount,
            },
            {
                title: 'Pronouns',
                value: pronounCount,
            }
            ];
        setResult([...newResult]);

        const LongestWord = longestWord(value);

        let BottomResult = [
            {
                title: 'Average Reading Time:',
                value: characterCount < 225 ? '-1 minute' : Math.floor(characterCount/225).toFixed(0) + ' minutes',
            },
            {
                title: 'Longest word:',
                value: LongestWord,
            },
        ]

        setBottomResult([...BottomResult]);


    }
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox result={result} />
          <TextArea value={textInput} handleChange={handleChange} />
          <BottomResultBox result={bottomResult} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
