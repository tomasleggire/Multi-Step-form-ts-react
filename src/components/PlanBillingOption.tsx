import React from 'react';
import '../styles/PlanBillingOption.css';
import type { SetStateAction } from 'react';

interface MyProps {
  key: string;
  name: string;
  color: string;
  value: number;
  setPlanValue: React.Dispatch<SetStateAction<number>>;
}

export default function PlanBillingOption(props: MyProps) {
  return (
    <div
      className="main-div-billing-option"
      onClick={() => props.setPlanValue(props.value)}
    >
      <div
        className="icon-billing-option"
        style={{ background: props.color }}
      ></div>
      <div className="billing-option-text">
        <p className="billing-option-name">{props.name}</p>
        <p className="billing-option-value">${props.value}/Month</p>
      </div>
    </div>
  );
}
