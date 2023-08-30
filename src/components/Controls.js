import React from 'react'

const Controls = ({interval, setInterval, setMillis}) => {
    const toggleTimer = () => {
        if(interval == undefined){
            setInterval(
                window.setInterval(() => {
                    setMillis(m => m+10)
                }, 10)
            );
        }else{
            clearInterval(interval);
            setInterval(undefined);
        }
    }

    const nextQuestion = () => {
        clearInterval(interval);
        setInterval(undefined);
        setMillis(0);
    }

    return (
        <div className="controls">
            <button className="nextQuestion" onClick={nextQuestion}>
                Next Question
            </button>
            <button className="toggleTimer" onClick={toggleTimer}>
                {interval == undefined? 'Start Timer' : 'Stop Timer'}
            </button>
        </div>
    )
}

export default Controls
