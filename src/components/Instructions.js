import {useState, useRef, useEffect} from 'react';

const Instructions = ({allQuestions, hidden, setHidden}) => {
    const instructions = useRef(null);

    // TODO: I'd love to convert this to markdown
    return (
        <section ref={instructions} className={`instructions ${hidden? 'instructions-hidden': ''}`}>
            <div>
                <h2>Instructions</h2>
                <p>
                    Welcome to the "Quick STAR Questions" tool!
                    <br/><br/>
                    This to help activists polish their talking points when discussing STAR Voting.
                    <br/><br/>
                    Here's how it works:
                    <ol>
                    <li> Select the difficulty you want </li>
                    <li> Click "Next Question" for a randomly selected question </li>
                    <li> Spend 1-2 minutes giving a answer the to question (ideal out loud) </li>
                    <li> Use the links under the question for a sample answer and see how you did :) </li>
                    </ol>
                    <br/>
                    For suggesting questions, please use <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAEplMSYQzQIKmv9csr70ca2D8YQAtgYHY62mxac7mdACdjg/viewform">this form</a>
                </p>
            </div>
            <button onClick={() => setHidden(h => !h)}>{hidden? '?' : '<'}</button>
        </section>
    )
}

export default Instructions
