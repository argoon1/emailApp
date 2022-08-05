import { useState } from "react";
const useName = () => {
  const [name, setName] = useState("");

  return {
    name,
    setName,
  };
};

export default useName;
