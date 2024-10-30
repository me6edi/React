import { useState } from "react";

const App = () => {
  let [FormObj, SetFormObj] = useState({
    fname: "",
    lname: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    SetFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(FormObj));
  };

  return (
    <div className="container">
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            InputOnChange("fname", e.target.value);
          }}
          value={FormObj.fname}
          placeholder="First Name"
        />
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lname", e.target.value);
          }}
          value={FormObj.lname}
          placeholder="Last Name"
        />
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={FormObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Male");
          }}
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => {
            InputOnChange("gender", "Female");
          }}
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;
