import { useState, useRef, useEffect } from 'react'

import questionsFile from './questions.csv'
import Papa from 'papaparse'

import DifficultySelector from "./components/DifficultySelector";
import Timer from "./components/Timer";
import Controls from './components/Controls';
import Question from './components/Question';

function App() {
    const [millis, setMillis] = useState(0);
    const [question, setQuestion] = useState({});
    const [difficulty, setDifficulty] = useState('easy');
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
                            urls: urls.split('\n'),
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
        <div className="app" ref={appRef}>
            <section className="instructions">
                {/*
                <h2>Instructions</h2>
                insert insert instructions here
                */}
                <button>?</button>
            </section>

            <div className="components">
                <DifficultySelector app={appRef} difficulty={difficulty} setDifficulty={setDifficulty}/>
                <Controls
                    setMillis={setMillis}
                    setQuestion={setQuestion}
                    difficulty={difficulty}
                    allQuestions={allQuestions}
                />
                <Timer millis={millis}/>
                <Question question={question}/>
            </div>
        </div>
    );
}

export default App;
