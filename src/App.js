import { useState } from 'react'
import DifficultySelector from "./components/DifficultySelector";
import Timer from "./components/Timer";
import Controls from './components/Controls';

function App() {
  const [millis, setMillis] = useState(0);
  const [interval, setInterval] = useState(undefined);

  return (
    <div className="app">
      {/* Instructions */}
      <section className="instructions">
        {/*
        <h2>Instructions</h2>
        insert insert instructions here
        */}
        <button>?</button>
      </section>

      <div className="components">
        <DifficultySelector/>
        <Controls interval={interval} setInterval={setInterval} setMillis={setMillis}/>
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
