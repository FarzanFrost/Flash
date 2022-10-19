package com.example.flashbackend.Controller;

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

    @PostMapping("/addEmployee")
    public String addEmployee(@RequestBody AddEmployee addEmployee){

        System.out.println( " " + addEmployee.getContactNo() + " " + addEmployee.getFirstName() + " " + addEmployee.getLastName() + " " + addEmployee.getNic() );

        Employee employee = new Employee( addEmployee.getFirstName() , addEmployee.getLastName() , addEmployee.getGender() , addEmployee.getType() , addEmployee.getProfilePic() , addEmployee.getNic() , addEmployee.getContactNo() , addEmployee.getAddress() );

        Login login = new Login( addEmployee.getEmail() , addEmployee.getPassword() , "faranfrost" , new Timestamp(System.currentTimeMillis()) );

        return managerComponent.addNewEmployee( employee , login );

    }

    @PostMapping("/deleteReview")
    public String deleteReview( @RequestBody BigInteger reviewId ){

        return managerComponent.deleteReview( reviewId );

    }

}
