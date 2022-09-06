package com.example.flashbackend.Component;
import com.example.flashbackend.DAO.EventRepository;
import com.example.flashbackend.Entity.Event;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public class EmployeeComponent {

    @Autowired
    EventRepository eventRepository;

    public List<Event>getEvents(){
        return eventRepository.findAll();
    }

}
