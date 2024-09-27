import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import About from './pages/AboutPage';
import GithubUserDetailPage from './pages/GithubUserDetailPage';

import './App.css';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='container mt-4'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/users/:username' element={<GithubUserDetailPage />} />
          <Route path='/about-us' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

// / -> Homepage
// /about-us -> Aboutus
// /users/HungTrinhIT -> GithubUserDetail
// What is semantic html tags?
// lazy loading
