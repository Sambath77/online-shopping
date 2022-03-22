package com.online.shopping.aip.repository;



import com.online.shopping.aip.model.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>{
    
}
