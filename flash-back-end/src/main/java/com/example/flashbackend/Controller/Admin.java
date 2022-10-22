package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.ManagerComponent;
import org.springframework.beans.factory.annotation.Autowired;

public class Admin {

    @Autowired
    ManagerComponent managerComponent;

    @GetMapping("/Reviews")
    public List<Reviews> getReviews(){
        return managerComponent.getReviws();
    }
}
