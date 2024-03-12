import getData from "../getData";

export default async function getIMG(url) {
  const data = await getData(url);
  const id = (() => {
    return data.pokemon[0].pokemon.url.slice(0, -1).split("pokemon/")[1];
  })();
  return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
}
