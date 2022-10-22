package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Employee;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee , BigInteger> {

    @Override
    List<Employee> findAll();

}
