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
                    <h3> How it works</h3>
                    <ol>
                    <li> Select the difficulty </li>
                    <li> Click "Next Question" for a randomly selected question </li>
                    <li> Spend 1-2 minutes giving a answer the to question (ideally out loud) </li>
                    <li> Use the links under the question for a sample answer and see how you did :) </li>
                    </ol>
                    <h3> Links</h3>
                    <ul>
                        <li><a href="https://docs.google.com/spreadsheets/d/1dfUrbGTpP5ShpR8TQHYx1Aam1ENflmss-WtcfnDzvuE/edit?usp=sharing">Full List of questions</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdAEplMSYQzQIKmv9csr70ca2D8YQAtgYHY62mxac7mdACdjg/viewform">Suggest more questions</a></li>
                        <li><a href="starvoting.us/join">Join our community of volunteers!</a></li>
                    </ul>
                </p>
            </div>
            <button onClick={() => setHidden(h => !h)}>{hidden? '?' : '<'}</button>
        </section>
    )
}

export default Instructions
