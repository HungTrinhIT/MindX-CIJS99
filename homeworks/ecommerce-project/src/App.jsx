import './App.css';
import ProductList from './components/ProductList/ProductList';
import SizeFilter from './components/SizeFilter/SizeFilter';

function App() {
  return (
    <div className='container'>
      <h1>Trang web mua bán quần áo</h1>
      <div className='main'>
        <SizeFilter />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
