package com.example.flashbackend.Component;
import com.example.flashbackend.DAO.EventRepository;
import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

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


}
