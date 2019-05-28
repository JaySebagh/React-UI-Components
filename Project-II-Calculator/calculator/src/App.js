import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';

const nums = [7,8,9,4,5,6,1,2,3];
const operators = ["/","x","-","+","="];

const App = () => {
  return (
    <div className='calculator-container'>
        <CalculatorDisplay buttonStyle='display' text={0}/>
      <div className='buttons'>
        <div className="numbers">
          <ActionButton buttonStyle={'action'} text={'clear'}/>
          {nums.map(number => {
            return <NumberButton buttonStyle={"number"} text={number} />
          })}
          <ActionButton buttonStyle={'action'} text={0}/>
        </div>
        <div className="operators">
          {operators.map(operator => {
            return <NumberButton buttonStyle={"operator"} text={operator} />
          })}
        </div>
      </div>
    </div>
  );
};

export default App;