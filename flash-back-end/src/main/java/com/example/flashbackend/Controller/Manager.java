package com.example.flashbackend.Controller;

import com.example.flashbackend.DAO.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class Manager {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/employeeCount")
    public long getEmployeeCount(){

        return employeeRepository.count();

    }

}
