import { useEffect, useState } from "react";
import getIMG from "./getIMG.js";
import "./Type.css";

export default function Type({ type, setType }) {
  const [srcIMG, setSrcIMG] = useState();
  useEffect(() => {
    (async function getSrcIMG() {
      const data = await getIMG(type.url);
      setSrcIMG(data);
    })();
  }, [type.url]);
  return (
    <button
      className="type"
      aria-label={`Select Pokemon Type: ${type.name}`}
      onClick={() => setType(type.name)}
    >
      <h2 aria-disabled="true"> {type.name} </h2>
      <img src={srcIMG} alt={`Pokemon example: ${type.name}`} />
    </button>
  );
}
