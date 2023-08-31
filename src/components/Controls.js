import React, {useRef} from 'react'

const Controls = ({setMillis, difficulty, setQuestion, allQuestions, instrHidden}) => {
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
        setQuestion(question => {
            let q = question;
            while(q === question && questions.length > 1){
                q = questions[Math.floor(Math.random()*questions.length)]
            }
            return q;
        });
    }

    return (
        <div className="controls">
            <button className="nextQuestion" onClick={nextQuestion} disabled={!instrHidden}>
                Next Question
            </button>
            <button className="toggleTimer" onClick={toggleTimer} disabled={!instrHidden}>
                {timerID.current == undefined? 'Start Timer' : 'Stop Timer'}
            </button>
        </div>
    )
}

export default Controls
