import React, { useState } from 'react';

function Cart() {
  const [orders, setOrders] = useState([]);

  const menu = [
    {
      id: 1,
      name: 'Game',
      price: 200,
      quatity: 2,
      orderDetail: 'new orders',
    },
  ];
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quatity</th>
            <th>Order Detail</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.quatity}</td>
              <td>{order.orderDetail}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Check out</button>
    </div>
  );
}

export default Cart;
