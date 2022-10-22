package com.example.flashbackend.Controller;

import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import com.example.flashbackend.DTO.AddEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.flashbackend.Component.CustomerComponent;
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

//    @PostMapping("/NewEvent")
//    public String addEvent(@RequestBody AddEvent addEvent){
//        Event event = new Event(addEvent.getEventDate(), addEvent.getStartTime(), addEvent.getEndTime(), addEvent.getStatus(), addEvent.getAdvancedAmount(), addEvent.getCustomerId(), addEvent.getPackageId(), addEvent.getAddress(), addEvent.getLatitude(), addEvent.getLongitude(), addEvent.getExtraPage(), addEvent.getCategory(), addEvent.getDelivered() );
//        return customerComponent.addNewEvent( event );
//    }

}
