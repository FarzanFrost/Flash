package com.example.flashbackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.flashbackend.Component.CustomerComponent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.flashbackend.Entity.Event;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class Customer {

//    @GetMapping("/getEvents")
    @GetMapping("/Events")

    public List<Event> getEvents(){
        return CustomerComponent.getEvents();
    }
}
