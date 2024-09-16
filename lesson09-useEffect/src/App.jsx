import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Box from './Box';

function App() {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([{ name: 'Hung' }]);
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  // 1. useEffect không có dependecies: run sau mỗi lần state change | props change
  // 2. useEffect có dependencies:
  // - RỖNG => useEffect chỉ run sau lần rending render đầu tiên (mounting)
  // - KHÔNG RỖNG: useEffect sẽ chạy dựa vào danh sách dependencies
  // - Trong trường hợp bên dưới useEffect chỉ chạy khi count thay đổi

  // 3. useEffect mà không có deps thì sẽ runs sau mỗi lần component re-render
  // 4. effectCallback => return callback function
  // cleanUp function được thực thi trong chu trình unmounting

  useEffect(() => {
    console.log('Effect runs');
    document.title = `You clicked ${count} times`;
  }, [count]);

  console.log('Component renders');

  const handleAddStudent = () => {
    setStudents((prev) => [...prev, { name: `Hung ${prev.length + 1}` }]);
  };

  return (
    <div
      style={{
        minHeight: '2000px',
      }}>
      <div>
        <button onClick={() => setIsBoxVisible(false)}>Remove Box</button>
        {isBoxVisible && <Box />}
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={handleAddStudent}>Add Student</button>
      <div>
        {students.map((student) => (
          <p>{student.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
