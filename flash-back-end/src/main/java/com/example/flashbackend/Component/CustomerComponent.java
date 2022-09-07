package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

public class CustomerComponent {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getCustomer(){
        return customerRepository.findAll();

    }

    public List<Event> getEvents(){
        return eventRepository.findAll();

    }

}
