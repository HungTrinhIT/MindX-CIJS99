import React, { useMemo, useState } from 'react';

const expensiveCalculationFn = (count) => {
  for (let i = 1; i < 1000000000; i++) {
    count += i;
  }
  return count;
};

const DemoUseMemo = () => {
  const [todos, setTodos] = useState(['Do Homeworks', 'Learn React']);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos((prev) => [...prev, `Do something ${prev.length}`]);
  };

  const listTodo = useMemo(
    () => todos.map((todo, index) => <li key={index}>{todo}</li>),
    [todos]
  );

  const value = useMemo(() => expensiveCalculationFn(count), [count]);

  //   Initial Values
  const formInitialValues = useMemo(
    () => ({
      name: 'Hung',
      isWorking: true,
    }),
    []
  );

  return (
    <div>
      <h6>To do list:</h6>
      <ul>{listTodo}</ul>
      <button onClick={addTodo}>Add new todo</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>VALUE: {value}</p>
    </div>
  );
};

export default DemoUseMemo;
