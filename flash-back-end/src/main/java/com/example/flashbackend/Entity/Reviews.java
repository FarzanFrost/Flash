package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.sql.Timestamp;

@Entity
public class Reviews {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ReviewsID;

    private String Comment;

    private Timestamp DateTime;

    private int Rate;

    private boolean Deleted;

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
