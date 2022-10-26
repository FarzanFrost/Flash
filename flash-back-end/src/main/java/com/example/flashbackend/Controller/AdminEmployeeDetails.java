package com.example.flashbackend.Controller;


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
public class AdminEmployeeDetails {

    @Autowired
    AdminEmployeeDetailsComponent adminEmployeeDetailsComponent;
    @GetMapping("/AdminEmployees")
    public List<Employee> getEmployees(){
        return adminEmployeeDetailsComponent.getEmployees();
    }
    @PostMapping("/adminDeleteEmployee")
    public String deleteEmployee( @RequestBody BigInteger employeeId ){
        return adminEmployeeDetailsComponent.deleteEmployee( employeeId );
    }
}
