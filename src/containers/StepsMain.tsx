import React from 'react';
import '../styles/StepsMain.css';
import Step from '../components/Step';

type Step = {
  num: number;
  title: string;
  selected: boolean;
};

interface MyProps {
  steps: Step[];
}

export default function StepsMain(props: MyProps): JSX.Element {
  return (
    <div className="steps-main-div">
      {props.steps.map((step) => {
        return (
          <Step
            key={step.num}
            num={step.num}
            title={step.title}
            selected={step.selected}
          />
        );
      })}
    </div>
  );
}
