import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users/';
class Service {
  createProductToCart(cart) {
    return axios.post(API_URL + 'cart', JSON.stringify(cart), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  createOrder(order) {
    return axios.post(API_URL + 'order', JSON.stringify(order), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new Service();
