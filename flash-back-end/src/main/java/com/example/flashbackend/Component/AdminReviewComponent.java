package com.example.flashbackend.Component;

import com.example.flashbackend.Entity.Reviews;
import org.springframework.stereotype.Component;
import java.math.BigInteger;
import java.util.List;

import com.example.flashbackend.DAO.*;
import org.springframework.beans.factory.annotation.Autowired;

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
