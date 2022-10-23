package com.example.flashbackend.Controller;

import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.DTO.AddEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.flashbackend.Component.CustomerComponent;
import com.example.flashbackend.Entity.Event;



import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    CustomerComponent customerComponent;

    @GetMapping("/Allevent")

    public List<Event> getEvents(){
        return customerComponent.getEvents();
    }

    @GetMapping("/AllPackages")
    public List<Package> getPackages(){
        return customerComponent.getPackages();
    }

    @GetMapping("/AllReviews")
    public List<Reviews> getReviews(){
        return customerComponent.getReviews();
    }

    @PostMapping("/newEvent")
    public String addEvent(){
        Event event = new Event();
        Customer customer = new Customer();
        Package packages = new Package();

        return customerComponent.addNewEvent(event, customer, packages);
    }

}
