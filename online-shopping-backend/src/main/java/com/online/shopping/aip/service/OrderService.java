package com.online.shopping.aip.service;

import java.util.List;

import com.online.shopping.aip.model.Order;
import com.online.shopping.aip.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

}
