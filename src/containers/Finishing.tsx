import React from 'react';
import '../styles/Finishing.css';
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
  fullOrder: FullOrder;
}

export default function Finishing(props: MyProps) {
  return (
    <div className="main-finishing">
      <div className="finishin-plan">
        <div className="finishin-plan-text">
          <span>
            {props.fullOrder.planValue.name} ({props.fullOrder.planValue.date})
          </span>
          <a>Change</a>
        </div>
        <span className="finishin-plan-value">
          ${props.fullOrder.planValue.value}/{props.fullOrder.planValue.date}
        </span>
      </div>
    </div>
  );
}
