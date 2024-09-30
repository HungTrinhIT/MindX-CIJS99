import { useEffect, useState } from 'react';

const DemoFCComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue + 1);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={handleIncreaseCount}>Increase count</button>
      <p>Count {count}</p>
    </div>
  );
};

export default DemoFCComponent;
