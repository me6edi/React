import { useRef } from "react";

const App = () => {
  let myImg = useRef();

  const change = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute("height", "200px");
    myImg.current.setAttribute("width", "300px");
  };
  return (
    <div>
      <img ref={myImg} src="https://placehold.co/500x400" alt="" />

      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
