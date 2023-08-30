import { useState, useRef, useEffect } from 'react'
import DifficultySelector from "./components/DifficultySelector";
import Timer from "./components/Timer";
import Controls from './components/Controls';
import questionsFile from './questions.csv'
import Papa from 'papaparse'



function App() {
    const [millis, setMillis] = useState(0);
    const allQuestions = useRef([]);
    const appRef = useRef(null);

    useEffect(() => {
        Papa.parse(questionsFile, {
            download: true,
            delimeter: ',',
            complete: function(input){
                allQuestions.current = 
                    input.data.slice(1).map(([time, question, difficulty, urls, notes, approved]) => (
                        {
                            question: question,
                            // because unicode is weird we have to use 2 instead of 1 to slice off the emoji
                            difficulty: difficulty.substring(2).toLowerCase(),
                            urls: urls.split('\n'),
                            approved: approved === 'TRUE'
                        }
                    )).filter(q => q.approved)
                console.log(allQuestions.current);
            }
        })
    })

    return (
    <div className="app" ref={appRef}>
        {/* Instructions */}
        <section className="instructions">
        {/*
        <h2>Instructions</h2>
        insert insert instructions here
        */}
        <button>?</button>
        </section>

        <div className="components">
        <DifficultySelector app={appRef}/>
        <Controls setMillis={setMillis}/>
        <Timer millis={millis}/>

        {/* Question */}
        <div className="question">
            <h1>What is STAR Voting?</h1>
            <p>
            <a href="youtube.com">[1]</a>
            <a href="youtube.com">[2]</a>
            <a href="youtube.com">[3]</a>
            </p>
        </div>
        </div>
    </div>
    );
}

export default App;
