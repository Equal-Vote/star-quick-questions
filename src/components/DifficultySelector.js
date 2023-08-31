import React from 'react'

const DifficultySelector = ({app, difficulty, setDifficulty}) => {
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
