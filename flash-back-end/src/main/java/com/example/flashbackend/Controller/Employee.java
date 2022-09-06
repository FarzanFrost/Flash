package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.EmployeeComponent;
import com.example.flashbackend.Entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Employee {

    @Autowired
    EmployeeComponent employeeComponent;

    @GetMapping("/events")
    public List<Event>getEvents(){
        return employeeComponent.getEvents();
    }

}


