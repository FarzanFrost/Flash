package com.example.flashbackend.Controller;

import com.example.flashbackend.Component.AdminReviewComponent;
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

    @GetMapping("/AdminViewReviews")
    public List<Reviews> getReviews(){

        return AdminReviewComponent.getReviews();
    }

    @PostMapping("/AdmindeleteReview")
        public String deleteReview(@RequestBody BigInteger reviewId) {
            return AdminReviewComponent.deleteReview(reviewId);
        }

}
