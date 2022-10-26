package com.example.flashbackend.Component;


import com.example.flashbackend.DAO.*;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.util.List;

@Component
public class AdminEmployeeDetailsComponent {
    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    public String deleteEmployee(BigInteger employeeId ){

        employeeRepository.deleteById( employeeId );
        return "done";
    }
}
