package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.ManagerComponent;
import com.example.flashbackend.Entity.Package;
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

    @GetMapping("/getPackages")
    public List<Package> getpackages(){

        return managerComponent.getPackages();

    }

}
