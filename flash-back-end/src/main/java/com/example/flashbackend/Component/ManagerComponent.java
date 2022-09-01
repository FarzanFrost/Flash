package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.CustomerRepository;
import com.example.flashbackend.DAO.EmployeeRepository;
import com.example.flashbackend.DAO.EventRepository;
import com.example.flashbackend.DAO.PackageRepository;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ManagerComponent {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PackageRepository packageRepository;

    public long getEmployeeCount(){

        return employeeRepository.count();

    }

    public long getEventCount(){

        return eventRepository.count();

    }

    public long getCustomerCount(){

        return customerRepository.count();

    }

    public List<Package> getPackages(){

        return packageRepository.findAll();

    }

}
