import React from 'react';
import InsideNav from '../InsideNav/InsideNav';

function Navbar() {
  const count = useContext(CountContext);

  return (
    <div>
      <InsideNav />
      <button>Count-1</button>
    </div>
  );
}

export default Navbar;
