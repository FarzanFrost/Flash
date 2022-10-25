package com.example.flashbackend.Controller;

import com.example.flashbackend.DTO.AddBankDetail;
import com.example.flashbackend.DTO.AddReview;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.DTO.AddEvent;
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

//    @PostMapping("/Booking")
//    public String addEvent(@RequestBody AddEvent addEvent){
//
//        return customerComponent.addNewEvent( addEvent );
//    }

//    @PostMapping("updateEvent")
//    public String updateEvent(@RequestBody AddEvent addEvent){
//
//        return customerComponent.updateEvent( addEvent );
//    }

//    @PostMapping("/newBank")
//    public String addBank(@RequestBody AddBankDetail addBank){
//        Customer customer = new Customer(addBank.getCardNo(), addBank.getCVCNo(), addBank.getExpiaryDate(), addBank.getCardType());
//        return customerComponent.addBankDetail( customer );
//    }

//    @PostMapping("/newReview")
//    public String addReviews(@RequestBody AddReview addReview){
//        Reviews reviews = new Reviews(addReview.getComment(), new Timestamp(System.currentTimeMillis()), addReview.getRate(), addReview.getDeleted());
//        return customerComponent.addReview( reviews );
//    }

}
