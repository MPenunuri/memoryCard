import { useState } from "react";
import { useEffect } from "react";
import getData from "./getData.js";
import Types from "./ChooseType/Types.jsx";

export default function ChooseType({ setType }) {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    (async function getTypes() {
      const data = await getData("https://pokeapi.co/api/v2/type/");
      setTypes(data.results);
    })();
  }, []);
  return <Types types={types} setType={setType} />;
}
