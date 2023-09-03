import React from 'react';

export default function Screen(props) {
  const { input, operator, number2, output } = props;

  return (
    <div className="screen">
        <div className="input">
            {number2} 
            {operator} 
            {input}
        </div>
        <div className="output">
            {output}
        </div>
    </div>
  );
}
