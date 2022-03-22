import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import AddIcon from '@material-ui/icons/Add';
import Service from './auth/Service';
import { useNavigate } from 'react-router-dom';
const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const productCart = (product) => {
    const cart = {
      count: 1,
      products: product,
    };
    Service.createProductToCart(cart).then(navigate('cart'));
  };
  return (
    <div className=''>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <tr>
              <td>
                <Link className='product' to={`/product/${product.id}`}>
                  <Product
                    product={product}
                    productCart={() => productCart(product)}
                  />
                </Link>
              </td>
              <td>
                <button onClick={() => productCart(product)}>
                  <AddIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {products.map((product, key) => (
        <Link className='product' to={`/product/${product.id}`}>
          <Product product={product} productCart={() => productCart(product)} />
        </Link>
      ))}

      <div>
        
      </div> */}
    </div>
  );
};

export default ProductList;
