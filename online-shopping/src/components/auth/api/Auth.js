import axios from 'axios';

class Auth {
  addUser(user) {
    return axios.post('http://localhost:8080/api/users/registration', user);
  }

  addUserLogin(email) {
    return axios.get(`http://localhost:8080/api/users/login`);
  }
}
export default new Auth();
