import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
