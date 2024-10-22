import { useState } from "react";

const App = () => {
  const [myObj, setMyobj] = useState({
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
  });

  const change = () => {
    setMyobj((prevObj) => ({
      ...prevObj,
      key1: "New value for key 1",
      key2: "New value for key 2",
      key3: "New value for key 3",
    }));
  };

  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;
