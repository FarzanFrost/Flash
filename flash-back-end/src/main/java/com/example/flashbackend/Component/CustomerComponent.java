package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.AddReview;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.List;

@Component
public class CustomerComponent {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

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

//    public String addNewEvent(Event event, Customer customer, Package packages){
//        eventRepository.insertEvent( event.getStatus(), event.getAdvanceAmount(), event.getEventDate(), event.getStartTime(), event.getEndTime(), event.getAddress(), event.getLatitude(), event.getLongitude(), event.getExtraPage(), event.getCategory(), event.isDelivered(), customer.getCustomerID(), packages.getPackageID() );
//        return "done";
//    }

    public String updateEvent(Event event, Package packages){
        eventRepository.updateEvent(event.getEventID(), event.getStatus(), event.getAdvanceAmount(), event.getEventDate(), event.getStartTime(), event.getEndTime(), event.getAddress(), event.getLatitude(), event.getLongitude(), event.getExtraPage(), event.getCategory(), event.isDelivered(), packages.getPackageID());
        return "done";
    }

//    public String addBankDetail(Customer customer){
//       customerRepository.save(customer);
//       return "done";
//    }

    public String addReview(Reviews reviews){
        ReviewsRepository.save( reviews );
        return "done";
    }

}
