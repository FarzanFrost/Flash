package com.example.flashbackend.Controller;
import com.example.flashbackend.Component.AdminEventComponent;
import com.example.flashbackend.Component.AdminReviewComponent;
import com.example.flashbackend.DTO.DeleteEvent;
import com.example.flashbackend.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:3000")

public class Admin {

    @Autowired
    AdminReviewComponent AdminReviewComponent;

    @Autowired
    AdminEventComponent AdminEventComponent;

    @GetMapping("/AdminViewReviews")
    public List<Reviews> getReviews(){

        return AdminReviewComponent.getReviews();
    }

    @PostMapping("/AdminDeleteReview")
        public String deleteReview(@RequestBody BigInteger reviewId) {
            return AdminReviewComponent.deleteReview(reviewId);
    }

    @GetMapping("/AdminViewEvents")
    public List<Event> getEvents(){

        return AdminEventComponent.getEvents();
    }

    @GetMapping("/AdminEventCount")
    public long getEventCount(){
        return AdminEventComponent.getEventCount();
    }

    @PostMapping("/AdminDeleteEvent")
    public String deleteEvent(@RequestBody DeleteEvent deleteEvent) {
        return AdminEventComponent.deleteEvent(deleteEvent.getEventID());
    }

}
