package com.online.shopping.aip.repository;

import java.util.List;
import java.util.Optional;

import com.online.shopping.aip.model.Transaction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
    // @Query("select t from Transaction t where t.userId = ?1")
    // Optional<Transaction> findById(Long id);
}
