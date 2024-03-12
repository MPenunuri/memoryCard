import { useState } from "react";
import Panel from "./GameEnd/Panel.jsx";
import Play from "../Play.jsx";
import Game from "../../Game.jsx";
import scoreState from "../scoreState.js";
import "./GameEnd/GameEnd.css";

export default function GameEnd({ type, score }) {
  const [otherRound, setOtherRound] = useState(false);
  const [restart, setRestart] = useState(false);
  const content = (() => {
    if (!otherRound && !restart) {
      return <Panel setOtherRound={setOtherRound} setRestart={setRestart} />;
    } else if (otherRound) {
      scoreState.score = score.current;
      return <Play type={type} />;
    } else if (restart) {
      scoreState.score = 0;
      return <Game />;
    }
  })();
  return content;
}
