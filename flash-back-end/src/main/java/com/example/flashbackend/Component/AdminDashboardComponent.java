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
public class AdminDashboardComponent {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    LoginRepository loginRepository;

    public long getEmployeeCount(){
        return employeeRepository.count();
    }

    public long getEventCount(){
        return eventRepository.count();
    }

    public long getCustomerCount(){
        return customerRepository.count();
    }

    public List<Login> getLoginDetails(){
        return loginRepository.findAll();
    }
    public List<Event> getEventDetails(){
        return eventRepository.findAll();
    }
}
