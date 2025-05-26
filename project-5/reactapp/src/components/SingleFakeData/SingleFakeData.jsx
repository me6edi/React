import React from 'react';

function SingleFakeData({ singleData }) {
  const { name, age, profession, email, phone, img } = singleData;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      {img && <img src={img} alt={`${name}'s profile`} width="100" />}
    </div>
  );
}

export default SingleFakeData;
