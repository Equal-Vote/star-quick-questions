import React, { useState, useEffect } from 'react'

const DifficultySelector = () => {
    const [difficulty, setDifficulty] = useState('easy');

    useEffect(() => {
        document.querySelector(".app").className = `app app-${difficulty}`;
    }, [difficulty]);

    return <div className="difficulty">
        {['Easy', 'Medium', 'Hard'].map((txt) => {
            let value = txt.toLowerCase();
            return <div key={value} className={`difficulty-option ${value}`}>
                <label htmlFor={value}>{txt}</label>
                <input
                    type="radio"
                    name="difficulty"
                    value={value}
                    defaultChecked={value==difficulty}
                    id={value}
                    onClick={() => setDifficulty(value)}
                />
            </div>
        })}
    </div>
}

export default DifficultySelector
