import React from 'react';
import InputText from '../components/InputText';
import PlanBillingOption from '../components/PlanBillingOption';
import ToggleSwitch from '../components/ToggleSwitch';
import type { SetStateAction } from 'react';

type Step = {
  num: number;
  title: string;
  selected: boolean;
  completed: boolean;
};

type Plan = {
  name: string;
  color: string;
  value: number;
  selected: boolean;
};

interface MyProps {
  steps: Step[];
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  phoneNumber: number;
  setPhoneNumber: React.Dispatch<SetStateAction<number>>;
  handleClickStep1: () => void;
  planValue: Plan[];
  changePlanValue: (currentValue: string) => void;
  toggleStateSwitch: boolean;
  handleToggleSwitch: () => void;
}

export default function StepsLayouts(props: MyProps) {
  if (props.steps[0].selected) {
    return (
      <>
        {' '}
        <div>
          <h1>Personal info</h1>
          <h3>Provide your name, email address and phone number.</h3>
          <InputText
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            min={5}
            max={35}
            value={props.name}
            setValue={props.setName}
          />
          <InputText
            label="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            min={10}
            max={35}
            value={props.email}
            setValue={props.setEmail}
          />
          <InputText
            label="Phone Number"
            type="number"
            placeholder="e.g. +1122334455"
            min={0}
            max={11}
            value={props.phoneNumber}
            setValue={props.setPhoneNumber}
          />
        </div>
        <button
          className="form-btn"
          type="button"
          onClick={props.handleClickStep1}
        >
          Next Step
        </button>
      </>
    );
  }
  if (props.steps[1].selected) {
    return (
      <>
        <div>
          <h1>Select your plan</h1>
          <h3>You have the option monthly or yearly billing.</h3>
          {props.planValue.map((plan) => {
            return (
              <PlanBillingOption
                key={plan.name}
                name={plan.name}
                color={plan.color}
                value={plan.value}
                selected={plan.selected}
                changePlanValue={props.changePlanValue}
              />
            );
          })}
          <ToggleSwitch
            toggleStateSwitch={props.toggleStateSwitch}
            handleToggleSwitch={props.handleToggleSwitch}
          />
        </div>
        <button className="form-btn" type="button">
          Next Step
        </button>
      </>
    );
  }
}
