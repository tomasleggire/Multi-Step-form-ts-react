import React, { ChangeEvent } from 'react';
import '../styles/CheckBox.css';

interface MyProps {
  title: string;
  description: string;
  price: number;
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
    <div className="main-checkbox">
      <input type="checkbox" onChange={handleChange} />
      <div className="texts-ons">
        <p className="ons-name">{props.title}</p>
        <p className="ons-description">{props.description}</p>
      </div>
      <p className="ons-price">+{props.price}/month</p>
    </div>
  );
}
