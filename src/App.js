
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Register from './Component/Register';
import Login from './Component/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        </Routes>
        <Routes>
        <Route  path='/products' element={<Products/>} />
      </Routes>
      <Routes>
        <Route  path='/products/:id' element={<Product/>} />
      </Routes>
      <Routes>
        <Route  path='/register' element={<Register/>} />
      </Routes>
      <Routes>
        <Route  path='/login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
