import { useEffect, useState } from "react";
import JSON from "./../node_modules/vite/dist/node/chunks/dep-BWSbWtLw";

const App = () => {
  let [data, setData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res = res.JSON()))
      .then((json) => setData(json));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
