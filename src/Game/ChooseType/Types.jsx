import Type from "./Type.jsx";
import { v4 as uuidv4 } from "uuid";

export default function Types({ types, setType }) {
  const validTypes = types.filter(
    (t) => t.name !== "unknown" && t.name !== "shadow"
  );
  return validTypes.map((type) => {
    return <Type type={type} key={uuidv4()} setType={setType} />;
  });
}
