package com.example.flashbackend.DTO;

import java.sql.Timestamp;

public class AddReview {

    private String comment;

    private Timestamp dateTime;

    private Integer rate;

    private Boolean deleted;

    public AddReview(String comment, Timestamp dateTime, Integer rate, Boolean deleted){
        this.comment = comment;
        this.dateTime = dateTime;
        this.rate = rate;
        this.deleted = deleted;
    }

    public String getComment() {
        return comment;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public Integer getRate() {
        return rate;
    }

    public Boolean getDeleted() {
        return deleted;
    }

}
