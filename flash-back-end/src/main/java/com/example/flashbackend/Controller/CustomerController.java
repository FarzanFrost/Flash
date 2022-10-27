package com.example.flashbackend.Controller;

import com.example.flashbackend.DTO.*;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.flashbackend.Component.CustomerComponent;
import com.example.flashbackend.DTO.DeleteReview;

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

    @PostMapping("/bookings")
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

    @PostMapping("/updateCustomer")
    public String updateCustomer(@RequestBody EditCustomer editCustomer){
        return customerComponent.UpdateCustomer( editCustomer );
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
    public String deleteReview( @RequestBody DeleteReview deleteReview ){

        return customerComponent.deleteReview( deleteReview.getReviewID() );

    }

    @GetMapping( "/getFolders/{eventId}" )
    public List<Folder> getFolders( @PathVariable BigInteger eventId ){

        return customerComponent.getFolders( eventId );

    }

    @PostMapping("/addFolder")
    public String addFolder( @RequestBody AddFolder addFolder){

        return customerComponent.createFolders( addFolder.getEventID() , addFolder.getName() );

    }

//    @PostMapping( "/deleteEvent" )
//    public String deletePackage(@RequestBody DeleteEvent deleteEvent){
//
//        return customerComponent.deleteEvent( deleteEvent.getEventID() );
//
//    }

}
