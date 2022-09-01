package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.ManagerComponent;
import com.example.flashbackend.Entity.Employee;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class Manager {

    @Autowired
    ManagerComponent managerComponent;

    @GetMapping("/employeeCount")
    public long getEmployeeCount(){

        return managerComponent.getEmployeeCount();

    }

    @GetMapping("/eventCount")
    public long getEventCount(){

        return managerComponent.getEventCount();

    }

    @GetMapping("/customerCount")
    public long getCustomerCount(){

        return managerComponent.getCustomerCount();

    }

    @GetMapping("/Packages")
    public List<Package> getpackages(){

        return managerComponent.getPackages();

    }

    @GetMapping( "/Events" )
    public List<Event> getEvents(){

        return managerComponent.getEvents();

    }

    @GetMapping("/Employees")
    public List<Employee> getEmployees(){

        return managerComponent.getEmployees();

    }

    @GetMapping("/Reviews")
    public List<Reviews> getReviews(){

        return managerComponent.getReviews();

    }

}
