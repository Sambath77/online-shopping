package com.online.shopping.aip.service;

import java.util.List;

import com.online.shopping.aip.model.Transaction;
import com.online.shopping.aip.repository.TransactionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    
    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction createdTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public List<Transaction> findAllTransactions() {
        return transactionRepository.findAll();
    }
}
