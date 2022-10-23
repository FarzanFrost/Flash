package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.AddPackages;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.util.List;

@Component
public class AdminEventComponent {

    @Autowired
    EventRepository eventRepository;

    public long getEventCount(){

        return eventRepository.count();
    }

    public List<Event> getEvents(){
        return eventRepository.findAll();
    }

    public String deleteEvent(BigInteger eventId) {
        eventRepository.deleteById(eventId);
        return "done";
    }

}

