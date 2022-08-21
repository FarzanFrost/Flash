package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Reviews {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ReviewsID;

    private String Comment;

    private Timestamp DateTime;

    private int Rate;

    private boolean Deleted;

    @OneToMany( mappedBy = "reviews")
    @JsonIgnore
    Set<ReviewRelationship> reviewRelationships = new HashSet<>();

    public Reviews(){}

    public Reviews(String comment, Timestamp dateTime, int rate, boolean deleted) {
        Comment = comment;
        DateTime = dateTime;
        Rate = rate;
        Deleted = deleted;
    }

    public BigInteger getReviewsID() {
        return ReviewsID;
    }

    public void setReviewsID(BigInteger reviewsID) {
        ReviewsID = reviewsID;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public Timestamp getDateTime() {
        return DateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        DateTime = dateTime;
    }

    public int getRate() {
        return Rate;
    }

    public void setRate(int rate) {
        Rate = rate;
    }

    public boolean isDeleted() {
        return Deleted;
    }

    public void setDeleted(boolean deleted) {
        Deleted = deleted;
    }
}
