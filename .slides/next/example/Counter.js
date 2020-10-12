import React from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCounter(count + 1)}>
        +1
      </button>
    </div>
  );
}
