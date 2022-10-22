package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.ManagerComponent;
import com.example.flashbackend.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class Admin {

    @Autowired
    ManagerComponent managerComponent;

    @GetMapping("/Reviews")
    public List<Reviews> getReviews(){
        return managerComponent.getReviews();
    }
}
