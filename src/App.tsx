import React from 'react';
import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';
import FormLayout from './containers/FormLayout';
import InputText from './components/InputText';

function App() {
  const {
    steps,
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleClickStep1,
  } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <FormLayout>
        <div>
          <h1>Personal info</h1>
          <h3>Provide your name, email address and phone number.</h3>
          <InputText
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            min={5}
            max={35}
            value={name}
            setValue={setName}
          />
          <InputText
            label="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            min={10}
            max={35}
            value={email}
            setValue={setEmail}
          />
          <InputText
            label="Phone Number"
            type="number"
            placeholder="e.g. +1122334455"
            min={0}
            max={11}
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
        </div>
        <button className="form-btn" type="button" onClick={handleClickStep1}>
          Next Step
        </button>
      </FormLayout>
    </div>
  );
}

export default App;
