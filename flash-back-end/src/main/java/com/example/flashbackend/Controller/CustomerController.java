package com.example.flashbackend.Controller;

import com.example.flashbackend.DTO.*;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import com.example.flashbackend.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.flashbackend.Component.CustomerComponent;
import com.example.flashbackend.Entity.Event;

import java.math.BigInteger;
import java.sql.Timestamp;
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

    @GetMapping("/Customers")
    public List<Customer> getCustomers(){
        return customerComponent.getCustomer();
    }

    @PostMapping("/Booking")
    public String addEvent(@RequestBody AddEvent addEvent){

        return customerComponent.addNewEvent( addEvent );
    }

    @PostMapping("updateEvent")
    public String updateEvent(@RequestBody EditEvent editEvent){

        return customerComponent.updateEvent( editEvent );
    }

    @PostMapping("/updateBank")
    public String addBank(@RequestBody AddBankDetail addBankDetail){
        return customerComponent.addBankDetail( addBankDetail );
    }

    @PostMapping("/newReview")
    public String addReviews(@RequestBody AddReview addReview){
        Reviews reviews = new Reviews(addReview.getComment(), new Timestamp(System.currentTimeMillis()), addReview.getRate(), addReview.getDeleted());
        return customerComponent.addReview( reviews );
    }

    @PostMapping("/deleteCustomer")
    public String deleteCustomer( @RequestBody BigInteger customerId ){

        return customerComponent.deleteCustomer( customerId );

    }

    @PostMapping("/deleteReviews")
    public String deleteReview( @RequestBody BigInteger reviewId ){

        return customerComponent.deleteReview( reviewId );

    }

//    @PostMapping( "/deleteEvent" )
//    public String deletePackage(@RequestBody DeleteEvent deleteEvent){
//
//        return customerComponent.deleteEvent( deleteEvent.getEventID() );
//
//    }

}
