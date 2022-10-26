package com.example.flashbackend.Component;
import com.example.flashbackend.DAO.EventRepository;
import com.example.flashbackend.Entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public class EmployeeComponent {

    @Autowired
    EventRepository eventRepository;

    public List<Event>getEvents(){
        return eventRepository.findAll();
    }

//    public List<Event>getFilterEvent(String email){
//        return (List<Event>) eventRepository.findById(email).get();
//    }



//    public List<Event>getFilterEvents(Date date) {
//
//        return eventRepository.findByDate(date);
//    }

}
