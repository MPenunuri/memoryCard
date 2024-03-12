import "./App.css";
import Game from "./Game";

function App() {
  return (
    <>
      <header>
        <img
          src="https://www.eventhorizongames.com/images/images/games_logos/Pokemon-logo.png"
          alt="Pokemon Icon"
        />
        <h1>The memory game</h1>
      </header>
      <main id="gameContainer">
        <Game />
      </main>
      <footer>Front-end project by MPenunuri.</footer>
    </>
  );
}

export default App;
