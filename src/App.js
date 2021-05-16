import React, { useState } from 'react';
import Display from "./Components/Display/Display";
import KeyPad from "./Components/KeyPad/KeyPad";
import './App.scss';

function App() {
  const [prevOp, setPrevOp] = useState(null)
  const [curNum, setCurNum] = useState('0')
  const [firstNum, setFirstNum] = useState(0)
  const [display, setDisplay] = useState("0")

  const handleCalculation = (op) => {
    switch (prevOp) {
      case '+':
        setDisplay((Number(firstNum) + Number(curNum))+op)
        setFirstNum(Number(firstNum) + Number(curNum))
        break;
      case '-':
        setDisplay((Number(firstNum) - Number(curNum))+op)
        setFirstNum(Number(firstNum) - Number(curNum))
        break;
      case "×":
        if(curNum == 0){
          setDisplay((Number(firstNum) * 1)+op)
          setFirstNum(Number(firstNum) * 1)
          break;
        }
        setDisplay((Number(firstNum) * Number(curNum))+op)
        setFirstNum(Number(firstNum) * Number(curNum))
        break;
      case "÷":
        if(curNum == 0){
          setDisplay((Number(firstNum) / 1)+op)
          setFirstNum(Number(firstNum) / 1)
          break;
        }
        setDisplay((Number(firstNum) / Number(curNum))+op)
        setFirstNum(Number(firstNum) / Number(curNum))
        break;

    }
  }
  const handleEqualKey = () => {
    switch (prevOp) {
      case '+':
        setDisplay(Number(firstNum) + Number(curNum))
        setCurNum(Number(firstNum) + Number(curNum))
        break;
      case '-':
        setDisplay(Number(firstNum) - Number(curNum))
        setCurNum(Number(firstNum) - Number(curNum))
        break;
      case "×":
        if(curNum == 0){
          setDisplay((Number(firstNum) * 1))
          setCurNum(Number(firstNum) * 1)
          break;
        }
        setDisplay(Number(firstNum) * Number(curNum))
        setCurNum(Number(firstNum) * Number(curNum))
        break;
      case "÷":
        if(curNum == 0){
          setDisplay(Number(firstNum) / 1)
          setCurNum(Number(firstNum) / 1)
          break;
        }
        setDisplay(Number(firstNum) / Number(curNum))
        setCurNum(Number(firstNum) / Number(curNum))
        break;

    }
  }
  

  const handleDisplay = (role, text) => {
    if(role === 'num'){
      setDisplay(display => display === "0"? display = text : display += text);
      setCurNum(curNum => curNum === "0"? curNum = text : curNum += text);

    }else{
      if(text === "="){
        handleEqualKey()
        setPrevOp(text)

      }else if(text === "C"){
        setCurNum('0')
        setFirstNum('0')
        setDisplay('0')
        setPrevOp(null)
        
      }else{
        if(prevOp){
          if(prevOp === '='){
            setDisplay(display + text)
            setFirstNum(curNum)
            setCurNum('0')

          }else{
            setCurNum('0')
            handleCalculation(text)
          }          
          setPrevOp(text)
          
        }else{
          setFirstNum(curNum)
          setCurNum('0')
          setPrevOp(text)
          setDisplay(display + text)
        }

      }
    }
  }

  return (
    <div className="App">
      <div className="claculator">
        <Display text={display} />
        <KeyPad onClick={handleDisplay} />
      </div>
    </div>
  );
}

export default App;
