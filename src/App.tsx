import React from 'react';
import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';
import FormLayout from './containers/FormLayout';

function App() {
  const { steps } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <FormLayout>
        <h1>Personal info</h1>
        <h3>Provide your name, email address and phone number.</h3>
      </FormLayout>
    </div>
  );
}

export default App;
