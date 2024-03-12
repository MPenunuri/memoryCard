import getIMG from "./getIMG.js";
import "./Pokemon.css";

export default function Pokemon({
  pokemon,
  pokemons,
  setPokemons,
  round,
  score,
  setGameEnd,
}) {
  const handleFn = () => {
    round.current++;
    if (round.current > score.current) score.current = round.current;
    pokemon.selected === true ? setGameEnd(true) : (pokemon.selected = true);
    setPokemons([...pokemons]);
  };
  return (
    <button
      className="pokemon"
      aria-label={`Select a Pokemon: ${pokemon.name}`}
      onClick={() => handleFn()}
      type="button"
    >
      <h2 aria-disabled="true"> {pokemon.name} </h2>
      <img src={getIMG(pokemon.url)} alt={`Pokemon image: ${pokemon.name}`} />
    </button>
  );
}
