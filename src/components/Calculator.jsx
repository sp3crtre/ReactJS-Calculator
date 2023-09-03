import React, { useState } from 'react';

// Imported SVG
import circle from '../assets/image/circle.svg';

// Imported reusable components
import Screen from './Screen';
import Button from './Button';

// Imported CSS styles
import '../assets/styles/calculator.css';
import '../assets/styles/button.css';
import '../assets/styles/screen.css';

export default function Calculator() {
    const [number, setNumber] = useState({
        numb1: '0',
        numb2: '',
      });
    
      const [operator, setOperator] = useState('');
      const [result, setResult] = useState('');
    
      function handleClick(value) {
        if (value === 'AC') {
          // Clear all
          setNumber({ numb1: '0', numb2: '' });
          setOperator('');
          setResult('');
        } else if (value === 'C') {
          // Clear current entry
          setNumber({ ...number, numb1: '0' });
        } else if (value === '=') {
          // Calculate result
          if (operator && number.numb2 !== '') {
            const num1 = parseFloat(number.numb1);
            const num2 = parseFloat(number.numb2);
            let newResult = 0;
    
            switch (operator) {
              case '+':
                newResult = num1 + num2;
                break;
              case '-':
                newResult = num1 - num2;
                break;
              case '*':
                newResult = num1 * num2;
                break;
              case '/':
                if (num2 !== 0) {
                  newResult = num1 / num2;
                } else {
                  newResult = 'Error';
                }
                break;
              case '%':
                newResult = num1 % num2;
                break;
              default:
                newResult = 'Error';
            }
    
            setResult(newResult.toString());
            setNumber({ numb1: newResult.toString(), numb2: '' });
            setOperator(''); // Clear the operator
          }
        } else if (/[0-9]/.test(value) || value === '.') {
          if (operator === '') {
            // If no operator selected, update numb1
            setNumber((prevNumber) => ({
              ...prevNumber,
              numb1: prevNumber.numb1 === '0' ? value : prevNumber.numb1 + value,
            }));
          } else {
            // If an operator is selected, update numb2
            setNumber((prevNumber) => ({
              ...prevNumber,
              numb2: prevNumber.numb2 + value,
            }));
          }
        } else if (/[+\-*/%]/.test(value)) {
          // Handle operator input
          if (number.numb2 !== '') {
            // If numb2 is not empty, calculate and update numb1
            const num1 = parseFloat(number.numb1);
            const num2 = parseFloat(number.numb2);
            let newResult = 0;
    
            switch (operator) {
              case '+':
                newResult = num1 + num2;
                break;
              case '-':
                newResult = num1 - num2;
                break;
              case '*':
                newResult = num1 * num2;
                break;
              case '/':
                if (num2 !== 0) {
                  newResult = num1 / num2;
                } else {
                  newResult = 'Error';
                }
                break;
              case '%':
                newResult = num1 % num2;
                break;
              default:
                newResult = 'Error';
            }
    
            setResult(newResult.toString());
            setNumber({ numb1: newResult.toString(), numb2: '' });
          }
          // Update the operator
          setOperator(value);
        }
      }
  
  return (
    <div className="calculator">
      <div className="title_container">
        <img 
            className="circle" 
            src={circle} 
            alt="circle"
        />
        <h1>Calculator</h1>
      </div>
      <div className="screen_container">
        <Screen
            input={number.numb1}
            operator={operator}
            number2={number.numb2}
            output={result}
        />
      </div>
      <div className="btn_container">
        <div className="btn_group">
          <Button 
                value="AC" 
                style="btn-black" 
                event={() => handleClick('AC')} 
            />
          <Button 
                value="C" 
                style="btn-black" 
                event={() => handleClick('C')} 
            />
          <Button 
                value="%" 
                style="btn-violet" 
                event={() => handleClick('%')} 
            />
          <Button 
                value="/" 
                style="btn-violet" 
                event={() => handleClick('/')} 
            />
        </div>
        <div className="btn_group">
          <Button 
                value="7" 
                style="btn-black" 
                event={() => handleClick('7')} 
            />
          <Button 
                value="8" 
                style="btn-black" 
                event={() => handleClick('8')} 
            />
          <Button 
                value="9" 
                style="btn-black" 
                event={() => handleClick('9')} 
            />
          <Button 
                value="X" 
                style="btn-violet" 
                event={() => handleClick('*')} 
            />
        </div>
        <div className="btn_group">
          <Button 
                value="6" 
                style="btn-black" 
                event={() => handleClick('6')} 
            />
          <Button 
                value="5" 
                style="btn-black" 
                event={() => handleClick('5')} 
            />
          <Button 
                value="4" 
                style="btn-black" 
                event={() => handleClick('4')} 
            />
          <Button 
                value="-" 
                style="btn-violet" 
                event={() => handleClick('-')} 
            />
        </div>
        <div className="btn_group">
          <Button 
                value="3" 
                style="btn-black" 
                event={() => handleClick('3')} 
            />
          <Button 
                value="2" 
                style="btn-black" 
                event={() => handleClick('2')} 
            />
          <Button 
                value="1" 
                style="btn-black" 
                event={() => handleClick('1')} 
            />
          <Button 
                value="+" 
                style="btn-violet" 
                event={() => handleClick('+')} 
            />
        </div>
        <div className="btn_group">
          <Button 
                value="." 
                style="btn-black" 
                event={() => handleClick('.')} 
            />
          <Button 
                value="0" 
                style="btn-black" 
                event={() => handleClick('0')} 
            />
          <Button 
                value="=" 
                style="btn-violet equal" 
                event={() => handleClick('=')} 
            />
        </div>
      </div>
    </div>
  );
}
