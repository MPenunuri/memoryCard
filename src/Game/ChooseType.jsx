import { useState } from "react";
import { useEffect } from "react";
import getData from "./getData.js";
import Types from "./ChooseType/Types.jsx";
import "./ChooseType.css";

export default function ChooseType({ setType }) {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    (async function getTypes() {
      const data = await getData("https://pokeapi.co/api/v2/type/");
      setTypes(data.results);
    })();
  }, []);
  return (
    <>
      <p className="instruction">
        Select wich type of pokemon you want to play!
      </p>
      <Types types={types} setType={setType} />
    </>
  );
}
