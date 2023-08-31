import { useState, useRef, useEffect } from 'react'

import questionsFile from './questions.csv'
import Papa from 'papaparse'

import DifficultySelector from "./components/DifficultySelector";
import Timer from "./components/Timer";
import Controls from './components/Controls';
import Question from './components/Question';
import Instructions from './components/Instructions';

function App() {
    const [millis, setMillis] = useState(0);
    const [question, setQuestion] = useState({});
    const [difficulty, setDifficulty] = useState('easy');
    const [instrHidden, setInstrHidden] = useState(true);
    const appRef = useRef(null);
    const allQuestions = useRef([]);

    useEffect(() => {
        Papa.parse(questionsFile, {
            download: true,
            delimeter: ',',
            complete: function(input){
                allQuestions.current = input.data.slice(1)
                    .map(([time, question, difficulty, urls, notes, approved]) => (
                        {
                            question: question,
                            // because unicode is weird we have to use 2 instead of 1 to slice off the emoji
                            difficulty: difficulty.substring(2).toLowerCase(),
                            urls: (urls === '')? [] : urls.split('\n'),
                            approved: approved === 'TRUE'
                        }))
                    .filter(q => q.approved);
            }
        })
    })

    useEffect(() => {
        setQuestion({});
    }, [difficulty]);

    return (
        <div className={`app app-${difficulty}`} ref={appRef}>
            <Instructions allQuestions={allQuestions} hidden={instrHidden} setHidden={setInstrHidden}/>

            <div className="components">
                <DifficultySelector
                    app={appRef}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                />
                <Controls
                    setMillis={setMillis}
                    setQuestion={setQuestion}
                    difficulty={difficulty}
                    allQuestions={allQuestions}
                    instrHidden={instrHidden}
                />
                <Timer millis={millis}/>
                <Question question={question}/>
            </div>
        </div>
    );
}

export default App;
