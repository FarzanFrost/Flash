package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.AdminReviewComponent;
import com.example.flashbackend.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")

public class Admin {

    @Autowired
    AdminReviewComponent AdminReviewComponent;

    @GetMapping("/Reviews")
    public List<Reviews> getReviews(){
        return AdminReviewComponent.getReviews();
    }
}
