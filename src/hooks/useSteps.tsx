import { useState } from 'react';
type StateStep = { selected: boolean; completed: boolean };

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
};

export default function useSteps() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [planValue, setPlanValue] = useState<Array<Plan>>([
    {
      name: 'Arcade',
      color: 'orange',
      value: 9,
      selected: true,
    },
    {
      name: 'Advanced',
      color: 'red',
      value: 12,
      selected: false,
    },
    {
      name: 'Pro',
      color: 'blue',
      value: 15,
      selected: false,
    },
  ]);

  const [stateStepOne, setStateStepOne] = useState<StateStep>({
    selected: true,
    completed: false,
  });
  const [stateStepTwo, setStateStepTwo] = useState<StateStep>({
    selected: false,
    completed: false,
  });
  const [stateStepThree, setStateStepThree] = useState<StateStep>({
    selected: false,
    completed: false,
  });
  const [stateStepFour, setStateStepFour] = useState<StateStep>({
    selected: false,
    completed: false,
  });

  const fullOrder: {
    nameUser: string;
    emailUser: string;
    phoneNumberUser: number;
    plan: number;
  } = {
    nameUser: name,
    emailUser: email,
    phoneNumberUser: phoneNumber,
    plan: 9,
  };

  const steps: Step[] = [
    {
      num: 1,
      title: 'Your info',
      selected: stateStepOne.selected,
      completed: stateStepOne.completed,
    },
    {
      num: 2,
      title: 'Select plan',
      selected: stateStepTwo.selected,
      completed: stateStepTwo.completed,
    },
    {
      num: 3,
      title: 'Add-ons',
      selected: stateStepThree.selected,
      completed: stateStepThree.completed,
    },
    {
      num: 4,
      title: 'Summary',
      selected: stateStepFour.selected,
      completed: stateStepFour.completed,
    },
  ];

  const handleClickStep1 = (): void => {
    // let res: boolean = false;
    // const regexName = /^[a-zA-Z\s]+$/;
    // const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // const numberTest = phoneNumber?.toString();
    // if (
    //   regexName.test(name) &&
    //   regexEmail.test(email) &&
    //   numberTest?.length == 10
    // ) {
    //   res = true;
    // } else {
    //   console.log('Alguno de los campos del step uno es invalido');
    // }
    // if (res) {
    setStateStepOne({ selected: false, completed: true });
    setStateStepTwo({ selected: true, completed: false });
    console.log(fullOrder);
    // }
  };

  const changePlanValue = (currentPlan: string): void => {
    const newPlan = [...planValue];
    newPlan.forEach((plan) => (plan.selected = false));
    const currentPlanIndex = newPlan.findIndex(
      (plan) => plan.name == currentPlan
    );
    newPlan[currentPlanIndex].selected = true;
    setPlanValue(newPlan);
    console.log(planValue);
  };

  return {
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
  };
}
