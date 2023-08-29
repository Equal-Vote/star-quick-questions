import DifficultySelector from "./components/DifficultySelector";

function App() {
  return (
    <div className="app">
      {/* Instructions */}
      <section className="instructions">
        <h2>Instructions</h2>
        insert insert instructions here
        <button>?</button>
      </section>

      <DifficultySelector/>

      {/* Controls */}
      <div className="controls">
        <button className="nextQuestion">
          Next Question
        </button>
        <button className="toggleTimer">
          Start Timer
        </button>
      </div>

      {/* Timer */}
      <h2>0:00:00</h2>

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
  );
}

export default App;
