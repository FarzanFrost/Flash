package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Employee;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface EmployeeRepository extends CrudRepository<Employee , BigInteger> {
}
