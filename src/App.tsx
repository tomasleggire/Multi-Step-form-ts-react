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
    planValue,
    changePlanValue,
    toggleStateSwitch,
    handleToggleSwitch,
    fullOrder,
    handleBackClickStep1,
    handleClickStep2,
    checkBoxItems,
    changeValueCheckBox,
    handleClickStep3,
    handleBackClickStep2,
    handleBackClickStep3,
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
          planValue={planValue}
          changePlanValue={changePlanValue}
          toggleStateSwitch={toggleStateSwitch}
          handleToggleSwitch={handleToggleSwitch}
          fullOrder={fullOrder}
          handleBackClickStep1={handleBackClickStep1}
          handleClickStep2={handleClickStep2}
          checkBoxItems={checkBoxItems}
          changeValueCheckBox={changeValueCheckBox}
          handleClickStep3={handleClickStep3}
          handleBackClickStep2={handleBackClickStep2}
          handleBackClickStep3={handleBackClickStep3}
        />
      </FormLayout>
    </div>
  );
}

export default App;
