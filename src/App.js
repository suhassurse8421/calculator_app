import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const operations = ["+", "-", "*", "/"]

  const [firstNumber, setFirstNumber] = useState("");

  const [secondNumber, setSecondNumber] = useState("");

  const [currentOperation, setCurrentOperation] = useState("");

  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result);
  }, [result])


  const clickNumbers = (val) => {
    if (currentOperation === "") {
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  }

  const clickOperations = (val) => {
    setCurrentOperation(val);
  }

  const performOperation = () => {
    switch (currentOperation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {firstNumber + "" + currentOperation + secondNumber}
          <br />
          {"="}
          <br />
          {result === 0 ? null : result}
        </div>
        <div className='buttons'>
          <div className='leftSide'>
            <div id="result" onClick={() => { performOperation() }}>Result</div>
            <div className='numbers'>
              {numbers.map((val) => {
                return <div id="individualNumber" onClick={() => { clickNumbers(val) }}>{val}</div>
              })}
            </div>
          </div>
          <div className='leftSide'>
            {operations.map((val) => {
              return <div id="operation" onClick={() => { clickOperations(val) }}>{val}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
