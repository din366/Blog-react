import React, {useState} from 'react';
import './Counter.scss'

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className='root2'>{count}</h1>
      <button onClick={increment}>
        inc
      </button>
    </div>
  );
};

export default Count;