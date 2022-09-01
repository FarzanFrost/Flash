package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ManagerComponent {

    @Autowired
    EmployeeRepository employeeRepository;

    public long getEmployeeCount(){

        return employeeRepository.count();

    }

}
