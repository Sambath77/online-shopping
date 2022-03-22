package com.online.shopping.aip.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

 

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="product_id", referencedColumnName="id")
    private Product product;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="transaction_id", referencedColumnName="id")
    private Transaction transaction;
}
