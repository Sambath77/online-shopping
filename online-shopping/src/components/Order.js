import React from 'react';

function Order(props) {
  //const {orders} = props
  const orders = [
    {
      id: 1,
      productName: 'Game',
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
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.productName}</td>
              <td>{order.price}</td>
              <td>{order.quatity}</td>
              <td>{order.orderDetail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
