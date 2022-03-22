package com.online.shopping.aip.service;

import java.util.List;

import com.online.shopping.aip.model.Cart;
import com.online.shopping.aip.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    
    @Autowired
    private CartRepository cartRepository;

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public void deleteCart(final Long id) {
        cartRepository.deleteById(id);
    }

    public Cart updateCart(Cart cart) {
        return cartRepository.save(cart);
    }
}
