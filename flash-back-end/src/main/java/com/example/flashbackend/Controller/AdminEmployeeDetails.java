package com.example.flashbackend.Controller;


import com.example.flashbackend.Component.AdminEmployeeDetailsComponent;
import com.example.flashbackend.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class AdminEmployeeDetails {

    @Autowired
    AdminEmployeeDetailsComponent adminEmployeeDetailsComponent;
    @GetMapping("/AdminEmployees")
    public List<Employee> getEmployees(){
        return adminEmployeeDetailsComponent.getEmployees();
    }
    @PostMapping("/adminDeleteEmployee")
    public String deleteEmployee( @RequestBody BigInteger reviewId ){
        return adminEmployeeDetailsComponent.deleteEmployee( reviewId );
    }
}
