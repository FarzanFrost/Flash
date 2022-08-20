package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Customer;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface CustomerRepository extends CrudRepository< Customer , BigInteger > {

    @Override
    List<Customer> findAll();

}
