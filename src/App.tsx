import React from 'react';
import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';
import FormLayout from './containers/FormLayout';
import StepsLayouts from './containers/StepsLayouts';

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
    planBilling,
    setPlanValue,
  } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <FormLayout>
        <StepsLayouts
          steps={steps}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleClickStep1={handleClickStep1}
          planBilling={planBilling}
          setPlanValue={setPlanValue}
        />
      </FormLayout>
    </div>
  );
}

export default App;
