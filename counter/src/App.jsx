import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(2);

  const checkComposite = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return true;
      }
    }
    return false;
  };

  const checkPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
    
  };

  return (
    <div className='card'>
      <h2>{value}</h2>
      <p style={{ color: 'black' }}>{value % 2 === 0 ? 'Even' : 'Odd'}</p>
      <p style={{ color: 'black' }}>Number is prime: {checkPrime(value) ? 'True' : 'False'}</p>
      <p style={{ color: 'black' }}>Number is composite: {checkComposite(value) ? 'True' : 'False'}</p>
      <button disabled={value === 0} onClick={() => setValue(value - 1)}>-</button>

      <button onClick={() => setValue(0)}>Reset</button>

      <button onClick={() => setValue(value + 1)}>+</button>

    </div>
  );
}

export default App;
