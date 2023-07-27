import { useEffect, useState } from 'react';
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
  date: string;
};

type FullOrder = {
  nameUser: string;
  emailUser: string;
  phoneNumberUser: number;
  planValue: Plan;
};

type CheckInput = {
  title: string;
  description: string;
  price: number;
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
      date: 'Month',
    },
    {
      name: 'Advanced',
      color: 'red',
      value: 12,
      selected: false,
      date: 'Month',
    },
    {
      name: 'Pro',
      color: 'blue',
      value: 15,
      selected: false,
      date: 'Month',
    },
  ]);

  const [checkBoxItems, setCheckBoxItems] = useState<Array<CheckInput>>([
    {
      title: 'Online service',
      description: 'Access to multiplayer games.',
      price: 1,
      selected: false,
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save.',
      price: 2,
      selected: false,
    },
    {
      title: 'Customizable profile',
      description: 'Custom themes for your profile',
      price: 2,
      selected: false,
    },
  ]);

  const [toggleStateSwitch, setToggleStateSwitch] = useState<boolean>(true);

  const [fullOrderPlanValue, setFullOrderPlanValue] = useState<Plan>({
    name: 'Arcade',
    color: 'orange',
    value: 9,
    selected: true,
    date: 'Month',
  });

  const [stateStepOne, setStateStepOne] = useState<StateStep>({
    selected: false,
    completed: false,
  });
  const [stateStepTwo, setStateStepTwo] = useState<StateStep>({
    selected: false,
    completed: false,
  });
  const [stateStepThree, setStateStepThree] = useState<StateStep>({
    selected: true,
    completed: false,
  });
  const [stateStepFour, setStateStepFour] = useState<StateStep>({
    selected: false,
    completed: false,
  });

  useEffect(() => {
    if (toggleStateSwitch) {
      const newPlan = [...planValue];
      newPlan.forEach((plan) => {
        plan.date = 'Month';
      });
      newPlan[0].value = 9;
      newPlan[1].value = 12;
      newPlan[2].value = 15;
      setPlanValue(newPlan);
    } else {
      const newPlan = [...planValue];
      newPlan.forEach((plan) => {
        plan.date = 'Year';
        plan.value = plan.value * 10 - 1;
      });
      setPlanValue(newPlan);
    }
  }, [toggleStateSwitch]);

  useEffect(() => {
    const newPlanValue = planValue.filter((plan) => plan.selected === true);
    setFullOrderPlanValue(newPlanValue[0]);
  }, [planValue]);

  const fullOrder: FullOrder = {
    nameUser: name,
    emailUser: email,
    phoneNumberUser: phoneNumber,
    planValue: fullOrderPlanValue,
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
    let res: boolean = false;
    const regexName = /^[a-zA-Z\s]+$/;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const numberTest = phoneNumber?.toString();
    if (
      regexName.test(name) &&
      regexEmail.test(email) &&
      numberTest?.length == 10
    ) {
      res = true;
    } else {
      console.log('Alguno de los campos del step uno es invalido');
    }
    if (res) {
      setStateStepOne({ selected: false, completed: true });
      setStateStepTwo({ selected: true, completed: false });
    }
  };

  const handleBackClickStep1 = (): void => {
    setStateStepOne({ selected: true, completed: false });
    setStateStepTwo({ selected: false, completed: false });
  };

  const handleClickStep2 = (): void => {
    setStateStepTwo({ selected: false, completed: true });
    setStateStepThree({ selected: true, completed: false });
  };

  const changePlanValue = (currentPlan: string): void => {
    const newPlan = [...planValue];
    newPlan.forEach((plan) => (plan.selected = false));
    const currentPlanIndex = newPlan.findIndex(
      (plan) => plan.name == currentPlan
    );
    newPlan[currentPlanIndex].selected = true;
    setPlanValue(newPlan);
  };

  const handleToggleSwitch = (): void => {
    setToggleStateSwitch(!toggleStateSwitch);
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
    toggleStateSwitch,
    handleToggleSwitch,
    fullOrder,
    handleBackClickStep1,
    handleClickStep2,
    checkBoxItems,
  };
}
