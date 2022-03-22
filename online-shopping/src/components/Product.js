import React from 'react';

import AddIcon from '@material-ui/icons/Add';

function Product({ product, productCart }) {
  //const placeOrder = () => {};
  return (
    <div>
      <div>
        <h3>{'Name: ' + product.name}</h3>
        <h3>
          <span>{'Price: $' + product.price}</span>
        </h3>
        <h3>{'Description: ' + product.detail}</h3>
      </div>
      {/* <div>
        <button onClick={() => productCart(product)}>
          <AddIcon />
        </button>
      </div> */}
    </div>
  );
}

export default Product;
