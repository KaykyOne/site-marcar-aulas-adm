import React from 'react';
import '../styles/Components.css';

export default function Input({ placeholder, onChange, typeForInput }) {
  return (
    <>
      <input
        type={typeForInput}
        className='input-padrao'
        placeholder={placeholder}
        onChange={onChange} />
    </>
  )
}
