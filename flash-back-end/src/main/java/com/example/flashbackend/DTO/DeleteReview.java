package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class DeleteReview {

    private BigInteger reviewID;

    public DeleteReview(BigInteger reviewID) {
        this.reviewID = reviewID;
    }

    public DeleteReview() {
    }

    public BigInteger getReviewID() {
        return reviewID;
    }
}
