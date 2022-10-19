package com.example.flashbackend.Controller;

import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.flashbackend.Component.CustomerComponent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.flashbackend.Entity.Event;

import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class Customer {

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

}
