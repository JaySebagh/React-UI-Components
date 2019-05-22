import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';
 
const App = () => {
  return (
    <div className='calculator-container'>
        <CalculatorDisplay buttonStyle='display' text={0}/>
      <div className='buttons'>
        <div className="numbers">
          <ActionButton buttonStyle={'action'} text={'clear'}/>
          <NumberButton buttonStyle={'number'} text={7} />
          <NumberButton buttonStyle={'number'} text={8} />
          <NumberButton buttonStyle={'number'} text={9} />
          <NumberButton buttonStyle={'number'} text={4} />
          <NumberButton buttonStyle={'number'} text={5} />
          <NumberButton buttonStyle={'number'} text={6} />
          <NumberButton buttonStyle={'number'} text={1} />
          <NumberButton buttonStyle={'number'} text={2} />
          <NumberButton buttonStyle={'number'} text={3} />
          <ActionButton buttonStyle={'action'} text={0}/>
        </div>
        <div className="operators">
          <NumberButton buttonStyle={'operator'} text='/' />
          <NumberButton buttonStyle={'operator'} text='x' />
          <NumberButton buttonStyle={'operator'} text='-' />
          <NumberButton buttonStyle={'operator'} text='+' />
          <NumberButton buttonStyle={'operator'} text='=' />
        </div>
      </div>
    </div>
  );
};

export default App;