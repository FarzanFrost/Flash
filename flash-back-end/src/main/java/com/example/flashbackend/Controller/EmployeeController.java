package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.EmployeeComponent;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.DAO.*;
import com.example.flashbackend.Entity.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeComponent employeeComponent;

    @Autowired
    EventRepository eventRepository ;

    @GetMapping("/events")

    public List<Event>getEvents(){
        return employeeComponent.getEvents();
    }


//    @GetMapping("/filterEventById")
//
//    public List<Event>getFilterEvents()
//    {
//        Date date = new Date();
//        return employeeComponent.getFilterEvents(2011-01-18);
//    }

//    @GetMapping("/filterevent/{email}")
//
//    public Optional<Event> getFilterEvent(@PathVariable String email) {
//        Optional<Event> Event = eventRepository.findById(email);
//        return Event;
//    }





}


