import { useState } from 'react';

export default function useSteps() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const fullOrder: {
    nameUser: string;
    emailUser: string;
    phoneNumberUser: number;
  } = {
    nameUser: name,
    emailUser: email,
    phoneNumberUser: phoneNumber,
  };

  const handleClickStep1 = (): void => {
    console.log(fullOrder);
  };

  type Step = {
    num: number;
    title: string;
    selected: boolean;
    completed: boolean;
  };

  const steps: Step[] = [
    {
      num: 1,
      title: 'Your info',
      selected: true,
      completed: false,
    },
    {
      num: 2,
      title: 'Select plan',
      selected: false,
      completed: false,
    },
    {
      num: 3,
      title: 'Add-ons',
      selected: false,
      completed: false,
    },
    {
      num: 4,
      title: 'Summary',
      selected: false,
      completed: false,
    },
  ];

  return {
    steps,
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleClickStep1,
  };
}
