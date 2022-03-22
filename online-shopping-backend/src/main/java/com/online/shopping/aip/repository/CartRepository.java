package com.online.shopping.aip.repository;

import com.online.shopping.aip.model.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long>{
    
}
