import { useState } from "react";
import Play from "./Game/Play.jsx";
import ChooseType from "./Game/ChooseType.jsx";

export default function Game() {
  const [type, setType] = useState();
  return type !== undefined ? (
    <Play type={type} />
  ) : (
    <ChooseType setType={setType} />
  );
}
