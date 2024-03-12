import { useEffect, useState, useRef } from "react";
import GameEnd from "./Play/GameEnd.jsx";
import getData from "./getData";
import Pokemons from "./Play/Pokemons.jsx";
import scoreState from "./scoreState.js";
import "./Play.css";

export default function Play({ type }) {
  const [gameEnd, setGameEnd] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const round = useRef(0);
  const score = useRef(scoreState.score);
  useEffect(() => {
    (async function getPokemons() {
      const data = await getData(`https://pokeapi.co/api/v2/type/${type}`);
      setPokemons(data.pokemon.slice(0, 100));
    })();
  }, [type]);
  return gameEnd === true ? (
    <GameEnd type={type} score={score} />
  ) : (
    <>
      <p className="instruction">
        <strong>Now just select a pokemon!</strong>
        <br />
        Don&apos;t forget to remember your choice!
        <br /> This is round: {round.current}
        <br /> Your higher score is: {score.current}
      </p>
      <Pokemons
        pokemons={pokemons}
        setPokemons={setPokemons}
        round={round}
        score={score}
        setGameEnd={setGameEnd}
      />
    </>
  );
}
