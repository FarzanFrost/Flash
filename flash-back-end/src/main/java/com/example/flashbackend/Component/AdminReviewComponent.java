package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.Entity.*;
import org.springframework.stereotype.Component;
import java.math.BigInteger;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
//import com.example.flashbackend.DAO.*;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.math.BigInteger;
//import java.util.List;


@Component
public class AdminReviewComponent {

    @Autowired
    ReviewsRepository reviewsRepository;

    public List<Reviews> getReviews(){

        return reviewsRepository.findAll();
    }

    public String deleteReview(BigInteger reviewId) {
        reviewsRepository.deleteById(reviewId);
        return "done";
    }
}
