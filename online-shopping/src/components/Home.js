import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './auth/AuthenticationService';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from 'react-router-dom';

import ProductListPage from './ProductListPage';
function Home({ datas }) {
  const isLoggedIn = AuthenticationService.isLoggedIn();
  const navigate = useNavigate();
  //const [products, setProducts] = useState([]);
  // const menu = [
  //   { id: 1, name: 'Controller', price: 124, detail: 'IOS game controller' },
  //   { id: 2, name: 'Keyboard', price: 120, detail: 'Colorful keyboard' },
  //   { id: 3, name: 'Mouse', price: 99, detail: 'Wireless mouse' },
  // ];

  // useEffect(() => {
  //   setProducts(datas);
  // });
  const handleAdd = () => {
    navigate('item');
  };
  return (
    <div className='container'>
      <h1>Welcome to Panada Shopping</h1>
      {!isLoggedIn && (
        <div>
          <Link to='register' className='link'>
            New member? Create an account
          </Link>
          <Link to='login' className='link'>
            Signin
          </Link>
        </div>
      )}
      {isLoggedIn && <ProductListPage products={datas} />}
      {/* {isLoggedIn && (
        <div>
          <button onClick={handleAdd}>
            <AddIcon />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Home;
