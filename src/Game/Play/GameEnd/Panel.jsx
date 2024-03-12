export default function Panel({ setOtherRound, setRestart }) {
  return (
    <>
      <p className="instruction">
        <strong>Game over :c</strong>
        You have already selected the last one!
      </p>
      <p className="instruction">
        <strong>Would you like to try again?</strong>
      </p>
      <button
        id="playOtherBtn"
        type="button"
        aria-label="Play other round"
        onClick={() => setOtherRound(true)}
      >
        Let me continue playing!
      </button>
      <button
        id="restartBtn"
        type="button"
        aria-label="Restart game"
        onClick={() => setRestart(true)}
      >
        Restart game
      </button>
    </>
  );
}
