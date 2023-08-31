const Question = ({question}) => {
    return (
        <div className="question">
            {'question' in question && <>
                <h1>{question.question}<br/>
                    {question.urls.map((url, i) => (
                        <a key={i} href={url}>[{i+1}]</a>
                    ))}
                </h1>
            </>
            }
        </div>
    )
}

export default Question