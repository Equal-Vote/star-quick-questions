import React, {useRef} from 'react'

const Controls = ({setMillis, difficulty, setQuestion, allQuestions}) => {
    const timerID = useRef(undefined);

    const toggleTimer = () => {
        if(timerID.current == undefined){
            timerID.current = window.setInterval(() => {
                setMillis(m => m+10)
            }, 10);
        }else{
            clearInterval(timerID.current);
            timerID.current = undefined;
        }
    }

    const nextQuestion = () => {
        // reset timer
        clearInterval(timerID.current);
        timerID.current = undefined;
        setMillis(0);

        // question
        let questions = allQuestions.current.filter((q) => q.difficulty === difficulty);
        setQuestion(questions[Math.floor(Math.random()*questions.length)]);
    }

    return (
        <div className="controls">
            <button className="nextQuestion" onClick={nextQuestion}>
                Next Question
            </button>
            <button className="toggleTimer" onClick={toggleTimer}>
                {timerID.current == undefined? 'Start Timer' : 'Stop Timer'}
            </button>
        </div>
    )
}

export default Controls
