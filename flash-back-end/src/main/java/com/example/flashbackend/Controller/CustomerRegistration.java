package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.AddCustomer;
import com.example.flashbackend.DAO.LoginRepository;
import com.example.flashbackend.DTO.RegistrationForm;
import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class CustomerRegistration {

    @Autowired
    AddCustomer addCustomer;

    @Autowired
    LoginRepository loginRepository;

    @PostMapping("/createUser")
    public String Registration(@RequestBody RegistrationForm registrationForm){

        Customer customer = new Customer(registrationForm.getFirstName(), registrationForm.getLastName(), registrationForm.getGender(), registrationForm.getNicNumber(), registrationForm.getContactNumber() , null , null , null ,null);

        Login login = new Login(registrationForm.getEmail(), registrationForm.getPassword(), "faranfrost" , new Timestamp(System.currentTimeMillis()) );

//        customer.setLogin( login );

//        login.setCustomer( customer );

        addCustomer.addCustomer( customer , login );

        return "done";
    }

    @GetMapping( "/getUserDetails/{email}")
    public Login getUserDetails( @PathVariable String email ){

        Optional<Login> login = loginRepository.findById( email );

        return login.get();

    }

}
