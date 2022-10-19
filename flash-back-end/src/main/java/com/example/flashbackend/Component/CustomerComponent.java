package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerComponent {
    @Autowired
    EventRepository eventRepository;

//    @Autowired
//    CustomerRepository CustomerRepository;

    @Autowired
    PackageRepository PackageRepository;

    @Autowired
    ReviewsRepository ReviewsRepository;

//    public Optional<Customer> getCustomer(){
//        Optional<Customer> customer = CustomerRepository.findById( "1" );
//        return customer;
//    }

    public List<Event> getEvents(){
        return eventRepository.findAll();

    }

    public List<Package> getPackages(){
        return PackageRepository.findAll();
    }

    public List<Reviews> getReviews(){
        return ReviewsRepository.findAll();
    }

}
