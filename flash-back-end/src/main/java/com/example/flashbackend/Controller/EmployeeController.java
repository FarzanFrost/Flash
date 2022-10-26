package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.EmployeeComponent;
import com.example.flashbackend.DTO.*;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.DAO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeComponent employeeComponent;

    @Autowired
    EventRepository eventRepository ;

    @Autowired
    GalleryImagesRepository galleryImagesRepository;

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


    @PostMapping("/newfolder")
    public String addFolder(@RequestBody AddFolder addFolder){
        return employeeComponent.addFolder( addFolder );
    }

    @PostMapping("/addphotos")
    public String addPhotos(@RequestBody AddPhotos addPhotos){
        return employeeComponent.addPhotos( addPhotos );
    }


}


