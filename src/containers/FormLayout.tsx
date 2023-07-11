import React from 'react';
import '../styles/FormLayout.css';

interface MyProps {
  children: React.ReactNode;
}

export default function FormLayout(props: MyProps): JSX.Element {
  return (
    <form className="main-div-form">
      <div>{props.children}</div>
      <div className="form-buttons">
        <button className="form-btn" type="button">
          Next Step
        </button>
      </div>
    </form>
  );
}
