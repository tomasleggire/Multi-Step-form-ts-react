import React, { ChangeEvent } from 'react';
import '../styles/CheckBox.css';

interface MyProps {
  title: string;
}

export default function CheckBox(props: MyProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log('Activo');
    } else {
      console.log('No Selected');
    }
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} />
        {props.title}
      </label>
    </div>
  );
}
