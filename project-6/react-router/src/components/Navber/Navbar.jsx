import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-red-600 mx-4 p-4'>
      <Link to='/home' className='text-white px-3'>Home</Link>
      <Link to='/product' className='text-white px-3'>Products</Link>
      <Link to='/blog' className='text-white px-3'>Blogs</Link>
      <Link to='/about' className='text-white px-3'>About</Link>
      <Link to='/contact' className='text-white px-3'>Contact Us</Link>
    </div>
  );
}

export default Navbar;
