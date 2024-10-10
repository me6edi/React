import { useRef } from "react";

const App = () => {
  let firstName,
    lastName = useRef();

  const change = () => {
    let fName = firstName.value;
    let lName = lastName.value;

    alert(fName + " " + lName);
  };
  return (
    <div>
      <input ref={(a) => (firstName = a)} placeholder="First Name" />
      <br />

      <input ref={(b) => (lastName = b)} placeholder="Last name" />
      <br />

      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
