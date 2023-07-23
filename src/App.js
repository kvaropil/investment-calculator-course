import logo from './assets/investment-calculator-logo.png';
import { Header } from './components/Header/Header';
import { Button } from './components/UI/Button/Button';
import { InputGroup } from './components/InputForm/InputGroup/InputGroup';
import { Actions } from './components/Actions/Actions';
import { InputForm } from './components/InputForm/InputForm';
import { InvestmentTable } from './components/InvestmentTable/InvestmentTable';

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  const labels = [
    'Current Savings ($)',
    'Yearly Savings ($)',
    'Expected Interest (%, per year)',
    'Investment Duration (years)',
  ];

  const investments = [
    {
      year: 2022,
      totalSavings: 9000,
      interestYear: 0.04,
      interestTotal: 0.19,
      investedCapital: 18000,
    },
    {
      year: 2022,
      totalSavings: 5000,
      interestYear: 0.03,
      interestTotal: 0.1,
      investedCapital: 2000,
    },
    {
      year: 2023,
      totalSavings: 10000,
      interestYear: 0.05,
      interestTotal: 0.2,
      investedCapital: 20000,
    },
  ];

  return (
    <div>
      <Header src={logo}>Investment Calculator</Header>

      <InputForm>
        <InputGroup labels={labels} />
        <Actions>
          <Button typeParam='reset'>Reset</Button>
          <Button primary typeParam='submit'>
            Calculate
          </Button>
        </Actions>
      </InputForm>

      <InvestmentTable investments={investments} />
    </div>
  );
}

export default App;
