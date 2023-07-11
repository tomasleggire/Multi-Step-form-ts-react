import React from 'react';
import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';
import FormLayout from './containers/FormLayout';
import InputText from './components/InputText';

function App() {
  const { steps } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <FormLayout>
        <h1>Personal info</h1>
        <h3>Provide your name, email address and phone number.</h3>
        <InputText
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          min={5}
          max={35}
        />
        <InputText
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          min={10}
          max={35}
        />
        <InputText
          label="Phone Number"
          type="number"
          placeholder="e.g. +1122334455"
          min={0}
          max={11}
        />
      </FormLayout>
    </div>
  );
}

export default App;
