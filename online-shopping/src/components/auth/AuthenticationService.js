import axios from 'axios';

class AuthenticationService {
  registerUser(username, password) {
    sessionStorage.setItem('auth', username);
    this.setupAxiosInterceptors(this.createBasicAuth(username, password));
  }

  getUserLoggedIn() {
    const user = sessionStorage.getItem('auth');
    if (user != null) {
      return user;
    }
    return null;
  }

  isLoggedIn() {
    let auth = sessionStorage.getItem('auth');
    if (auth === null) return false;
    return true;
  }
  deleteUser() {
    sessionStorage.removeItem('auth');
  }

  setupAxiosInterceptors(basicAuth) {
    axios.interceptors.request.use((config) => {
      if (this.isLoggedIn()) {
        config.headers.authorization = basicAuth;
      }
      return config;
    });
  }

  createBasicAuth(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }
}
export default new AuthenticationService();
