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

    @PostMapping("/NewEvent")
    public String addEvent(@RequestBody AddEvent addEvent){
        //String status, String advanceAmount, Date eventDate, Time startTime, Time endTime, String address, String latitude, String longtitude, Integer extraPage, String category, boolean delivered
        Event event = new Event(  addEvent.getStatus(), addEvent.getAdvancedAmount(), addEvent.getEventDate(), addEvent.getStartTime(), addEvent.getEndTime(), addEvent.getAddress(), addEvent.getLatitude(), addEvent.getLongitude(), addEvent.getExtraPage(), addEvent.getCategory(), addEvent.getDelivered() );

        Customer customer = new Customer(addEvent.getCustomerId());

        Package packages = new Package(addEvent.getPackageId());

        return customerComponent.addNewEvent( event, customer, packages );
    }

}
