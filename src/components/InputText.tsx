import React from 'react';
import '../styles/InputText.css';

interface MyProps {
  label: string;
  type: string;
  placeholder: string;
  min: number;
  max: number;
}

export default function InputText(props: MyProps): JSX.Element {
  return (
    <div className="input-text-main">
      <label className="input-label">{props.label}</label>
      <input
        className="input-text"
        type={props.type}
        placeholder={props.placeholder}
        minLength={props.min}
        maxLength={props.max}
      />
    </div>
  );
}
