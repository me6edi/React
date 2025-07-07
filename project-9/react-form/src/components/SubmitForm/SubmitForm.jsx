import React, { useRef, useState } from 'react';

function SubmitForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (passRef.current.value.length < 8) {
      setError('Password must be at least 8 characters');
    } else {
      setError('');
      console.log("Name:", nameRef.current.value);
      console.log("Email:", emailRef.current.value);
      console.log("Password:", passRef.current.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input ref={nameRef} defaultValue={'Amin'} type="text" name="text" placeholder="Name" /><br />
        <input ref={emailRef} defaultValue={'hello@gmail.com'} type="email" name="email" placeholder="Email" /><br />
        <input ref={passRef} required type="password" name="password" placeholder="Password" /><br />
        
        <small style={{ color: 'red' }}>{error}</small><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SubmitForm;
