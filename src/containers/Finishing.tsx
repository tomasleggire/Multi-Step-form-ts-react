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
  changePlanButton: () => void;
}

export default function Finishing(props: MyProps) {
  const sumPrice = props.fullOrder.addOns.reduce((total, item) => {
    if (item.selected) {
      total += item.price;
    }
    return total;
  }, 0);

  return (
    <div className="main-finishing">
      <div className="finishin-plan">
        <div className="finishin-plan-text">
          <span>
            {props.fullOrder.planValue.name} ({props.fullOrder.planValue.date})
          </span>
          <a onClick={props.changePlanButton}>Change</a>
        </div>
        <span className="finishin-plan-value">
          ${props.fullOrder.planValue.value}/{props.fullOrder.planValue.date}
        </span>
      </div>
      {sumPrice != 0 && (
        <div className="div-ons-main-container">
          {props.fullOrder.addOns.map((on) => {
            if (on.selected) {
              return (
                <div className="div-ons-main">
                  <span className="ons-title">{on.title}</span>
                  <span className="ons-price">+${on.price}/Mo</span>
                </div>
              );
            }
          })}
        </div>
      )}
      <div className="total-price-container">
        <span className="total-price-date">Total</span>
        {sumPrice != 0 ? (
          <span className="total-price-bill">
            ${props.fullOrder.planValue.value}/{props.fullOrder.planValue.date}{' '}
            + ${sumPrice}/Month
          </span>
        ) : (
          <span className="total-price-bill">
            ${props.fullOrder.planValue.value}/{props.fullOrder.planValue.date}
          </span>
        )}
      </div>
    </div>
  );
}
