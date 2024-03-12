import { useEffect, useState } from "react";
import getIMG from "./getIMG.js";

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
      type="button"
    >
      <h2 aria-disabled="true"> {type.name} </h2>
      <img src={srcIMG} alt={`Pokemon example: ${type.name}`} />
    </button>
  );
}
