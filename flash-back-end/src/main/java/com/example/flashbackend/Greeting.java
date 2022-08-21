package com.example.flashbackend;

import com.example.flashbackend.DAO.CustomerRepository;
import com.example.flashbackend.DAO.EventRepository;
import com.example.flashbackend.DAO.LoginRepository;
import com.example.flashbackend.DAO.PackageRepository;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
public class Greeting {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    PackageRepository packageRepository;

    @Autowired
    LoginRepository loginRepository;

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/")
    public List<Event> greetMessage(){

        List<Event> events = eventRepository.findAll();

        Package aPackage = packageRepository.findByEvents( events.get( 0 ) );

//        List<Login> logins = loginRepository.findAll();

//        Optional<Login> login = loginRepository.findById( "farzan@gmail.com" );

//        Customer customer = customerRepository.findByLogin( login );

        return events ;

    }

}
