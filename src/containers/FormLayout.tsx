import React from 'react';
import '../styles/FormLayout.css';

interface MyProps {
  children: React.ReactNode;
}

export default function FormLayout(props: MyProps): JSX.Element {
  return <div className="main-div-form">{props.children}</div>;
}
