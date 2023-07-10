import React from 'react';
import '../styles/Step.css';

interface MyProps {
  key: number;
  num: number;
  title: string;
  selected: boolean;
}

export default function Step(props: MyProps) {
  return (
    <div className="main-step">
      <h5 className={`step-num ${props.selected && 'step-num-selected'}`}>
        {props.num}
      </h5>
      <div className="step-text">
        <h6 className="step-text-title">Step {props.num}</h6>
        <h5 className="step-text-subtitle">{props.title}</h5>
      </div>
    </div>
  );
}
