package com.example.flashbackend.Controller;


import com.example.flashbackend.Component.AdminDashboardComponent;
import com.example.flashbackend.Component.AdminEmployeeDetailsComponent;
import com.example.flashbackend.Component.ManagerComponent;
import com.example.flashbackend.DTO.AddEmployee;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class AdminDashboard {

    @Autowired
    AdminDashboardComponent adminDashboardComponent;

    @GetMapping("/adminDashboardEmployeeCount")
    public long getEmployeeCount(){
        return adminDashboardComponent.getEmployeeCount();
    }

    @GetMapping("/adminDashboardEventCount")
    public long getEventCount(){
        return adminDashboardComponent.getEventCount();
    }

    @GetMapping("/adminDashboardCustomerCount")
    public long getCustomerCount(){
        return adminDashboardComponent.getCustomerCount();
    }

    @GetMapping("/AdminLoginDetails")
    public List<Login> getEmployees(){
        return adminDashboardComponent.getLoginDetails();
    }
    @GetMapping("/AdminEventDetails")
    public List<Event> getEventDetails(){
        return adminDashboardComponent.getEventDetails();
    }

}
