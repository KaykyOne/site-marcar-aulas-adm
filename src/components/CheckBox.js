import React from 'react';
import '../styles/Components.css';

export default function CheckBox({children}) {
  return (
    <div className="container-horizontal">
      <input className="checkbox" type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
}
