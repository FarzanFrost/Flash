package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.AddBankDetail;
import com.example.flashbackend.DTO.AddEvent;
import com.example.flashbackend.DTO.EditEvent;
import com.example.flashbackend.DTO.AddReview;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Package;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.math.BigInteger;
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

    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }

    public List<Event> getEvents(){
        return eventRepository.findAll();

    }

    public List<Package> getPackages(){
        return PackageRepository.findAll();
    }

    public List<Reviews> getReviews(){
        return ReviewsRepository.findAll();
    }

    public String addNewEvent( AddEvent addEvent ){
        eventRepository.insertEvent( addEvent.getStatus(), addEvent.getAdvanceAmount(), addEvent.getEventDate(), addEvent.getStartTime(), addEvent.getEndTime(), addEvent.getAddress(), addEvent.getLatitude(), addEvent.getLongitude(), addEvent.getExtraPage(), addEvent.getCategory(), addEvent.getDelivered(), addEvent.getCustomerId(), addEvent.getPackageId() );
        return "done";
    }

    public String updateEvent( EditEvent editEvent){
        eventRepository.updateEvent( editEvent.getStatus(), editEvent.getAdvancedAmount(), editEvent.getEventDate(), editEvent.getStartTime(), editEvent.getEndTime(), editEvent.getAddress(), editEvent.getLatitude(), editEvent.getLongitude(), editEvent.getExtraPage(), editEvent.getCategory(), editEvent.getDelivered(), editEvent.getCustomerId(), editEvent.getPackageId());
        return "done";
    }

    public String addBankDetail( AddBankDetail addBankDetail){
       customerRepository.updateCustomer( addBankDetail.getFirstName(), addBankDetail.getLastName(), addBankDetail.getGender(), addBankDetail.getNIC(), addBankDetail.getContactNo(), addBankDetail.getCardNo(), addBankDetail.getCVCNo(), addBankDetail.getExpiaryDate(), addBankDetail.getCardType() );
       return "done";
    }

    public String addReview(Reviews reviews){
        ReviewsRepository.save( reviews );
        return "done";
    }

    public String deleteCustomer(BigInteger customerId ){

        customerRepository.deleteById( customerId );
        return "done";
    }

    public String deleteReview(BigInteger reviewId ){

        ReviewsRepository.deleteById( reviewId );
        return "done";
    }

//    public String deleteEvent( BigInteger eventId ){
//
//        eventRepository.deleteById( eventId );
//        return "done";
//
//    }

}
