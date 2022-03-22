package com.online.shopping.aip.service;

import java.util.List;

import com.online.shopping.aip.model.Users;
import com.online.shopping.aip.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
   
    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public Users getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public Users saveUser(Users user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Users getUser(String username) {
        return userRepository.findUsersByUsername(username);
    }
}
