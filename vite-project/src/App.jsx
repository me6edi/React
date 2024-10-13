import { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  let myPtag = useRef();

  const fetchData = async () => {
    const resPonse = await fetch("https://dummyjson.com/products");
    APIData.current = await resPonse.json();
  };

  const showData = () => {
    myPtag.current.innerText = JSON.stringify(APIData.current);
  };
  return (
    <div>
      <p ref={myPtag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;
