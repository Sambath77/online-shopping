import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'hhtp://localhost:8080/api/user/';
const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem('currentUser'))
);

class UserService {
  get currentUserValue() {
    return currentUserSubject.value;
  }

  get currentUser() {
    return this.currentUserSubject.asObservable();
  }

  login(user) {
    const Headers = {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password),
    };
  }
}

export default new UserService();
