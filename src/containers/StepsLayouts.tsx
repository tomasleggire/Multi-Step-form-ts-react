import React from 'react';
import '../styles/StepsLayouts.css';
import InputText from '../components/InputText';
import PlanBillingOption from '../components/PlanBillingOption';
import ToggleSwitch from '../components/ToggleSwitch';
import CheckBox from '../components/CheckBox';
import Finishing from '../containers/Finishing';
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
  date: string;
};
type CheckInput = {
  title: string;
  description: string;
  price: number;
  selected: boolean;
};
type FullOrder = {
  nameUser: string;
  emailUser: string;
  phoneNumberUser: number;
  planValue: Plan;
  addOns: CheckInput[];
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
  fullOrder: FullOrder;
  handleBackClickStep1: () => void;
  handleClickStep2: () => void;
  checkBoxItems: CheckInput[];
  changeValueCheckBox: (x: string, y: boolean) => void;
  handleClickStep3: () => void;
  handleBackClickStep2: () => void;
  handleBackClickStep3: () => void;
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
                date={plan.date}
              />
            );
          })}
          <ToggleSwitch
            toggleStateSwitch={props.toggleStateSwitch}
            handleToggleSwitch={props.handleToggleSwitch}
          />
        </div>
        <div className="btn-container">
          <button
            className="form-btn back"
            type="button"
            onClick={props.handleBackClickStep1}
          >
            Go Back
          </button>
          <button
            className="form-btn"
            type="button"
            onClick={props.handleClickStep2}
          >
            Next Step
          </button>
        </div>
      </>
    );
  }
  if (props.steps[2].selected) {
    return (
      <>
        <div>
          <h1>Pick add-ons</h1>
          <h3>Add-ons help enhance your gaming experience.</h3>
          {props.checkBoxItems.map((item) => {
            return (
              <CheckBox
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                selected={item.selected}
                changeValueCheckBox={props.changeValueCheckBox}
              />
            );
          })}
        </div>
        <div className="btn-container">
          <button
            className="form-btn back"
            type="button"
            onClick={props.handleBackClickStep2}
          >
            Go Back
          </button>
          <button
            className="form-btn"
            type="button"
            onClick={props.handleClickStep3}
          >
            Next Step
          </button>
        </div>
      </>
    );
  }
  if (props.steps[3].selected) {
    return (
      <>
        <div>
          <h1>Finishing up</h1>
          <h3>Double-check everything looks OK before confirming.</h3>
          <Finishing fullOrder={props.fullOrder} />
        </div>
        <div className="btn-container">
          <button
            className="form-btn back"
            type="button"
            onClick={props.handleBackClickStep3}
          >
            Go Back
          </button>
          <button className="form-btn" type="button">
            Confirm
          </button>
        </div>
      </>
    );
  }
}
