import Pokemon from "./Pokemon.jsx";
import randomNums from "./randomNums.js";
import { v4 as uuidv4 } from "uuid";
import "./Pokemons.css";

export default function Pokemons({
  pokemons,
  setPokemons,
  round,
  score,
  setGameEnd,
}) {
  const randomIDX = randomNums();
  const randomPokemons = pokemons.filter((el, idx) => randomIDX.includes(idx));
  return randomPokemons.map((i) => {
    return (
      <Pokemon
        pokemon={i.pokemon}
        pokemons={pokemons}
        setPokemons={setPokemons}
        round={round}
        score={score}
        key={uuidv4()}
        setGameEnd={setGameEnd}
      />
    );
  });
}
