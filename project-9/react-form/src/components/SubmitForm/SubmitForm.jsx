import React, { useState } from 'react'

function SubmitForm() {

    const [text, setText] = useState('Hello');
    const [email, setEmail] = useState('hello@gmail.com')
    console.log(text);
    console.log(email);


    const submitForm = (e) => {
            e.preventDefault();
            console.log(e.target.text.value);
            console.log(e.target.email.value);
            console.log(e.target.password.value);
    }


const nameText = (e) => {
        setText(e.target.value)
}


const emailInput= (e) => {
        setEmail(e.target.value)
}

const passwordInput= (e) => {
        setPass(e.target.value);
}

  return (
    <div>
        <form onSubmit={submitForm}>
        <input onChange={nameText} type="text" name="text" /><br/>
        <input onChange={emailInput} type="email" name="email" /><br/>
        <input onChange={passwordInput} type="password" name="password" /><br/>

        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SubmitForm