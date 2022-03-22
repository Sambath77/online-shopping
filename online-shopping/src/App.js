import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header, { HeaderWithRouter } from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Order from './components/Order';
import Cart from './components/Cart';
import EnrollmentForm from './components/resuableForms/EnrollmentForm';
import { theme, ThemeProvider } from '@chakra-ui/react';
import LoginForm from './components/resuableForms/LoginForm';
import Register from './components/Register';
import Item from './components/Item';
import FormikContainer from './components/resuableForms/FormikContainer';
import Product from './components/Product';
import datas from './components/data/datas.json';
import { useEffect, useState } from 'react';
import ProductDetail from './components/ProductDetail';
import React from 'react';

export const productContext = React.createContext();

function App(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(datas);
  });

  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      {/* <FormikContainer /> */}
      <Routes>
        <Route exact path='/' element={<Home datas={datas} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item' element={<Item />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/product/:id'
          element={<ProductDetail products={datas} />}
        />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
