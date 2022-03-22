package com.online.shopping.aip.repository;

import com.online.shopping.aip.model.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<Users, Long>{
    
    @Query("SELECT u FROM Users u WHERE u.username = ?1")
    Users findUsersByUsername(String username);
}
