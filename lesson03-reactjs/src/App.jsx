import './App.css';
import Student from './Student';
import Header from './Header';

// Trang web
function App() {
  // JSX: Javascript XML (HTML)
  return (
    <div>
      <Header />
      <div className='student-list'>
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
      </div>
    </div>
  );
}

export default App;
