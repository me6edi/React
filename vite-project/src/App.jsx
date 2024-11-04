import { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState();
  useEffect(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/products/");
      let json = await response.json();
      setData(json);
    })();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
