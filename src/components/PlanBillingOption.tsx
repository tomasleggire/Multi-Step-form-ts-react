import React from 'react';
import '../styles/PlanBillingOption.css';

interface MyProps {
  key: string;
  name: string;
  color: string;
  value: number;
  selected: boolean;
  changePlanValue: (currentValue: string) => void;
  date: string;
}

export default function PlanBillingOption(props: MyProps) {
  return (
    <div
      className={`main-div-billing-option ${
        props.selected && 'option-selected'
      }`}
      onClick={() => props.changePlanValue(props.name)}
    >
      <div
        className="icon-billing-option"
        style={{ background: props.color }}
      ></div>
      <div className="billing-option-text">
        <p className="billing-option-name">{props.name}</p>
        <p className="billing-option-value">
          ${props.value}/{props.date}
        </p>
      </div>
    </div>
  );
}
