package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.CustomerRepository;
import com.example.flashbackend.DAO.LoginRepository;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AddCustomer {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    LoginRepository loginRepository;

    public void addCustomer(Customer customer , Login login ){

        customerRepository.save( customer );

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        String encodedPassword = bCryptPasswordEncoder.encode( login.getPassword() );

        loginRepository.insertIntoLogin(login.getEmail(), encodedPassword , login.getSaltkey(), customer.getCustomerID(),null , login.getDateTime());

    }



}
