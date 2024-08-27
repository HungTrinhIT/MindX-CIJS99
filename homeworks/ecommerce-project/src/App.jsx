import ProductList from './components/ProductList/ProductList';
import SizeFilter from './components/SizeFilter/SizeFilter';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <SizeFilter />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
