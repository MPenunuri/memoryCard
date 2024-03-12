import getData from "../getData";

export default async function getIMG(url) {
  const data = await getData(url);
  const id = (() => {
    return data.pokemon[0].pokemon.url.slice(0, -1).split("pokemon/")[1];
  })();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
