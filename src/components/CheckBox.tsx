import React, { ChangeEvent } from 'react';
import '../styles/CheckBox.css';

interface MyProps {
  key: string;
  title: string;
  description: string;
  price: number;
  selected: boolean;
  changeValueCheckBox: (x: string, y: boolean) => void;
}

export default function CheckBox(props: MyProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      props.changeValueCheckBox(props.title, true);
    } else {
      props.changeValueCheckBox(props.title, false);
    }
  };

  return (
    <div className={`main-checkbox ${props.selected && 'check-selected'}`}>
      <input type="checkbox" onChange={handleChange} />
      <div className="texts-ons">
        <p className="ons-name">{props.title}</p>
        <p className="ons-description">{props.description}</p>
      </div>
      <p className="ons-price">+{props.price}/month</p>
    </div>
  );
}
