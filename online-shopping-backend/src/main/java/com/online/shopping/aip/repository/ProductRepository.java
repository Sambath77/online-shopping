package com.online.shopping.aip.repository;

import java.util.List;

import com.online.shopping.aip.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long>{
}
