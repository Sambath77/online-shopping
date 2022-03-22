package com.online.shopping.aip.controller;

import java.util.List;

import com.online.shopping.aip.model.Cart;
import com.online.shopping.aip.model.Order;
import com.online.shopping.aip.model.Transaction;
import com.online.shopping.aip.model.Users;
import com.online.shopping.aip.service.CartService;
import com.online.shopping.aip.service.OrderService;
import com.online.shopping.aip.service.ProductService;
import com.online.shopping.aip.service.TransactionService;
import com.online.shopping.aip.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @GetMapping()
    public List<Users> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public Users getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/registration")
    public Users creatUser(@RequestBody Users user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login/{username}")
    public ResponseEntity<?> saveUserByEmail(@PathVariable String username) {
        Users user = userService.getUser(username);
        if (user == null) {
            return new ResponseEntity<>(user, HttpStatus.BAD_REQUEST);
        } else {
            return ResponseEntity.ok().build();
        }
    }

    @GetMapping("/products-all")
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
    } 

    @PostMapping("/transaction")
    public ResponseEntity<?> saveTransaction(@RequestBody Transaction transaction) {
        return new ResponseEntity<>(transactionService.createdTransaction(transaction), HttpStatus.CREATED);
    }

    @GetMapping("/transaction-all")
    public ResponseEntity<?> getALlTransactions() {
        return new ResponseEntity<>(transactionService.findAllTransactions(), HttpStatus.OK);
    }

    @GetMapping("/order-all")
    public ResponseEntity<?> getALlOrders() {
        return new ResponseEntity<>(orderService.getAllOrder(), HttpStatus.OK);
    }

    @PostMapping("/order")
    public ResponseEntity<?> saveOrder(@RequestBody Order order) {
        return new ResponseEntity<>(orderService.saveOrder(order), HttpStatus.CREATED);
    }

    @GetMapping("/cart-all")
    public ResponseEntity<?> getAllCarts() {
        return new ResponseEntity<>(cartService.getAllCarts(), HttpStatus.OK);
    }

    @PostMapping("/cart")
    public ResponseEntity<?> saveCart(@RequestBody Cart cart) {
        return new ResponseEntity<>(cartService.saveCart(cart), HttpStatus.CREATED);
    }

}
