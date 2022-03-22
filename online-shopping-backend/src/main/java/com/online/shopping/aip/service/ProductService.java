package com.online.shopping.aip.service;

import java.util.List;

import com.online.shopping.aip.model.Product;
import com.online.shopping.aip.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(final Long id) {
        productRepository.deleteById(id);
    }

    public Product findProudct(final Long id) {
        return productRepository.findById(id).get();
    }
    
}
