export default function useSteps() {
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
  };
}
